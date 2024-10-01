import dotenv from "dotenv";
dotenv.config();

import { Edulink } from "edulinkone-api";
const edulink = new Edulink(process.env.EDULINK_SCHOOL, process.env.EDULINK_USER, process.env.EDULINK_PASS, process.env.EDULINK_ESTABLISHMENT);

export default async function loadEdulink() {
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
        homework.sort((a, b) => a.due_date > b.due_date ? 1 : -1);
    } catch(err) {
        console.log(err);
    }

    return { timetable, homework };
}