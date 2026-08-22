import { useState, useEffect } from "react"
import { LoginForm } from "@workspace/ui/components/auth/login-form"
import { RegisterForm } from "@workspace/ui/components/auth/register-form"
import { ForgotPasswordForm } from "@workspace/ui/components/auth/forgot-password-form"
import { OtpVerifyForm } from "@workspace/ui/components/auth/otp-verify-form"
import { ChangePasswordForm } from "@workspace/ui/components/auth/change-password-form"
import logo from "@/assets/icons/logo.png"
import { AuthCarousel } from "@/components/auth/auth-carousel"
import { AuthSkeleton } from "@/components/auth/auth-skeleton"
import { Dashboard } from "@/components/dashboard/dashboard"

type AuthPage = "login" | "register" | "forgot-password" | "otp-verify" | "change-password"
type View = "auth" | "dashboard"

export function App() {
  const [view, setView] = useState<View>("auth")
  const [page, setPage] = useState<AuthPage>("login")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const renderForm = () => {
    switch (page) {
      case "login":
        return <LoginForm onSwitch={(p) => setPage(p as AuthPage)} onLoginSuccess={() => setView("dashboard")} />
      case "register":
        return <RegisterForm onSwitch={(p) => setPage(p as AuthPage)} />
      case "forgot-password":
        return <ForgotPasswordForm onSwitch={(p) => setPage(p as AuthPage)} />
      case "otp-verify":
        return <OtpVerifyForm onSwitch={(p) => setPage(p as AuthPage)} />
      case "change-password":
        return <ChangePasswordForm onSwitch={(p) => setPage(p as AuthPage)} />
    }
  }

  if (loading) {
    return <AuthSkeleton />
  }

  if (view === "dashboard") {
    return <Dashboard />
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2.5 font-medium">
            <img src={logo} alt="XerinPay" className="h-37 w-auto" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {renderForm()}
          </div>
        </div>
      </div>
      <AuthCarousel />
    </div>
  )
}
