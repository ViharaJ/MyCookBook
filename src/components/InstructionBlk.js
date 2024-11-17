export default function InstructBlk({text}){
    return (
        <div className="instructions">
           <h5>Instructions</h5>
            {
                text.map((t) => (
                    <p>{t}</p>
                ))
            }
        </div>

    );
}