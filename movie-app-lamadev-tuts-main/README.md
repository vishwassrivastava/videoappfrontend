# GLadTube

![GladTube](https://i.ibb.co/3zxZ0JC/GladTube.png)

GLadTube is a Full-stack YouTube clone built using the MERN stack. It is based on Lama Dev's [YouTube Tutorial.](https://www.youtube.com/watch?v=CCF-xV3RSSs&list=PLj-4DlPRT48nfYgDK00oTjlDF4O0ZZyG8&index=32)

## What are the features of GLadTube

Users are able to sign-in if they already have an account or signup and register a new one. They can also choose signin with google using firebase authentication.

In the homepage of the app, it will fetch random videos from MongoDB. Users can explore trending videos or view their subscribed videos. They can choose to open a specific video page to watch the content, like or dislike a video and subscribe to a specific channel.

There is also a recommendation panel on the right side of the screen which fetch videos with the same tags.

Lastly, users are also able to logout.

## What went well

Following this tutorial I was able to strengthen my understanding of core MERN stack concepts. Additionally I was able to add styled components to my UI library repertoire.

Additionally Firebase was also used for authentication and storage.

## What are the challenges encountered

Since this is a relatively new tutorial, few challenges are encountered. The one thing that I have to change is the timeago package that Lama used in this tutorial since it is already outdated and it gives warning on the console.

However since Lama did not deploy this app, major challenges regarding deployment are encountered where everything doesn't seem to work as intended. I am also trying to figure out what I did why access token suddenly is not working on the front end while everything is working fine on Postman. This results to user unable to use all functionality that requires verified token to proceed.

![Postman](https://i.ibb.co/k55VFwc/Postman.png)

## Codebase differences

Moved the styled-components styles on the bottom for easier navigation and tracking of react core components and functionalities.

Switched the timeago package for momentjs.

Added register user and logout functionality as well as additional error handling (optional chaining) of some components to prevent the app from crashing when the user logs out and the states are reset to null.

## Future improvements

Lama already gave the logic for the backend to handle updating and deleting of users, comments and videos. I would like to find a way to handle those logic from the frontend in the future.

### Liked this repository?

Please don't forget to leave a ⭐🙏🏻!

## Run this app on your local machine

Separately on the client and server directory, you can run:

### `npm install`

Installs the required package dependencies

### `npm start`

Runs the client in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
