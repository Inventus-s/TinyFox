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
import { useEffect, useState } from "react";
import * as Yup from 'yup'
import useFetch from "@/hooks/useFetch";
import { login } from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Errors {
    email?: string;
    password?: string;
}


function Login() {
    const [errors, setErrors] = useState<Errors>({});
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const longLink = searchParams.get('createNew');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const { data, error, loading, fn: fnLogin } = useFetch(login, formData);

    useEffect(() => {
        if (error === null && data) {
            navigate(`/dashboard?${longLink ? `createNew${longLink}` : ""}`)
        }
    }, [data, error])

    const handleLogin = async () => {
        setErrors({});
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email("Invalid Email").required("Email is required"),
                password: Yup.string()
                    .min(6, "Password must be at least 6 characters").required("Password is required"),
            });
            await schema.validate(formData, { abortEarly: false });
            // api call
            await fnLogin()
        } catch (error: unknown) {
            const newErrors: Record<string, string> = {};
            if (error instanceof Yup.ValidationError) {
                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path] = err.message;
                    }
                });
            }
            setErrors(newErrors);
        }
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>to your account if you already have one</CardDescription>
                    {error && <Error message={error?.message} />}
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Input type="email" name="email" placeholder="Enter Email" onChange={handleInputChange} />
                        {errors.email && <Error message={errors.email} />}
                    </div>
                    <div className="space-y-1">
                        <Input type="password" name="password" placeholder="Enter Password" onChange={handleInputChange} />
                        {errors.password && <Error message={errors.password} />}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleLogin}>
                        {loading ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
                    </Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Login