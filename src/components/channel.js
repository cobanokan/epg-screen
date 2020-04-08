import React, { Component } from 'react';

import Schedules from './schedules';

class Channel extends Component {

    render() {
        return (
            <div className="channel" >
                <div className="channel-logo">
                    <img src={this.props.channel.images.logo} alt={this.props.channel.title}></img>
                </div>
                <Schedules
                    now={this.props.now}
                    schedules={this.props.channel.schedules}/>
            </div>
        );
    }
}

export default Channel;
