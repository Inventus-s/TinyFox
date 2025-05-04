import Header from "@/components/Header"
import { Outlet } from "react-router-dom"

function AppLayout() {
    return (
        <div>
            <main className="min-h-screen container mx-auto">
                {/* Header */}
                <Header />
                <Outlet />
            </main>
            {/* Footer */}
            <footer className="p-10 text-center bg-gray-800 mt-10">
                Made with 💝 by Mukund Kumar
            </footer>
        </div>
    )
}

export default AppLayout