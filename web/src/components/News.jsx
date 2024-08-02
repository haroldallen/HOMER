import "../assets/css/news.css";

export default function News({ news }) {
    return <div className="section news list">
        <p className="title">News</p>
        { news && news.articles.length > 0
            ? news.articles.map((item, index) => <Item key={index} {...item} />)
            : "No news to show :/" }
    </div>;
}

function Item({ urlToImage, url, title }) {
    return <a className="item news" href={url} target="_blank">
        <img src={urlToImage} />
        <p className="summary">{title}</p>
    </a>;
}