import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import '../index.css';

const FullCalendarComponent = () => {
    return (
        <div className={'full-calendar'}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                editable={true}
                selectable={true}
                events={[
                    {title: 'Company Retreat', start: '2024-07-01', end: '2024-07-05'},
                    {title: 'Holiday Party', start: '2024-07-11', end: '2024-07-15'},
                    {title: 'Customer Workshop', start: '2024-07-17', end: '2024-07-21'},
                    {title: 'Customer Workshop', start: '2024-07-23', end: '2024-07-26'},
                    {title: 'Customer Workshop', start: '2024-07-30', end: '2024-08-03'},
                ]}
            />
        </div>
    );
};

export default FullCalendarComponent;