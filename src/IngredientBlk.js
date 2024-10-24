export default function IngredientBlk({text}){
    return (
        <div className="Ingredients">
            <ul>
               {text.map((t) => (
                <li>{t}</li>
               ))}
            </ul>
        </div>

    );
}