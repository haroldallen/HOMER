import { ArrowTopRightOnSquareIcon, PlusIcon } from "@heroicons/react/20/solid";
import "../assets/css/calendar.css";
import moment from "moment";
import { useEffect, useState } from "react";

export default function Calendar({ events }) {

    const [ parsedEvents, setParsedEvents ] = useState({ today: [], upcoming: [] });

    useEffect(()=>{ parseEvents() }, [events]);

    function parseEvents() {
        if (!events) return;
        let parsed = { today: [], upcoming: [] };

        for (const event of events) {
            let startTime = event.start.dateTime || event.start.date;
            let endTime = event.end.dateTime || event.end.date;

            let date = new Date(startTime).getDate() >= new Date(endTime).getDate()-1 ? new Date(startTime) : [ new Date(startTime), new Date(endTime)];
            let isToday = Array.isArray(date) ? false : new Date().getDate() === date.getDate();
            
            let time = Array.isArray(date) || !event.start.dateTime ? ""
                : startTime ? `, ${moment(startTime).format("HH:mm")} to ${moment(endTime).format("HH:mm")}` : "";
        
            let toPush = { startTime, endTime, isToday, date, time, summary: event.summary };

            if (isToday) parsed.today.push(toPush);
            else parsed.upcoming.push(toPush);
        }

        setParsedEvents(parsed);
    }

    return <div className="section calendar">
        <div className="titlebutton">
            <p className="title">What's on</p>
            <div>
                <button className="add"><PlusIcon height={20} /></button>
                <a href="https://calendar.google.com/calendar/u/0/r/month" target="_blank"><ArrowTopRightOnSquareIcon height={20} /></a>
            </div>
        </div>
        { events && events.length > 0 ? <div className="columns">
            <div className="today list calendar">
                { parsedEvents.today.length > 0 ? parsedEvents.today.map((item, index) => <Item key={index} {...item} />) : "Nothing to do today :)" }
            </div>
            <div className="upcoming list calendar">
                { parsedEvents.upcoming.length > 0 ? parsedEvents.upcoming.map((item, index) => <Item key={index} {...item} />) : "Your schedule is free!" }
            </div>
        </div> : "No events coming up :)" }
    </div>;
}

function Item({ summary, time, date, isToday }) {

    return <div className="item event">
        <div>
            <p className="date">{ isToday ? "Today" : Array.isArray(date) ? `${moment(date[0]).format("D")} to ${moment(date[1]).format("D MMM")}` : moment(date).format("D MMM") }{time}</p>
            <p className="summary">{summary}</p>
        </div>
        <p className="fromnow">{moment(Array.isArray(date)?date[0]:date).fromNow()}</p>
    </div>;
}