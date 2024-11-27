import { Link } from "react-router-dom";

export default function RecCard({rec}){

    return (
        <div className={`tag-card ${rec}`}>
            <Link to={`/recipes/${rec.id}`}><img src={require("../birthdaycake.png")} alt="Birthday Cake"/></Link>
            <Link to={`/recipes/${rec.id}`}><p className="tag-name">{rec.name}</p></Link>
        </div>
    );
}
