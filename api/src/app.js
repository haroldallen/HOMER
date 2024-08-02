import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { Edulink } from "edulinkone-api";
const edulink = new Edulink(process.env.EDULINK_SCHOOL, process.env.EDULINK_USER, process.env.EDULINK_PASS, process.env.EDULINK_ESTABLISHMENT);

import { authorize, getEvents } from "./calendar.js";

const app = express();

app.use(cors({origin: '*'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    try {
        await edulink.Authenticate();
    } catch(err) {
        console.log(err)
    }

    let timetable;
    let homework;
    try {
        timetable = await edulink.getToday();
    } catch(err) {
        console.log(err);
    }
    try {
        homework = await edulink.getCurrentHomework();
    } catch(err) {
        console.log(err);
    }

    let events;
    try {
        let auth = await authorize();
        events = await getEvents(auth);
        events.sort((a, b) => a.start.dateTime||a.start.date > b.start.dateTime||b.startDate ? 1 : -1);
    } catch(err) {
        console.log(err);
    }

    return res.json({timetable, homework, events});
});

app.listen(process.env.PORT, () => {
    console.log('Launched on http://127.0.0.1:'+process.env.PORT);
});