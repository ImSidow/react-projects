import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <main className="bg-[#F3F5FF] h-screen">
            <Outlet />
        </main>
    )
}