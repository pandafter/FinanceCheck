import { Outlet } from "react-router-dom"
import { Navbar } from "../components/LayoutComponents/Navbar"


export const LayoutMain = () => {
    return (
        <div className="w-full h-full">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
