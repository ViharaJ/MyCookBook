import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <h1><Link to={"/"}>My Cook Book</Link></h1>
            <ul className="nav-links">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/create"}>New Recipe</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
        </nav>
    );
}