import API_URL from './config-api.jsx';

const CONFIGURATION = {
    API_URL: API_URL,
    MODULES: {
        music: true,
        timetable: true,
        airCadets: true,
        homework: true,
        calendar: true,
        quickActions: true,
        news: true,
    }
}
export default CONFIGURATION;
// The rest of the configuration will need to be set up in a .env file in the API root. It can be copied from the template.env file and filled in.