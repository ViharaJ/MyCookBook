import {useState, useEffect} from "react-router-dom"
import RecCard from "../components/recCard";

export default function (){
    const [recs, setRecs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setRecs(data.recipes);
            })
        },[]);

    return (
        <div className="Home">
           <div className="tag-grid">
                {recs && 
                    recs.map(t => (
                        <RecCard rec={t}/>
                    ))
                }
           </div>
        </div>
    );
}