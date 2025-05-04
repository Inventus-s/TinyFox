import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";

function Header() {
    const navigate = useNavigate();
    const user = false;
    return (
        <nav className="py-4 flex justify-between items-center">
            <Link to={'/'} >
                <img src="/logo-2.png" className="h-[150px]" alt="TinyFox Logo" />
            </Link>

            <div>
                {!user ?
                    <Button onClick={() => navigate('/auth')}>Login</Button>
                    : (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
                                <Avatar className="w-10 h-auto">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Mukund Kumar</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LinkIcon className="mr-2 h-4 w-4" />
                                    <span>My Links</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-400">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    )
                }
            </div>
        </nav>
    )
}

export default Header