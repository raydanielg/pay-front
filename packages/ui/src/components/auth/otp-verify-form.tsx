import * as React from "react"
import { useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@workspace/ui/components/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@workspace/ui/components/input-otp"
import { toastSuccess, toastError } from "@workspace/ui/lib/toast"

export function OtpVerifyForm({
  className,
  onSwitch,
  ...props
}: React.ComponentProps<"form"> & { onSwitch?: (page: string) => void }) {
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length !== 6) {
      toastError("Incomplete code", "Please enter all 6 digits.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toastSuccess("Verified!", "Your code has been verified successfully.")
    }, 2000)
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Verify your code</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter the 6-digit code sent to your phone
          </p>
        </div>

        <Field>
          <div className="flex justify-center">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={6}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <span className="text-2xl font-light text-muted-foreground mx-1">-</span>
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </Field>

        <Field>
          <Button type="submit" disabled={otp.length !== 6} loading={loading}>
            Verify code
          </Button>
          <FieldDescription className="text-center">
            Did not receive a code?{" "}
            <button type="button" className="underline underline-offset-4">
              Resend in 0:30
            </button>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
