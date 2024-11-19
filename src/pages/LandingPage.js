import "./landing.css"
import TagCard from '../components/tagCard.js'

export default function Landing(){
    let tags = ["desrt", "lunch", "dinner", "forest"];

    return (
        <div className="Home">
           <div className="tag-grid">
                {
                    tags.map(t => (
                        <TagCard tag={t}/>
                    ))
                }
           </div>
        </div>
    );
}