import IngredientBlk from "../IngredientBlk";
import InstructBlk from "../InstructionBlk";
import Navbar from "../navbar";

export default function RecPage(){
    let rec = {"id":1, "ingredients":["blah", "blah", "blah", "blah", "blah", "blah"], "explanations":["asdljfasl;dfjasdl;fj", "asdfasdfasdf"]};

    return (
        <div className="rec-page">
            <Navbar/>
            //TODO MAKE IMAGE THING
            <IngredientBlk text={rec.ingredients}/>
            <InstructBlk text={rec.explanations}/>
        </div>
    );
}