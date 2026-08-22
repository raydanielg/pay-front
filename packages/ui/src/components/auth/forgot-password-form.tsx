import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { toastSuccess } from "@workspace/ui/lib/toast"

export function ForgotPasswordForm({
  className,
  onSwitch,
  ...props
}: React.ComponentProps<"form"> & { onSwitch?: (page: string) => void }) {
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toastSuccess("Code sent!", "Check your email for the verification code.")
    }, 2000)
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Forgot password?</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email and we will send you a verification code
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Type your email address" required />
        </Field>

        <Field>
          <Button type="submit" loading={loading}>Send verification code</Button>
          <FieldDescription className="text-center">
            Remember your password?{" "}
            <button
              type="button"
              onClick={() => onSwitch?.("login")}
              className="underline underline-offset-4"
            >
              Back to login
            </button>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
