import { Link } from "react-router";

export default function TagCard({tag}){

    return (
        <div className={`tag-card ${tag}`}>
            <img src={require("../birthdaycake.png")} alt="Birthday Cake"/>
            <p className="tag-name">{tag}</p>
        </div>
    );
}
