import React, { Component } from 'react';
import { NavLink ,Redirect} from 'react-router-dom';
import Cookies from "universal-cookie";
class Welcome extends Component {
    constructor(props){
        super(props);
        this.handleAction = this.handleAction.bind(this);
        //contains data to iterate through and form the list
        this.data=[
            {
                'icon':'zmdi-accounts',
                'title':'Outreach List',
                'action':'ol'

            },
            {
                'icon':'zmdi-search',
                'title':'Person Search',
                'action':'ps'
            },
            {
                'icon':'zmdi-assignment-o',
                'title':'New Encounter Form',
                'action':'nef'
            },
            {
                'icon':'zmdi-receipt',
                'title':'New Quick Note',
                'action':'nqn'                
            },
            {
                'icon':'zmdi-sign-in',
                'title':'Sign Out',
                'action':'login'
                
            }
        ]
    }
    // function to handle redirections
    handleAction(data,e){
        console.log(this.props);
        if(data.action==='ol'){
            return true;
        }else if(data.action==='login'){
            var cookie= new Cookies();
            cookie.remove('logged_in');
            window.location.href = "/login"
            return true;
            
        }else{
            e.preventDefault();
            return false;
        }
        
    }
    render() {
        
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="columns small-12">
                        <div className="container-2">
                        
                        <h1>Welcome Jane !</h1>
                        <p className="col-small">update profile information</p>

                        <p>Today's date : 4-12-2018</p>
                        {this.data.map((data,i)=>{
                            return(
                                <NavLink className="buttons" to={`/${data.action}`} key={i} onClick={this.handleAction.bind(this,data)}>
                                    <span className="bs1"><i className={"zmdi "+data.icon}></i></span>
                                    <span className="bs2">{data.title}</span>
                                    <span className="bs3"><i className="zmdi zmdi-chevron-right"></i></span>
                                </NavLink>        
                            )
                        })}
                        
                        </div>
                        
                    </div>
                    </div>
                </div>           
            </div>
        );
    }
}

export default Welcome;
