import * as React from "react"
import { MagnifyingGlassIcon as SearchIcon  } from "@radix-ui/react-icons"


import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
      <div className="h-auto w-auto rounded-md border border-input bg-transparent px-3 py-0 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex justify-center align-middle gap-2
        hover:decoration-slice
      ">
      <SearchIcon className="h-[28px] w-[28px] text-slate-300 " />
      <input
        type={type}
        className={cn(
          "outline-none",
          className
          )}
          ref={ref}
          {...props}
          />
        
      </div>


          </>
    )
  }
)
Input.displayName = "Input"

export { Input }
