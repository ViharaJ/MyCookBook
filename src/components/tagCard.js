export default function TagCard({tag}){
    console.log("tag, i'm creating");
    return (
        <div className={`tag-card ${tag}`}>
            <img src="../birthdaycake.png" alt="Birthday Cake"/>
            <h4><b>{tag}</b></h4>
        </div>
    );
}
