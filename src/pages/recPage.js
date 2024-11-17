import IngredientBlk from "../components/IngredientBlk";
import InstructBlk from "../components/InstructionBlk";
import Navbar from "../components/navbar";
import "./recpage.css"

export default function RecPage(){
    let rec = {"id":1, "name":"Chicken Pasta", "ingredients":["blah", "blah", "blah", "blah", "blah", "blah"], "explanations":["asdljfasl;dfjasdl;fj", "asdfasdfasdf"]};

    return (
        <>
            <Navbar/>
            <div className="rec-page">
                <h2>{rec.name}</h2>
                <div className="img-container">
                    <img className="rec-image" src={require("./pasta.jpg")} alt="Chicken Pasta"/>
                </div>
                
                <div className="info">
                    <div>
                        <ul className="servings">
                            <li>Prep time:</li>
                            <li>Cook time:</li>
                            <li>Servings:</li>
                        </ul>
                        <IngredientBlk text={rec.ingredients}/>
                    </div>

                    <InstructBlk text={rec.explanations}/>
                </div>
                
            </div>
        </>
    );
}