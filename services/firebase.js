import firebase from "firebase/app"
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyCiaCeC3ipto4xJLWgj44ZOlQKrmUs1MJk",
  projectId: "tempus-website-972a3",
  appId: "1:939382951894:web:ec504132df67a5a8fa5e77",
  measurementId: "G-5R42G4N24M"
}


class Firebase {
  constructor() {
    this.analytics = null
  }

  init() {
    firebase.initializeApp(firebaseConfig)

    this.analytics = firebase.analytics()
  }
}
export default new Firebase()
