import "./landing.css"
import TagCard from '../components/tagCard.js'
import { useState, useEffect }  from "react"

export default function Landing(){
    const [tags, setTags] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/tags")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTags(data.tags);
            })
        },[]);

    return (
        <div className="Home">
           <div className="tag-grid">
                {tags && 
                    tags.map(t => (
                        <TagCard tag={t}/>
                    ))
                }
           </div>
        </div>
    );
}