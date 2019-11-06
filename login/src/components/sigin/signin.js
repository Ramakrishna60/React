import React, { Component } from 'react'
// import './App.css'
import './iyStyle.css';
import  {Link} from 'react-router-dom';
import history from '../../history';
class Signin extends Component {
    constructor(props) {
        super(props)

        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangepassword = this.handleChangepassword.bind(this);
        this.handleChangepasswordagain = this.handleChangepasswordagain.bind(this);
        this.persist = this.persist.bind(this)

        this.state = {
            test: 'null',
            x: 0,
            errors: [],

            name: '',
            email: '',
            password: '',
            passwordagain: '',


            // valid:{
            //     name: /^[A-Za-z.0-9]{3,30}$/,
            //     email: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/,
            //   } 
        }
    }
    handleChangename = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeemail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleChangepassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleChangepasswordagain = (event) => {
        this.setState({
            passwordagain: event.target.value
        })
    }


    pushing(errors){
        if (this.state.name) {
            console.log("correct name");
          var    i = 1;
            if (this.state.email) {
                console.log("correct email");
                i = 1;

                // var error=[];
                errors.forEach(x => {
                    // console.log(item.name);
                    if (x.name === this.state.name && x.email === this.state.email) {
                        alert("alredy exist");
                        history.push('/Login');
                        i = 0;

                    } else {
                        i=1
                        console.log("hello")
                    }
                });
                // debugger
                if (this.state.password !== this.state.passwordagain) {
                    alert(" password dont match ");
                    i = 0;
                } else {
                    if (i === 1) {
                        // debugger;
                        errors.push({name :this.state.name, email:this.state.email,password:this.state.password,passwordagain:this.state.passwordagain});
                        localStorage.setItem('errors', JSON.stringify(errors));
                        // this.$router.push({ name: 'Login' });
                    }
                }
            }
            else {
                alert("incorrect email");
            }
        } else {
            alert("incorrect name");
        }
    }

    persist() {

        var userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordagain: this.state.passwordagain,

        }
        var i = 1;
        var errors = JSON.parse(localStorage.getItem('errors')) || [];
        this.pushing(errors)
        
        
    }

    onSubmit = (event) => {
        // alert(`${this.state.name} ${this.state.email} ${this.state.password} ${this.state.passwordagain}`)
        event.preventDefault()
    }

    render() {
        return (
            
                <form className="form2">
                    {/* <img src ="/assets/login.jpg" alt="log" /> */}
                    <div className="containers">
                        {/* <a href="https://icons8.com/icon/23293/registration" /> */}
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
                                {/* <label for="email" className="cols-sm-2 control-label"></label> */}
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <pre><b>Your Email:   </b></pre>	<input type="text" className="form-control" value={this.state.email} name="email" id="email" placeholder=" your Email" onChange={this.handleChangeemail} required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                {/* <label for="password" className="cols-sm-2 control-label"></label> */}
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <pre><b>Password:  </b></pre><input type="password" className="form-control" value={this.state.password} name="password" id="password" placeholder=" your Password" onChange={this.handleChangepassword} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label for="passwordagain" className="cols-sm-2 control-label"></label> */}
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <pre><b>Re-Password:</b></pre><input type="password" className="form-control" value={this.state.passwordagain} name="passwordagain" id="passwordagain" placeholder="password again" onChange={this.handleChangepasswordagain} required />
                                    </div>
                                </div>
                            </div>

                            
                                <button type="submit" className="btn btn-success" onClick={() => this.persist()}>Submit</button>
                                <b> Already have a account?</b> <Link to ="/Logn" button type="login" className="btn btn-primary">Login</Link>
                            
                        </fieldset>
                    </div>
                </form>
            

        )
    }
}
export default Signin

