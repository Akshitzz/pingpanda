import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { DashBoardPage } from "@/components/ui/dashboard-page";
import { UpgradePageContent } from "./upgrade-page-content";
const Page =async()=>{
const auth = await currentUser()
if(!auth){
    redirect("/sign-n")
}
const user = await db.user.findUnique({
    where : { externalId : auth.id},

})
if(!user){
    redirect("/signin")
}
return <DashBoardPage title ="Pro Membership">
<UpgradePageContent plan={user.plan} />
</DashBoardPage>
}

export default Page;