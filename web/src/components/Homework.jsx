import moment from "moment";
import "../assets/css/homework.css";

import { ArrowTopRightOnSquareIcon, CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function Homework({ homework }) {
    return <div className="section homework list">
        <div className="titlebutton">
            <p className="title">Homework</p>
            <a href="https://www.edulinkone.com" target="_blank"><ArrowTopRightOnSquareIcon height={20} /></a>
        </div>
        { homework && homework.length !== 0
            ? homework.map((item, index) => <Item key={index} { ... item} />) 
            : "No homework to do :)" }
    </div>;
}

function Item({ activity, due_time, subject, completed }) {
    return <div className={"item homework"+(completed?" completed":"")}>
        <div className="left">
            { completed ? <CheckIcon width={20} /> : <XMarkIcon width={20} /> }
            <div>
                <p className="subject">{subject}</p>
                <p className="activity">{activity}</p>
            </div>
        </div>
        <p className="due">{moment(due_time).fromNow()}</p>
    </div>;
}