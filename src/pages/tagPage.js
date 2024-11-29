import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import RecCard from "../components/recCard";
import "./tagpage.css"

export default function TagPage(){
    const {tag} = useParams();

    const [recs, setRecs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
            .then(res => {
                return res.json();
            })
            .then(data => {
                let newD = data.filter(d =>  d.tag === tag);
                setRecs(newD);
            })
        },[]);

    return (
        <div className="Home">
           <div className="rec-grid">
                {recs && 
                    recs.map(t => (
                        <RecCard rec={t}/>
                    ))
                }
           </div>
        </div>
    );
}