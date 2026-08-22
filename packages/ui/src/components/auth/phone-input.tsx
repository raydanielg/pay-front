import * as React from "react"
import { IconChevronDown, IconCheck } from "@tabler/icons-react"
import { cn } from "@workspace/ui/lib/utils"
import { Input } from "@workspace/ui/components/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export interface Country {
  name: string
  code: string
  dialCode: string
  flag: string
  placeholder: string
}

export const COUNTRIES: Country[] = [
  { name: "Tanzania", code: "TZ", dialCode: "+255", flag: "🇹🇿", placeholder: "712 345 678" },
  { name: "Kenya", code: "KE", dialCode: "+254", flag: "🇰🇪", placeholder: "712 345 678" },
]

interface PhoneInputProps extends Omit<React.ComponentProps<"input">, "onChange"> {
  value?: string
  onChange?: (value: string, country: Country) => void
  defaultCountry?: string
}

export function PhoneInput({
  value = "",
  onChange,
  defaultCountry = "TZ",
  className,
  ...props
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = React.useState<Country>(() => {
    return COUNTRIES.find((c) => c.code === defaultCountry) || COUNTRIES[0]
  })
  const [open, setOpen] = React.useState(false)

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "")
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    onChange?.(formatted, selectedCountry)
  }

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country)
    setOpen(false)
    onChange?.(value, country)
  }

  return (
    <div className={cn("relative flex items-center", className)}>
      {/* Country selector button inside the input */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          type="button"
          className="absolute left-3.5 flex items-center gap-2 z-10 outline-none"
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <span className="text-sm font-medium text-foreground">
            {selectedCountry.dialCode}
          </span>
          <IconChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </PopoverTrigger>

        <PopoverContent
          align="start"
          sideOffset={6}
          className="w-56 p-1 shadow-lg border border-border bg-popover rounded-lg overflow-hidden"
        >
          {COUNTRIES.map((country) => {
            const isSelected = country.code === selectedCountry.code
            return (
              <button
                key={country.code}
                type="button"
                onClick={() => handleSelectCountry(country)}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors",
                  isSelected
                    ? "bg-accent text-accent-foreground font-medium"
                    : "hover:bg-muted/60 text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none">{country.flag}</span>
                  <span>{country.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted-foreground font-mono">
                    {country.dialCode}
                  </span>
                  {isSelected && (
                    <IconCheck className="size-3.5 text-primary shrink-0" />
                  )}
                </div>
              </button>
            )
          })}
        </PopoverContent>
      </Popover>

      {/* Single unified input */}
      <Input
        type="tel"
        placeholder={selectedCountry.placeholder}
        value={value}
        onChange={handleInputChange}
        className="h-10 pl-[100px] flex-1 text-base"
        {...props}
      />
    </div>
  )
}
