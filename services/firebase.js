import firebase from "firebase/app"
import 'firebase/analytics'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCiaCeC3ipto4xJLWgj44ZOlQKrmUs1MJk",
  projectId: "tempus-website-972a3",
  appId: "1:939382951894:web:ec504132df67a5a8fa5e77",
  measurementId: "G-5R42G4N24M"
}


class Firebase {
  constructor() {
    this.analytics = null
    this.firestore = null

    this.pageViewIncrement = null
  }

  init() {
    firebase.initializeApp(firebaseConfig)

    // Disable analytics.
    // Google Analytics stores bunch of data by default and it seems we can't control which data is collected by default.
    // Because of all the data Google Analytics is storing we need to show a banner on the homepage about data we are collecting (storing cookies),
    // if we want to use google analytics.
    // this.analytics = firebase.analytics()
    this.firestore = firebase.firestore()

    this.initPageViewCounter()
  }

  initPageViewCounter() {
    this.pageViewIncrement = firebase.firestore.FieldValue.increment(1)
  }

  incrementPageView() {
    const pageViewsRef = this.firestore.collection('page-views').doc('counter')

    pageViewsRef.update({value: this.pageViewIncrement})
  }
}
export default new Firebase()
