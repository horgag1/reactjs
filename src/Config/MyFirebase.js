import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCTu3Ct8LKV8E8IijmNtHFlZOShOH4lhBY",
  authDomain: "brandio-b473a.firebaseapp.com",
  databaseURL: "https://brandio-b473a.firebaseio.com",
  projectId: "brandio-b473a",
  storageBucket: "brandio-b473a.appspot.com",
  messagingSenderId: "430046518150",
  appId: "1:430046518150:web:0aa94cb08130f2c1"
}
firebase.initializeApp(config)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export const myFirebase = firebase
                          export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()