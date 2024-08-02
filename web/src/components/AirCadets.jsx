import { useEffect } from "react";
import "../assets/css/music.css";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function AirCadets() {

    let activeCell;
    activeCell = new Date().getDate()*2-1+5;

    let url = `https://onedrive.live.com/view.aspx?resid=40BDF90FAE7050EA%2158653&authkey=!ANYpRbC6owX5NQI&ActiveCell=B${activeCell}`;

    return <div className="section aircadets">
        <p className="title">Tonight at cadets</p>
        <div className="titlebutton">
            <p className="title">Tonight at cadets</p>
            <a href={`${url}`} target="_blank"><ArrowTopRightOnSquareIcon height={20} /></a>
        </div>
        <div className="iframe-container">
            <iframe src={`${url}&action=embedview`}></iframe>
        </div>
    </div>;
}