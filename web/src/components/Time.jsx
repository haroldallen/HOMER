import { useEffect, useState } from "react";
import "../assets/css/time.css";

export default function Time() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [ date, setDate ] = useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date());
        }, 1000);
    }, []);

    return <div className="section time">
        <p className="date title">{days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
        <p className="time">{date.getHours().toString().length===1?"0"+date.getHours():date.getHours()} {date.getMinutes().toString().length===1?"0"+date.getMinutes():date.getMinutes()}</p>
        <div></div>
    </div>;
}