import { Outlet } from 'react-router-dom'
import Navbar from '../navbar.js'

export default function Landing(){
    return (
        <div className="Home">
           <Navbar/>
           <div className="detail">
                <Outlet/>
            </div>
        </div>
    )
}