import "./AddTodoForm.css"
const AddTodoForm = () => {
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required />
                    <label>Password</label>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodoForm;
