export default function IngredientBlk({text}){
    return (
        <div className="ingredients">
            <h5>Ingredients</h5>
            <ul>
               {text.map((t) => (
                <li>{t}</li>
               ))}
            </ul>
        </div>

    );
}