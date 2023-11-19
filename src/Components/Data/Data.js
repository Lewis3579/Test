import React from "react";
import "tachyons";
import "./Data.css"
class Data extends React.Component{
    constructor(){
        super();
        this.state = {
            user: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/data",{
        })
        .then(response =>  response.json())
        .then(data  => {
            this.setState({user:data});
            console.log(this.state.user);
        })

    }
    render(){
        return(
            <div>
                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6  shadow-3 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Information</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name:</label>
                                <h3 className="db fw6 lh-copy f6">{this.state.user.name}</h3>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email:</label>
                                <h3 className="db fw6 lh-copy f6">{this.state.user.email}</h3>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="date">Joined date:</label>
                                <h3 className="db fw6 lh-copy f6">{this.state.user.joined}</h3>
                            </div>
                            </fieldset>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
}
export default Data;