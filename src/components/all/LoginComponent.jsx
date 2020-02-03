
import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

import TechnicalDevelopment from '../TechnicalDevelopment'


class LoginComponent extends Component {

    constructor(props) {

        super(props)
        this.state = {
            username: 'supraweb',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //    this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        //   this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.loginCliked = this.loginCliked.bind(this)

    }
    /*
        handlerUsernameChange(e) {
    
            console.log(e.target.value)
            this.setState({ username: e.target.value })
    
        }*/


    handlerChange(e) {

        //   console.log(e.target.value)
     //   console.log(this.state)


        this.setState({
            [e.target.name]
                : e.target.value

        })



    }

    /*
        handlerChange(e) {
    
            //   console.log(e.target.value)
               console.log(this.state)
       
               this.setState({ username: e.target.value })
               this.setState({ password: e.target.value })
       
       
           }*/

    /*
        handlerPasswordChange(e) {
            console.log(e.target.value)
    
            console.log(e.target.value)
            this.setState({ password: e.target.value })
    
        }
    */
    loginCliked() {
        // // console.log(this.state)
        // if (this.state.username === 'seba266' && this.state.password === '111') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username ,this.state.password );
        //     // this.props.history.push(`/welcome/${this.state.username}`)


        //     this.props.history.push(`/welcome/${this.state.username}`)

        //     this.setState({ showSuccessMessage: true })
        //     this.setState({ hasLoginFailed: false })


        // }

        // else {

        //     this.setState({ showSuccessMessage: false })
        //     this.setState({ hasLoginFailed: true })


        // }

        // AuthenticationService
        // .executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(() => {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // }).catch( () =>{
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // })


        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch( () =>{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })



    }
    render() {
        return (
            <div>
                <h1>Login</h1>

                <h6>username : supraweb       and         password : 123</h6>
                <div className="container">
                {/*<ShowInvalidCredentials      hasLoginFailed={this.state.hasLoginFailed}    /> */}
                {/* <div> login sucessfull </div> */}
                {/* {this.state.hasLoginFailed && <div>Invalid Credentials</div>} */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}


                {this.state.showSuccessMessage && <div>Login Sucessful</div>}




                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}


                User Name :        <input type="text" name="username" value={this.state.username} onChange={this.handlerChange} />
                Password :        <input type="password" name="password" value={this.state.password} onChange={this.handlerChange} />
                {/* <button onClick={this.loginCliked}        >Login</button> */}
                <button className="btn btn-primary" onClick={this.loginCliked}>Login</button>


                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
               
                <TechnicalDevelopment/>
            </div>
                </div >
        
        )
        
    }



}
// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed) {
//        return <div>Invalid Credentials</div>
//     }
//     return null
// }

//  function ShowLoginSuccessMessage(props) {
//      if(props.showSuccessMessage) {
//          return <div>Login Sucessful</div>
//      }
//      return null
//  }

export default LoginComponent