# Workday Planner

This application will serve as a simple and user-friendly daily planner that breaks up a day's events into hourly blocks from 9am to 6pm. Each block will have a color noting if the time has passed, is within the current hour, or has yet to come. Additionally, they can be edited to add or remove events and, upon clicking a timeslot's corresponding save button, will save these events (only the events connected to the clicked save button) as to not lose them if the application were to reset/reload. Finally, if all activities for the day have been comepleted or must be removed for any other reason, there is a "clear schedule" button at the bottom of the page to do just that; it will both wipe all saved events from memory as well as automatically refresh the page for the user to start anew. 

## Link
https://austinjoo97.github.io/Work-Day-Scheduler-gwuhw5/

## UIUX

The application is very simple, having only 2 major parts; the heading and the body. The head of the web app is just a title for the application as well as the current date which was rendered to the DOM using moment.js and scripts that connected the retrieved data to the front end.

The body of the application has more moving parts but is still quite simple. It has several time slots along the left side of the events block, noting which hour of day each added event will correspond to. The central section is the most important as it will be where all saved events are rendered as well as being able to add new events which will be stored in localstorage. The latter can be achieved by clicking each timeslot's respective save button; this will retrieve the entire set of events saved in the localStorage.dailyEvents object and override the currently saved set of events with the additional new content as well as what was originally there. 

This offers a great deal of customiziblity for a user as it will allow the user to list their plans in a format they find desireable, whether it is as a list, in a line of tasks separated by commas, or even as a long list of events with no spacing. All events will be saved as the user had entered in the textarea and will be rendered as such.

Additionally, this application has the ability to change the color of each time block in accordance with the time to note what hour block the user is current within as well as what hours have passed and those to come. 

Finally, at the bottom of the page is a "Clear Schedule" button that will clear the schedule, clear all events that have been saved to the user's localStorage, as well as automatically refresh the page to save this change.

## Demo
