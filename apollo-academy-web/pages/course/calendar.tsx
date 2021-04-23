import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import CourseCalendar from '../../components/CourseCalendar';
import Layout from '../../components/Layout';
import { NavBar } from '../../components/NavBar';
import { useGetClassroomQuery, useGetClassroomsQuery } from '../../generated/graphql';
import { urqlClient } from '../../utils/urqlClient';
import * as BigCalendar from 'react-big-calendar';
import moment from 'moment';

type Event = BigCalendar.Event;

const MyCalendar = () => {
    const [{ data, fetching }] = useGetClassroomsQuery();
    const [events, setEvents] = useState([]);
    let newEvents: Event[] = [];
    if (fetching) {

    } else if (!data || !data.classrooms) {

    } else if (data) {

        data.classrooms.forEach((value, index) => {
            let temp: Event = {};
            temp.allDay = false;
            temp.start = moment(parseInt(value.time_start)).subtract(7, 'days').toDate();
            temp.end = moment(parseInt(value.time_start)).toDate();
            temp.title = value.course.name;
            newEvents.push(temp);
        })

    }

    return (
        <>
            <NavBar />
            <Layout size="big">
                <CourseCalendar events={newEvents} />
            </Layout>
        </>
    )
}

export default withUrqlClient(urqlClient)(MyCalendar);