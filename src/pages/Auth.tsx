import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";

function Auth() {
    const [searchParams] = useSearchParams();
    return (
        <div className="mt-36 flex flex-col items-center gap-10">
            <h1 className="text-5xl font-extrabold">{searchParams.get("createNew") ? "Hold up! Let's login first..." : "Login / SignUp"}</h1>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">SignUp</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="signup">
                    <SignUp />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Auth