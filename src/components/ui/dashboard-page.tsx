"use client"
import { ReactNode } from "react";
import { Button } from "./button";
import { ArrowLeft, Divide } from "lucide-react";
import { Heading } from "../heading";
import { useRouter } from "next/router";
interface DashboardPageProps {
    title :string,
    children?: ReactNode
    hideBackButton?:boolean
    cta?:ReactNode
}
export const DashBoardPage =({title,children,cta,hideBackButton}:DashboardPageProps)=>{
    const router =useRouter()
    return <section className="flex-1 h-full w-full flex flex-col">
        <div className="p-6 sm:p-8 w-full flex justify-between border-b border-gray-200">
            <div className=" w-full flex flex-col sm:flex-row items-start sm:items-center gap-6 ">
             <div className="flex items-center gap-8">
             {hideBackButton ?null:(<Button  onClick={()=>router.push("/dashboard")} variant="outline" className="w-fit bg-white">
                    <ArrowLeft className="size-4"/>
                </Button>)}
                <Heading>{title}</Heading>
                {cta? <div>{cta}</div>:null}
             </div>

            </div>
        </div>

        <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">{children}</div>
    </section>
}