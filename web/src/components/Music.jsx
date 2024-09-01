import "../assets/css/music.css";

export default function Music() {

    return <div className="section music">
        <p className="title">Now playing</p>
        <iframe src="http://www.youtube.com/embed/YdRjNeu11Ww?list=PLG4z8Js-3FRQvaT-qV6XdCCvJ-YXfIcL9" gesture="media" allow="encrypted-media" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>;
}