# Job Listing UI

A React Native starter kit with a focus on simplicity, making it a lot easier to get started with building your Job Listing app.

### Getting started

- Get the code

```
git clone git@gitstrap.com:VictorOlowe/job-listing-app.git
```

- cd `job-listing-app`
- Install dependencies

```
yarn
```

- Start the development server

```
yarn start
```

- Install the [Expo](https://expo.io) client app on your iOS or Android simulator (or device)
- Connect to the same wireless network as your computer
- Follow the on-screen instructions to open the project on your iOS or Android simulator (or device).
- 🥂

### Storybook

[Storybook](https://github.com/storybooks/storybook) is an open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.

This amazing feature is available in this UI theme. To view and develop components with Storybook:

- Open `src/App.js`
- Update the `storybook` state

```javascript
state = {
  fontLoaded: false,
  storybook: true //not `false`
}
```

- Make sure the React Native packager is running

```
yarn start
```

- Start the Storybook server

```
yarn storybook
```

Note: The above command will compile all the [stories](https://storybook.js.org/docs/basics/writing-stories/) for presentation in the app. Stories are located in the `src/app/stories` directory

- View the app in your simulator or physical device. You can now develop your stunning UI interactively
- To go back to viewing your app normally, update the `storybook` state once again

```javascript
state = {
  fontLoaded: false,
  storybook: false //not `true`
}
```

Note: you can kill the storybook server at this point. `Ctrl+C`

- 🥂

### ✅ Tests

Unit tests are written for appropriate components. To run the tests:

```javascript
yarn test
```
