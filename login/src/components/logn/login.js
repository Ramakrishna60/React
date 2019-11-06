import React, { Component } from 'react'
// import './App.css'
import './myStyle.css';

import history from '../../history'
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: '',
            test: 'null',
            x: 0,
            errors: [],
            userData:{
   
            }

        }
    }
    handleChangename = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangepassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    persist(e) {
        e.preventDefault();
    
    //    alert("calling")
        var i = 0;
        var errors = JSON.parse(localStorage.getItem('errors')) || [];
        // var error=[];
        
        errors.forEach(x => {

            if (x.name === this.state.name && x.password === this.state.password) {
                alert("already login");
                history.push('/dashboard');
                
                i = 1;
            }
        });

        if (i === 0) {
            alert("Please sigin first");
            // history.push('/sigin');
        }


    }






    handlesubmit = (event) => {
        alert(`${this.state.name} ${this.state.email} ${this.state.password} ${this.state.passwordagain}`)
        event.preventDefault()
    }


    render() {
        return (
            <center>
                <form className="form1" >
                    {/* <img src ="/assets/login.jpg" alt="log" /> */}
                    <div className="containeras">
                        <a href="https://icons8.com/icon/23293/registration" />
                        <img src="https://img.icons8.com/color/48/000000/edit-user-male--v2.png" alt="reg" />
                        <h2>Register Form</h2>
                        <fieldset>
                            <div className="form-group">
                                {/* <label for="name" className="cols-sm-2 control-label"></label> */}
                                <div className="cols-lg-12">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                        <pre><b>Your Name:  </b></pre><input type="text" className="form-control" value={this.state.name} name="name" id="name" placeholder=" your Name" onChange={this.handleChangename} required />
                                    </div>
                                </div>
                            </div>



                            <div className="form-group">
                                {/* <label for="password" className="cols-sm-2 control-label"></label> */}
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <pre><b>Password:  </b></pre><input type="password" className="form-control" value={this.state.userpassword} name="password" id="password" placeholder=" your Password" onChange={this.handleChangepassword} required />
                                    </div>
                                </div>
                            </div>


                            <div className="form-group ">
                                <button className="btn btn-success" onClick={(e) => this.persist(e)}>Submit</button>
                                
                                {/* <b> Already have a account? </b><button type="login" className="btn btn-info btn-lg btn-block login-button">Login</button> */}
                            </div>
                        </fieldset>
                    </div>
                </form>
            </center>

        )
    }
}
export default Login

