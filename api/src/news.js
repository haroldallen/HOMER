import dotenv from 'dotenv';
dotenv.config();

import NewsAPI from "newsapi";
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

export default async function getNews() {
    let res = await newsapi.v2.topHeadlines({
        sources: 'bbc-news',
        language: 'en',
        pageSize: 6
    });

    return res;
}