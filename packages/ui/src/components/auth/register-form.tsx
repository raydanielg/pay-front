import * as React from "react"
import { useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { PhoneInput, type Country } from "@workspace/ui/components/auth/phone-input"
import { PasswordInput } from "@workspace/ui/components/auth/password-input"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { toastSuccess } from "@workspace/ui/lib/toast"

export function RegisterForm({
  className,
  onSwitch,
  ...props
}: React.ComponentProps<"form"> & { onSwitch?: (page: string) => void }) {
  const [phone, setPhone] = useState("")
  const [, setCountry] = useState<Country | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toastSuccess("Account created!", "Welcome to XerinPay. Please verify your phone number.")
    }, 2000)
  }

  return (
    <form className={cn("flex flex-col gap-5", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center mb-1">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Start accepting payments in minutes
          </p>
        </div>

        {/* First name & Last name grid */}
        <div className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="firstName">First name</FieldLabel>
            <Input id="firstName" type="text" placeholder="Type your first name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="lastName">Last name</FieldLabel>
            <Input id="lastName" type="text" placeholder="Type your last name" required />
          </Field>
        </div>

        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Type your email address" required />
        </Field>

        {/* Phone */}
        <Field>
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
          <PhoneInput
            id="phone"
            value={phone}
            placeholder="Type your phone number"
            onChange={(val, selectedCountry) => {
              setPhone(val)
              setCountry(selectedCountry)
            }}
            required
          />
        </Field>

        {/* Password */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <PasswordInput id="password" placeholder="Type your password (min. 8 chars)" required />
        </Field>

        {/* Confirm password */}
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm password</FieldLabel>
          <PasswordInput id="confirm-password" placeholder="Type your password again" required />
        </Field>

        {/* Terms checkbox */}
        <Field>
          <div className="flex items-center gap-2 pt-1">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-xs text-muted-foreground cursor-pointer select-none whitespace-nowrap">
              I agree to the{" "}
              <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
        </Field>

        {/* Submit button */}
        <Field className="pt-2">
          <Button type="submit" className="w-full" loading={loading}>
            Sign Up
          </Button>
          <FieldDescription className="text-center mt-2">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => onSwitch?.("login")}
              className="underline underline-offset-4 font-medium text-foreground"
            >
              Login
            </button>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
