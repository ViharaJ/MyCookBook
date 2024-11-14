import IngredientBlk from "../IngredientBlk";
import InstructBlk from "../InstructionBlk";
import Navbar from "../navbar";

export default function RecPage(){
    let rec = {"id":1, "name":"Chicken Pasta", "ingredients":["blah", "blah", "blah", "blah", "blah", "blah"], "explanations":["asdljfasl;dfjasdl;fj", "asdfasdfasdf"]};

    return (
        <>
            <Navbar/>
            <div className="rec-page">
                <h2>{rec.name}</h2>
                <IngredientBlk text={rec.ingredients}/>
                <InstructBlk text={rec.explanations}/>
            </div>
        </>
    );
}