export default function signUp() {
    return(
        <form>
            <label>Email: <input type="text"/></label>
            <label>Password: <input type="password" name="password"/></label>
            <button>Sign up</button>
        </form>
    );
}