import Textinput from "./components/Textinput";
import Button from "./components/button";
const Signup = () => {
    return (
        <div className="New">
            <div className="title">
                <h1>Sign Up</h1>
            </div>
            <div className="Home">
                <Textinput name="firstName" placeholder="please enter first name " />
                <Textinput name="seccondName" placeholder="please enter second name" />
                <Textinput name="email" placeholder="please enter your email" />
                <Textinput name="password" placeholder="please enter password" />
                <Textinput name="confirmPassword" placeholder="please enter confirm password" />
            </div>
            <div className="Button">
                <Button value="Signup" />
                <Button value="Login" />
            </div>
        </div>

    )
}
export default Signup;