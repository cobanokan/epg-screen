import React, { Component, Fragment } from 'react';

import { Star } from '@material-ui/icons';
import {getDateArray} from '../libs/util';

import '../styles/calendar.scss';

class Calendar extends Component {

    render() {
        return (
            <Fragment>
                <div className="calendar">
                    <div className="star-icon">
                        <Star/>
                    </div>
                    <div className="date-list">    
                    {
                        getDateArray().map((date, i) => {
                            return <div className={`date ${date.current ? "current" : ""}`} key={i}>
                                <span>{date.day}</span>
                                <span>{date.date}</span>
                            </div>
                        })
                    }

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Calendar;