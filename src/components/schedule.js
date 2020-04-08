import React, { Component } from 'react';

import { formatTime } from '../libs/util';

class Schedule extends Component {
    
    checkIsOn(schedule, now) {
        return new Date(schedule.start) <= now && new Date(schedule.end).getTime() > now;
    }

    getDuration(schedule) {
        return new Date(schedule.end).getTime() - new Date(schedule.start).getTime();
    }

    render () {
        return (
            <a href="#"
                className={`schedule ${this.checkIsOn(this.props.schedule, this.props.now) ? 'on' : ''}`}
                style={{'--duration': this.getDuration(this.props.schedule)}}
                onClick={e => e.preventDefault() }>
                <span>{this.props.schedule.title}</span>
                <span>{formatTime(this.props.schedule.start)} - {formatTime(this.props.schedule.end)}</span>
            </a>
        );
    }
}

export default Schedule;