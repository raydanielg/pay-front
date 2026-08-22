import { toast as toastManager } from "@workspace/ui/components/toast"

type ToastType = "success" | "error" | "info" | "warning" | "loading"

interface ToastOptions {
  title: string
  description?: string
  type?: ToastType
  duration?: number
}

export function toast({ title, description, type = "info", duration = 4000 }: ToastOptions) {
  toastManager.add({
    title,
    description,
    type,
    timeout: duration,
  })
}

export function toastSuccess(title: string, description?: string) {
  toast({ title, description, type: "success" })
}

export function toastError(title: string, description?: string) {
  toast({ title, description, type: "error" })
}

export function toastInfo(title: string, description?: string) {
  toast({ title, description, type: "info" })
}

export function toastWarning(title: string, description?: string) {
  toast({ title, description, type: "warning" })
}
