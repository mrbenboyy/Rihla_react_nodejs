import React, { Component } from 'react';
import "./NavbarStyles.css";
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        clicked: false,
        token: localStorage.getItem("token"),
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    logout = () => {
        localStorage.removeItem("token");
        this.setState({ token: null });
    };

    componentDidUpdate(prevProps, prevState) {
        // Update the state when the token changes
        if (prevState.token !== this.state.token) {
            this.setState({ token: localStorage.getItem("token") });
        }
    }

    render() {
        return (
            <div>
                <nav className='NavbarItems'>
                    <Link id='navbar-logo' to='/'><h1>Rihla</h1></Link>
                    <div className='menu-icons' onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        ))}
                        {this.state.token ? (
                            <li>
                                <Link className='nav-links' to="/dashboard">
                                    <i className='fas fa-user-cog'></i>Tableau de bord
                                </Link>
                            </li>
                        ) : null}
                        {this.state.token !== null ? (
                            <Link to="/" onClick={this.logout}>
                                <button onClick={this.logout}>Logout</button>
                            </Link>
                        ) : (
                            <Link to='/login'>
                                <button>Login</button>
                            </Link>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}
