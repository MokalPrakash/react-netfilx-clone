import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
//import {seedDatabase} from '../seed'

//Put your app config file from firebase
const config={
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

const firebase = Firebase.initializeApp(config)

//seedDatabase(firebase)

export {firebase}