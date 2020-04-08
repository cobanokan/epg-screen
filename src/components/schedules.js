import React, { Component, Fragment } from 'react';

import Schedule from './schedule';
import '../styles/schedules.scss'

class Schedules extends Component{
   
    render() {
        return (
            <div className="schedules">
                <Fragment>
                    {
                        this.props.schedules.map((schedule, i) => {
                            return <Schedule 
                                        key={i} 
                                        now={this.props.now}
                                        schedule={schedule}/>
                        })
                    }
                </Fragment>
            </div>  
        );
    }
} 

export default Schedules;