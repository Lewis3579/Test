import React from "react";
import "tachyons"

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    onNameChange = (even) =>{
        this.setState({name: even.target.value})
    }
    onEmailChange = (even) =>{
        this.setState({email: even.target.value})
    }

    onPasswordChange = (even) =>{
        this.setState({password: even.target.value})
    }

    onRegister= () => {
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name 
            })
        })
        .then(response => response.json())
        .then(user =>{
            if(user.id){
                this.props.loadUser(user);
                console.log(user);
                this.props.onRouteChange("signIn")
            }
            else{
                alert('Email already existed!')
            }
        })
    }
    render(){
        return(
            <div>
                <article className="br3 ba bg-dark-gray dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6  shadow-3 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent white ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input onChange={this.onNameChange} className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                            </fieldset>
                            <div className="">
                                <input onClick={this.onRegister} className="b ph3 pv2 input-reset ba b--white bg-transparent white grow pointer f6 dib" type="submit" value="Register"/>
                            </div>
                            <div className="lh-copy mt3">
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
}
export default Register;