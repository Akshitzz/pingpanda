import { HTMLAttributes,ReactNode } from "react"
import { cn } from "@/utils"
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{
children?:ReactNode
}
export const Heading =({children,className,...props}:HeadingProps)=>{
return <h1 className={cn("text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-600",className)}   {...props}>
  {children}
</h1>
}