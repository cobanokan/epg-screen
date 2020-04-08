import React, { Component, Fragment } from 'react';

import Channel from './channel';

import { fetchChannels } from '../libs/api';
import '../styles/channels.scss';

class Channels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            channels: []
        };
    }

    componentDidMount() {
        this.loading = true;

        fetchChannels().then(channels => this.setState({
            loading: false,
            channels: channels
        })).catch(error => {
            this.setState({error});
        });
    }

    render() {
        if(this.state.error) {
            return (<div className="error">{this.state.error.message}</div>);
        } else if(this.state.loading) {
            return (<div className="loading"></div>);
        } else {
            return (
                <Fragment>
                    {
                        this.state.channels.map(channel => {
                            return <Channel 
                                now={this.props.now}
                                key={channel.id} 
                                channel={channel}/>
                        })
                    }
                </Fragment>
            );
        }
    }
}

export default Channels;