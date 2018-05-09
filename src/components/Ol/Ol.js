import React, { Component } from 'react';
import profile from '../../images/profile-pictures.jpg';
import { NavLink } from 'react-router-dom'

class Ol extends Component {
    constructor(props){
        super(props);
        this.handleCheck=this.handleCheck.bind(this)
        this.state={ total_items:5 ,assigned_check:false}
        this.data=[
            {
                'icon':'zmdi-accounts',
                'title':'Alvarez, Angela L',
                'last_seen':' 4/17/2018',
                'action':'',
                'image':0,
                'day':'Today',
                'assigned':0
            },
            {
                'icon':profile,
                'title':'Gonzalez, Mirabel S',
                'last_seen':' 4/10/2018',                
                'action':'profile',
                'image':1,
                'day':'Today',
                'assigned':1                
            },
            {
                'icon':'zmdi-accounts',
                'title':' Nardi, Carmen A',
                'last_seen':' 1/12/2018',                
                'action':'',
                'image':0,
                'day':'Today',
                'assigned':0                                             
            },
            {
                'icon':'zmdi-accounts',
                'title':' Putnam, Ray S',
                'last_seen':' 6/22/2018',                
                'action':'',
                'image':0,
                'day':'Today',
                'assigned':0                                                            
            },
            {
                'icon':'zmdi-accounts',
                'title':' White, Candance B',
                'last_seen':' 4/17/2018',                
                'action':'',
                'image':0,
                'day':'2d',
                'assigned':0
                
            }
        ]
    }
    handleCheck(e){
            this.setState({
                assigned_check: !this.state.assigned_check,
            })
    }

    handleClick(data, e){
        if(data.action === "profile"){
            return true;
        }else{
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="gray">
                <div className="container">
                    <div className="row">
                        <div className="columns small-12">
                            <div className="container-2 pb0">
                            
                                <h2>Outreach List</h2>
                                <p>{this.state.total_items} total</p>
                                <p><input id="" type="checkbox" defaultChecked={this.state.assigned_check} name="assigned_check" onClick={this.handleCheck} /><label htmlFor="checkbox12">assigned to me</label></p>
                            </div>
                            <div className="container-3">
                                {this.data.map((data,i)=>{
                                    if(this.state.assigned_check){
                                        if(data.assigned === 1){
                                            return(
                                                <NavLink className="lists-items nonfilter" to={`/${data.action}`} key={i} onClick={this.handleClick.bind(this, data)}>
                                                <span className="li1">
                                                    <span>
                                                        {data.image === 0 ?
                                                            <i className="zmdi zmdi-account">
                                                        </i>
                                                        :<img src={data.icon} alt={data.title} />}
                                                    </span>
                                                </span>  
                                                <span className="li2">
                                                    {data.title}
                                                    <span>Last seen: {data.last_seen}</span>
                                                </span>
                                                <span className="li3">{data.day}</span>
                                                </NavLink>    
                                            )        
                                        }
                                    }else{
                                        return(
                                            <NavLink className="lists-items nonfilter" to={`/${data.action}`} key={i} onClick={this.handleClick.bind(this, data)}>
                                            <span className="li1">
                                                <span>
                                                    {data.image === 0 ?
                                                        <i className="zmdi zmdi-account">
                                                    </i>
                                                    :<img src={data.icon} alt={data.title} />}
                                                </span>
                                            </span>  
                                            <span className="li2">
                                                {data.title}
                                                <span>Last seen: {data.last_seen}</span>
                                            </span>
                                            <span className="li3">{data.day}</span>
                                            </NavLink>    
                                        )
                                    }
                                    
                                })}
                            </div>
                        </div>
                    </div>
                </div>  
          </div>
        );
    }
}

export default Ol;
