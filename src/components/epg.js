import React, { Component, Fragment } from 'react';

import Timeline from './timeline';
import Channels from './channels';
import Calendar from './calendar';

import '../styles/epg.scss';

class Epg extends Component {

    constructor(props) {
        super(props);
        this.updateNowInterval;
        this.nowLineRef = React.createRef();
        this.state = {
            now: Date.now()
        };
    }

    componentDidMount() {
        this.updateNowInterval = setInterval(() => {
            this.setState({
              now: Date.now()
            });
          }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.updateNowInterval);
    }

    goToNow() {
        this.nowLineRef.current.scrollIntoView({ inline: "center" });
    }

    render() {
        const midnight = new Date();
        midnight.setHours(0, 0, 0, 0);

        return (
            <Fragment>
                <Calendar/>
                <div className="epg-container">
                    <Fragment>
                        <div className="epg">
                            <div className="now-line"
                                ref={this.nowLineRef}
                                style={{'--now': this.state.now - midnight.getTime()}}>
                            </div>
                            <Timeline/>
                            <Channels now={this.state.now}/>
                            <button className="now-button" onClick={this.goToNow.bind(this)}>NOW</button>
                        </div>
                    </Fragment>
                </div>
            </Fragment>
        );
    }
}

export default Epg;