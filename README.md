# ClouthApp

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Clouth App is the simple application that allows you to show your clients the latest fashion in clothes for ladies, men and children.


First, download the [APK Here](https://drive.google.com/open?id=1j8hN0JJTpglg0ruAAoMoAJS4htZIjPtJ)


# New Features!

  - Carousel of images
  - Wish list

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> This has a simple view, with a friendly navigation and 
> best of all, zero publicity.

### Tech

Clouthapp uses a number of open source projects to work properly:

* [React Native](https://facebook.github.io/react-native/) - A framework for building native apps using React!
* [Lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity, performance, & extras
* [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) - The first declarative React Native router.
* [React Native Maps](https://github.com/react-community/react-native-maps) - React Native Mapview component for iOS + Android
* [NativeBase](https://nativebase.io/) - Essential cross-platform UI components for React Native & Vue Native
* [React Native Drawer](https://github.com/root-two/react-native-drawer) - React native drawer, configurable to achieve material design style, slack style, parallax, and more. Works in both iOS and Android
* [react-native-image-gallery](https://github.com/archriss/react-native-image-gallery) - A pure JavaScript image gallery component for React Native apps with common gestures like pan, pinch and doubleTap.
* [react-native-snap-carousel](https://github.com/archriss/react-native-snap-carousel) - Swiper component for React Native featuring previews, multiple layouts, parallax images, performant handling of huge numbers of items, and RTL support.

### Installation

Clouthapp requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd clouthapp
$ npm install
$ react-native run-android
```

Generate APK release...

```sh
$ cd android
$ ./gradlew assembleRelease
```

### Development

Want to contribute? Great!

### Todos

User management
- [x] Login
- [x] Registration with email
- [ ] Registration with Social Networks

Location (Google Maps)
- [x] Store location
- [ ] Search of stores in the Map

image gallery
- [x] Carousel of images
- [x] Zoom in / out
- [ ] Image Peek & Pook like Instagram
- [ ] Notifications of new products (Firebase)

Shopping cart
- [x] Product storage (AsyncStorage)
- [x] Order preview
- [x] Wish list
- [x] Payment form
- [ ] Integration with payment methods

License
----

MIT
