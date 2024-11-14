import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <h1> My Cook Book</h1>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/create"}>New Recipe</Link></li>
            </ul>
        </nav>
    );
}