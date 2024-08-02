export default function Timetable({ timetable }) {
    return <div className="section timetable list">
        <p className="title">Today at school</p>
        { timetable && timetable.lessons.length !== 0
            ? timetable.lessons.map((item, index) => <Item key={index} { ... item} />) 
            : "No lessons today :)" }
    </div>;
}

function Item({ room, teacher, teaching_group }) {
    return <div className="item lesson">
        <p className="subject">{teaching_group.subject}</p>
        <p className="details">{teacher.title} {teacher.surname} { room ? `in ${room.name}` : "" }</p>
    </div>;
}