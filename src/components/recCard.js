import { Link } from "react-router-dom";

export default function RecCard({rec}){

    return (
        <div className={`rec-card`}>
            <Link to={`/recipes/${rec.id}`}><img src={require("../birthdaycake.png")} alt="Birthday Cake"/></Link>
            <Link to={`/recipes/${rec.id}`}><p className="rec-name">{rec.name}</p></Link>
        </div>
    );
}
