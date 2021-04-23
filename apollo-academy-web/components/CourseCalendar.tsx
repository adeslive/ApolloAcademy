import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React from 'react';
import Layout from './Layout';
import { NavBar } from './NavBar';
import { urqlClient } from '../utils/urqlClient';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';

const localizer = momentLocalizer(moment)

type CourseCalendarProps = {
    events : any[]
}

const CourseCalendar: React.FC<CourseCalendarProps> = ({...props}) => {

    return (
        <>
            <Calendar
                localizer={localizer}
                events={props.events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </>
    )
}

export default CourseCalendar;