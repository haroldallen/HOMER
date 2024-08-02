# Possible names
HOMER
House
Operated
Mobile
Executer
Readout

HUMUS
Home
Utility
Machine
Und (and)
Shit

# HOMER
The Home Operated Mobile Executer Readout (HOMER) is a modern home quick access readout that allows the user, aimed at children, to view their school timetable from EdulinkOne, their Air Cadets uniform from Excel, their upcoming events from Google Calendar, some recent news as well as allowing them to perform quick actions like turning on/off their lights or their PC.
This is the website part of the complete project.
You will need to configure and run the API before this.

## Configuration
### Web
The file web/src/config.jsx can be edited to change the API URL, as well as enable/disable modules.
### API
The file api/.env needs to be created and filled in as per the template file, api/template.env.
Instructions on how to get the required data is in template.env.

## Building
For both Web and API, run "npm run build" in their respective folders.

## Running
### Test
For both Web and API, run "npm run dev" in their respective folders.
### Build
For Web, install Serve (google it) and then run "serve -l (PORT) -s build"
For API, run "npm run start" in the API folder.

## Issues/PRs
Feel free to contribute to add a feature or ask for an issue to be fixed.
However, please do not try to rewrite this in Typescript, add ESLINT, convert to NextJS and expect this to be accepted as I prefer Vite + React myself. If you wish to do so yourself and maintain that yourself, feel free.