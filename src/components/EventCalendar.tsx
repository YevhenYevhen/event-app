import { Calendar } from 'antd'
import { Moment } from 'moment';
import React, { FC } from 'react'
import { IEvent } from '../models/IEvent'
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(ev => ev.date === formatedDate);

    return (
      <div>
        {currentDayEvents.map(ev => (
          <div key={ev.description + ev.author}>{ev.description}</div>
        ))}
      </div>
    );
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  )
}

export default EventCalendar