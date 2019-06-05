import firebase from 'firebase'
import React, { Component } from 'react'
import { Font, AppLoading, registerRootComponent } from 'expo'
import AppContainer from 'routes'
import StorybookUI from '../storybook'

class App extends Component {
  state = {
    fontLoaded: false,
    storybook: false,
    loggedIn: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Phosphate: require('assets/fonts/Phosphate.ttf'),
      SourceSansProRegular: require('assets/fonts/SourceSansPro-Regular.ttf'),
      SourceSansProLight: require('assets/fonts/SourceSansPro-Light.ttf'),
      SourceSansProBold: require('assets/fonts/SourceSansPro-Bold.ttf')
    })

    this.setState({
      fontLoaded: true,
    })

    const config = {
      apiKey: "AIzaSyDwa-JMtMPP8UMea52QIAzXW01tddV37J0",
      authDomain: "secondcoffee-48806.firebaseapp.com",
      databaseURL: "https://secondcoffee-48806.firebaseio.com",
      projectId: "secondcoffee-48806",
      storageBucket: "secondcoffee-48806.appspot.com",
      messagingSenderId: "1031848241926",
      appId: "1:1031848241926:web:24dc72ab001dab76"
    };
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true })
      else this.setState({ loggedIn: false })
    })
  }

  render() {
    const { fontLoaded, storybook } = this.state

    if (fontLoaded) {
      if (!storybook) {
        return <AppContainer />
      } else {
        return <StorybookUI />
      }
    } else {
      return <AppLoading />
    }
  }
}

registerRootComponent(App)
