import IngredientBlk from "./IngredientBlk";
import InstructBlk from "./InstructionBlk";

export default function RecPage(){
    let rec = {"id":1, "ingredients":["blah", "blah", "blah", "blah", "blah", "blah"], "explanations":["asdljfasl;dfjasdl;fj", "asdfasdfasdf"]};

    return (
        <div className="rec-page">
            //TODO MAKE IMAGE THING
            <IngredientBlk text={rec.ingredients}/>
            <InstructBlk text={rec.explanations}/>
        </div>
    );
}