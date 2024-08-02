import { useEffect, useState } from "react";
import axios from "axios";
import CONFIGURATION from "./config.jsx";

import Time from "./components/Time";
import Homework from "./components/Homework";
import Timetable from "./components/Timetable";
import Music from "./components/Music";
import Calendar from "./components/Calendar";
import AirCadets from "./components/AirCadets";
import Actions from "./components/Actions";

export default function App() {

    const [ api, setApi ] = useState({});

    useEffect(()=>{ load() }, []);

    async function load() {
        let res = await axios.get(CONFIGURATION.API_URL);
        console.log(res, res.data);
        setApi(res.data);
    }

    return <>
        { CONFIGURATION.MODULES.music ? <Music /> : <></> }
        { CONFIGURATION.MODULES.airCadets || CONFIGURATION.MODULES.homework
        ? <div className="section vh uniform">
            { new Date().getDay() === 0 || new Date().getDay() === 7 ?
            <></> : <>
                { (new Date().getDay() === 1 || new Date().getDay() === 4)
                    && new Date().getHours() > 3 && CONFIGURATION.MODULES.airCadets
                        ? <AirCadets { ...api }/>
                        : CONFIGURATION.MODULES.timetable
                            ? <Timetable { ...api } /> : "There would be a timetable here, but you've disabled it." }
                <hr />
            </> }
            { CONFIGURATION.MODULES.homework
                ? <Homework { ...api } /> : <></> }
        </div> : <></> }
        <Time />
        { CONFIGURATION.MODULES.calendar
            ? <Calendar { ...api } /> : <></> }
        { CONFIGURATION.MODULES.quickActions ? <Actions /> : <></> }
        { /*{ CONFIGURATION.MODULES.news ? <News /> : <></> }*/}
    </>;
}