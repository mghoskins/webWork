import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const MyCalendar = props => (
    <div style="height: 500px;">
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    </div>
)

// ---Below: Was used for testing concept---
/*
const FooterTest = () => {
    return(
        <h2>THIS IS A FOOTER</h2>
    )
}
export default FooterTest
 */