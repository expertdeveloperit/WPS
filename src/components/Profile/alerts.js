import React, { Component } from 'react';
import Info from './info';

class Alerts extends Component {
    render() {
        return (
            <div className="tabs-content" data-tabs-content="example-tabs">
            <div className="tabs-panel is-active" id="panel1">
            <div className="container-6">
                <div className="c-heading">
                <i className="zmdi zmdi-alert-circle"></i> <span>Alerts</span>
                </div>
                <a className="lists-items" >
                <span className="li2 p10 notbold">
                    <strong>Suicide threat</strong>
                    <span><strong className="red">Safety</strong> <span className="dot"><i className="zmdi zmdi-circle"></i></span> 01-10-2018</span>
                </span>
                <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
                </a>
                <a className="lists-items ">
                <span className="li2 p10 notbold">
                    <strong>SF Hot request: Check on log wound</strong>
                    <span>outreach <span className="dot"><i className="zmdi zmdi-circle"></i></span>  04-08-2018</span>
                </span>
                <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
                </a>
                <a className="lists-items" >
                <span className="li2 p10 notbold">
                    Missed follow-up for wound care
                    <span>follow-up <span className="dot"><i className="zmdi zmdi-circle"></i></span> 04-08-2018</span>
                </span>
                <span className="li3"><i className="zmdi zmdi-chevron-down"></i></span>
                </a>
                <a className="lists-items-anc" >
                SEE ALL ALERTS
                </a>
            </div>
           <Info />
            </div>
            <div className="tabs-panel" id="panel2">

            </div>
        </div>
        );
    }
}

export default Alerts;
