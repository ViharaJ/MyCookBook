import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const search = (e) => {
        e.preventDefault();
        console.log(email, password);

        fetch("http://localhost:3000/users", {
            method: "GET", 
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(recpie)
        }).then(() => {
            console.log("Recipe added");
        })
    };

    return(
        <form onSubmit={search}>
            <label>Email: <input type="text" name="email" onChange={e => setEmail(e.target.value)}/></label>
            <label>Password: <input type="password" name="password" onChange={e => setPass(e.target.value)}/></label>
            <button type="submit">Login</button>
        </form>
    );

}