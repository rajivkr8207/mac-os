'use client';
import MacWindow from "../../MacWindow/MacWindow";
import './calender.scss';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import default styles

// Fix for missing declaration file warning
const localizer = momentLocalizer(moment);

interface windowProps {
    windowname: string
    setWindowsopen: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
}

const customCalendarStyles: React.CSSProperties = {
    height: '100%',
    minHeight: '400px',
    color: '#fff',
    borderRadius: '16px',
    padding: '16px',
    fontFamily: 'inherit',
    border: '1px solid #333'
};

const CalenderCom: React.FC<windowProps> = ({ windowname, setWindowsopen }) => {
    return (
        <MacWindow windowName={windowname} setWindowsOpens={setWindowsopen}>
            <div className="calendermain" style={{ padding: '24px' }}>
                <Calendar
                    localizer={localizer}
                    events={[]}
                    startAccessor="start"
                    endAccessor="end"
                    style={customCalendarStyles}
                    popup
                    views={['month', 'week']}
                    toolbar
                    messages={{
                        today: 'Today',
                        previous: '‹',
                        next: '›',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                        agenda: 'Agenda',
                        date: 'Date',
                        time: 'Time',
                        event: 'Event'
                    }}
                />
            </div>
         
        </MacWindow>
    )
}

export default CalenderCom