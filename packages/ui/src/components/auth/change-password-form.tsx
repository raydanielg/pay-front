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
import { PasswordInput } from "@workspace/ui/components/auth/password-input"
import { toastSuccess, toastError } from "@workspace/ui/lib/toast"

export function ChangePasswordForm({
  className,
  onSwitch,
  ...props
}: React.ComponentProps<"form"> & { onSwitch?: (page: string) => void }) {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [match, setMatch] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!match || password.length < 8) {
      toastError("Invalid password", "Please ensure passwords match and meet all requirements.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toastSuccess("Password updated!", "Your password has been changed successfully.")
    }, 2000)
  }

  const checks = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "One number", ok: /\d/.test(password) },
    { label: "One special character", ok: /[^A-Za-z0-9]/.test(password) },
  ]

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Set a new password</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Choose a strong password for your account
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="password">New password</FieldLabel>
          <PasswordInput
            id="password"
            placeholder="Type your new password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setMatch(e.target.value === confirm || confirm === "")
            }}
            required
          />
          {password && (
            <div className="mt-3 space-y-1.5">
              {checks.map((check) => (
                <div key={check.label} className="flex items-center gap-2 text-xs">
                  <span className={check.ok ? "text-primary" : "text-muted-foreground"}>
                    {check.ok ? "✓" : "○"}
                  </span>
                  <span className={check.ok ? "text-foreground" : "text-muted-foreground"}>
                    {check.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm password</FieldLabel>
          <PasswordInput
            id="confirm-password"
            placeholder="Type your new password again"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value)
              setMatch(e.target.value === password)
            }}
            required
          />
          {!match && (
            <FieldDescription className="text-destructive">
              Passwords do not match
            </FieldDescription>
          )}
        </Field>

        <Field>
          <Button type="submit" disabled={!match || password.length < 8} loading={loading}>
            Update password
          </Button>
          <FieldDescription className="text-center">
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
