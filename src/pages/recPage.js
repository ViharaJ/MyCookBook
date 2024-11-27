import IngredientBlk from "../components/IngredientBlk";
import InstructBlk from "../components/InstructionBlk";
import "./recpage.css"

export default function RecPage(){
    let rec = {"id":1, "name":"Chicken Pasta", "ingredients":["blah", "blah", "blah", "blah", "blah", "blah"], "explanations":["asdljfasl;dfjasdl;fj", "asdfasdfasdf"]};
    
    return (
        <div className="rec-page">
                <h2>{rec.name}</h2>
                <div className="img-container">
                    <img className="rec-image" src={require("./pasta.jpg")} alt="Chicken Pasta"/>
                </div>
                
                <div className="info">
                    <IngredientBlk text={rec.ingredients}/>

                    <InstructBlk text={rec.explanations}/>
                </div>
                
        </div>
    );
}