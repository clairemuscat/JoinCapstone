A Tinder-style remote networking app for technology professionals.

Features include custom video chat client built with Twilio
Programmable Video, direct messaging leveraging the realtime
capabilities of Google Cloud Firestore, and calendar to keep track
of networking appointments.

I set up the bulk of the video functionality, which included integrating the Twilio API. Specific components include Room.js, StartVideoChat.js, and Participant.js. In app.js I created the backend routes for generating tokens and creating new video rooms.

I also contributed to the src/utils.js functions, which constitute our matching algorithm. I worked closely with my colleague Jonah to integrate the matching algorithms with Cloud Firestore.
