# Bot Framework + React in Internet Explorer

## About
This sample is a demonstration of how a developer can utilize Microsoft's v4 [BotFramework-WebChat](https://github.com/Microsoft/BotFramework-WebChat) tool in a React environment that is **Internet Explorer capable** (v11).

**BotFramework-Webchat** (v4) is designed and built in React. This is good, however it means it cannot run out-of-the-box in Internet Explorer. While there is a non-React flavor of Web Chat that will run in IE (with polyfills), it is *not* capable of running in a React environment.

This app is scaffolded using `create-react-app`. Generally, I try to stay away from this implementation. In this case, I wanted an environment that was proven stable as a starting point.

## Project

The app allows the user to:
- Embed BotFramework-WebChat into an html page via a React app.

## Required Assets
- npm
- WebPack
- Babel
- React

-----
### To Do:
- [ ] Write Tests
- [ ] Convert to React built from scratch