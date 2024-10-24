import { useState } from "react";

export default function InsertPage(){
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const recpie = {title, ingredients, instructions};
        fetch("http://localhost:3000/recipes", {
            method: "POST", 
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(recpie)
        }).then(() => {
            console.log("Recipe added");
        })
    };

    return (
        <form className="sub-form" onSubmit={handleSubmit}>
            <label>
                Recipe Name: <input type="text" onChange={e => setTitle(e.target.value)}/>   
            </label>
            <br/>
            <label> 
               Ingredients <textarea onChange={e => setIngredients(e.target.value)}/>   
            </label>
            <br/>
            <label>
               Instructions <textarea onChange={e => setInstructions(e.target.value)}/>   
            </label>
            <button>Submit</button>
        </form>

    );
}