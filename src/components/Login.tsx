import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { BeatLoader } from "react-spinners";
import Error from "./Error";
import { useState } from "react";


function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>to your account if you already have one</CardDescription>
                    <Error message="Some Error" />
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Input type="email" name="email" placeholder="Enter Email" />
                        <Error message="Some Error" />
                    </div>
                    <div className="space-y-1">
                        <Input type="password" name="password" placeholder="Enter Password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>
                        {true ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
                    </Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Login