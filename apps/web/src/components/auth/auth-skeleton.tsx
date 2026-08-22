import { Skeleton } from "@workspace/ui/components/skeleton"

export function AuthSkeleton() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side — form skeleton */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Skeleton className="h-12 w-12 rounded-lg" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs flex flex-col gap-6">
            {/* Title */}
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-56" />
            </div>
            {/* Email field */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            {/* Password field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-28" />
              </div>
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            {/* Button */}
            <Skeleton className="h-10 w-full rounded-md" />
            {/* Footer */}
            <div className="flex justify-center">
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side — image skeleton */}
      <div className="relative hidden bg-muted lg:block">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>
    </div>
  )
}
