import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://supraweb-soft.negocio.site/" className="navbar-brand">supraweb</a></div>
                    <ul className="navbar-nav">
                        {/* <li><Link className="nav-link" to="/welcome/seba266">Home</Link></li> */}
                        {/* <li><Link className="nav-link" to="/welcome/seba266">Home</Link></li> */}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/seba266">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        {/* <li><Link className="nav-link" to="/todos">Todos</Link></li> */}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {/* <li><Link className="nav-link" to="/login">Login</Link></li> */}
                        {/* <li><Link className="nav-link" to="/logout">Logout</Link></li> */}
                        {/* <li><Link className="nav-link" to="/logout" onClick = {AuthenticationService.logout}>Logout</Link></li> */}


                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}


                        {/* {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>} */}

                    </ul>
                </nav>
            </header>
        )
    }
}
export default HeaderComponent