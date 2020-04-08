import React, { Component } from 'react';

import {getTimeArray} from '../libs/util';

import '../styles/timeline.scss';

class Timeline extends Component {
    
    render() {
        return (
            <div className="timeline">
                {
                    getTimeArray().map((t, i) => {
                        return <div className="hour" key={i}>
                            <span>{t}</span>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Timeline;