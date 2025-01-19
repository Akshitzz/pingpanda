import { currentUser } from "@clerk/nextjs/server"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { DashBoardPage } from "@/components/ui/dashboard-page"
import CategoryPageContent from "./category-page-content"
interface PageProps{
    params :{
        name :string | string [] | undefined
    }
}
const Page =async({params}:PageProps)=>{
if( typeof params.name !== "string") return notFound()
    const auth = await currentUser()
if(!auth){
    return notFound() 
}
const user = await db.user.findUnique({
    where : {externalId : auth.id}
})
if(!user) return notFound()
const category = await db.eventCategory.findUnique({
    where :{
        name_userId:{
            name : params.name,
            userId : user.id
        },
    },
    include : {
        _count : {
            select : {
                events :true,
            },
        },
    },
})
if(!category) return notFound()
    const hasEvents = category._count.events >0
return (
    <DashBoardPage title={`${category.emoji} ${category.name}`}>
        <CategoryPageContent hasEvents={hasEvents} category={category}/>
    </DashBoardPage>
)
}
export default PageProps