import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar.js'

export default function Root() {
    return (
        <div className="Home">
           <Navbar/>
           <Outlet/>
        </div>
    )
}