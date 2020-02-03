
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import  AuthenticationService from './AuthenticationService.js'
import  AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'

import ListTodosComponent from './ListTodosComponent'

import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'

import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent.jsx';

class TodasApp extends Component {
    render() {
       

        return (
            <div className="TodasApp">

                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />

                            <Route path="/login" exact component={LoginComponent} />
                            {/* <Route path="/welcome" exact component={WelcomeComponent} /> */}
                            {/* <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} /> */}

                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>

                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            

                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>

                </Router>

                {/* 
                <ListTodosComponent />
                <WelcomeComponent /> */}
            </div>
        );
    }
}















export default TodasApp;