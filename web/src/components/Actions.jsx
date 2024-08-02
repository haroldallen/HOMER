import { FaceFrownIcon } from "@heroicons/react/20/solid";

export default function Actions() {
    return <div className="section actions list">
        <p className="title">Actions</p>
        <p>I am awaiting my Google Home API key. You can apply for one too <a href="https://developers.home.google.com/io/2024#upcoming-preview-programs" target="_blank">here</a>.</p>
        <FaceFrownIcon height={60} style={{marginTop: 75}} />
    </div>;
}