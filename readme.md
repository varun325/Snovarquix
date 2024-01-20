# SNOVARQUIX

## HTTP stream server and client for streaming videos locally

- Create a simple server locally for streaming videos in your home network

> checked features are already implemented
  
- ## Features

  - [x] Basic go server for streaming videos
  - [x] As a user I should be able to log into the app
  - [x] As a user I should be able to create an account
  - [x] There should be a feature to allow user to log in securely on the local network using JWT or OAuth
  - [ ] Add functionality to show a toast when the user has signed up successfully and reroute the user back to sign in page
  - [ ] Add proper validation on the sign up page
  - [ ] There should be a mechanism to refresh the JWT token using the user cookies if the IP address/ mac address is same
  - [ ] There should be a navbar with a profile icon clicking which opens a small tab in which there is settings and logout option
  - [ ] A responsive navbar should exist which has a few options for selection like categories, language etc
  - [ ] As a user I should be able to change the profile settings
  - [ ] As a user I should be able to select the directory path in profile settings for my server
  - [ ] As a user I should be able to scan through all the videos in the selected local directory
  - [ ] As a user I should be able to see the videos added in a subdirectory as a scrollable collection on main screen
  - [ ] As a user I should be able to see different series grouped together based on seasons and episodes
  - [ ] As a user I should be able to create a collection locally where I can create series using name, add seasons and select episodes for each season if needed
  - [ ] There should be a feature where the app tries to arrange episodes itself by default but the order can be rearranged if needed by the user using drag and drop
  - [ ] use docker to containerise the whole project
  - [x] use MYSQL server or local file system operations to maintain local data for the system
  - [ ] Add git actions for verifying commits
  - [ ] Add unit tests for high code coverage
  - [ ] Show the server's web IP address and port number on the console as a clickable URL
  - [ ] Add the ability to use device name instead of local IP address to hit the client URL
  - [ ] Add request forwarding using nginx or something to re-route all the requests from client machine to backend server through the react server, the client doesn't need to have direct access to backend URLs
