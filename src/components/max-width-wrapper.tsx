import { ReactNode } from "react"
import {cn} from "@/utils"
interface MaxWidthProps{
    className?: string
    children :ReactNode
}
export const MaxWidthWrapper=({className,children}:MaxWidthProps)=>{
    return <div className={cn("h-full mx-auto w-full max-w-screen-xl md:px-20",className)}>
        {children}
    </div>
}