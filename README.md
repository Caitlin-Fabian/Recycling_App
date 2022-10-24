# Recycling App

## How to Run the Application for Mac Users:

- make sure you are in the Recycling App directory and have done the following.
- You only have to npm install and npx pod-install the first time you clone the repository
- `npm install`
- `npx pod-install`
- `xcrun simctl list devices` to see all the iOS devices you can simulate on
- `npx react-native run -ios --simulator="________ (whatever iphone you want to simulate on that is available"` (or `npm run android`, if you have an emulator running. Note: If you have not set up your development environment for running react-native android apps, see: https://reactnative.dev/docs/environment-setup)

## Issues

unfortunately, the app does not work on expo-go because realm does not work with the latest update. This will only run on andriod studios or xcode.
