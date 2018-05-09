import React, { Component } from 'react';
import profile from '../../images/profile-pictures.jpg';
import Index from '../Common/index';
import Alerts from './alerts';
import { NavLink } from 'react-router-dom';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            alert:true,
            summary:false
        }
    }

    componentWillMount(){
        // document.getElementById("header").style.display = "none";
    }

    render() {
        return (
            <div className="blue">
                <div className="container">
                    <div className="row fixed-top">
                        <div className="top-bar tbbs blue " id="responsive-menu">
                        <div className="top-bar-left ">
                            <ul className="dropdown menu blue" data-dropdown-menu>
                            <li className="menu-text white">Gonzalez, Mirabel S</li>
                            </ul>
                        </div>
                        <div className="top-bar-right white">
                            <NavLink className="home-anc white" to="/"><i className="zmdi zmdi-menu zmdi-hc-2x"></i></NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container mt55">
                    <div className="row">
                    <div className="columns small-12">
                        <div className="container-4 ">
                        <div className="pr-box">
                            <div className="pr-box-left">
                            <img src={profile} alt="profile" />
                            </div>
                            <div className="pr-box-right">
                            <p>Date of Birth
                                <strong>08/28-1984</strong>
                            </p>
                            <p>Sex at Birth
                                <strong>08/28-1984</strong>
                            </p>
                            <p>Phone
                                <strong>444-555-5555 <i className="zmdi zmdi-phone"></i></strong>
                            </p>
                            </div>
                        </div>
                        <div className="sne">
                            <a className="sne-anc">+ Start new encounter</a>
                        </div>
                        </div>
                        <div className="container-5">
                        <ul className="tabs" data-tabs id="example-tabs">
                            <li className="tabs-title is-active"><a  data-aria-selected="true">Alert</a></li>
                            <li className="tabs-title"><a data-tabs-target="panel2" >Summary</a></li>
                        </ul>
                        <Alerts />
                        </div>
                    </div>
                </div>
                </div>      
            </div>
        );
    }
}

export default Profile;
