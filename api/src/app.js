import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { authorize, getEvents } from "./calendar.js";
import getNews from "./news.js";
import loadEdulink from "./edulink.js";

const app = express();

app.use(cors({origin: '*'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    let { timetable, homework } = await loadEdulink();

    let events;
    try {
        let auth = await authorize();
        events = await getEvents(auth);
        events.sort((a, b) => a.start.dateTime||a.start.date > b.start.dateTime||b.startDate ? 1 : -1);
    } catch(err) {
        console.log(err);
    }

    let news = await getNews();

    return res.json({timetable, homework, events, news});
});

app.listen(process.env.PORT, () => {
    console.log('Launched on http://127.0.0.1:'+process.env.PORT);
});