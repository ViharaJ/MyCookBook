import { Outlet } from 'react-router-dom'
import Navbar from '../navbar.js'

export default function Landing(){
    return (
        <div className="Home">
           <Navbar/>
           <table>
                <tr>
                    <th>Name</th>
                    <th>Tag</th>
                    <th>Calories</th>
                </tr>
                <tr>
                    <td>Egg fried rice</td>
                    <td>Rice</td>
                    <td>340</td>
                </tr>
           </table>
           <div className="detail">
                <Outlet/>
            </div>
        </div>
    )
}