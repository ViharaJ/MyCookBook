import { Link } from "react-router-dom";

export default function TagCard({tag}){

    return (
        <div className={`tag-card ${tag}`}>
            <Link to={`/recipes/${tag}`}><img src={require("../birthdaycake.png")} alt="Birthday Cake"/></Link>
            <Link to={`/recipes/${tag}`}><p className="tag-name">{tag}</p></Link>
        </div>
    );
}
