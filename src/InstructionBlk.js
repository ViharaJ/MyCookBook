export default function InstructBlk({text}){
    return (
        <div className="instructions">
            {
                text.map((t) => (
                    <p>{t}</p>
                ))
            }
        </div>

    );
}