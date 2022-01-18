import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDv9LaQIvesszAPeqFzmtQjfNev6b6eNc4",
    authDomain: "firechat-d106f.firebaseapp.com",
    projectId: "firechat-d106f",
    storageBucket: "firechat-d106f.appspot.com",
    messagingSenderId: "302009827611",
    appId: "1:302009827611:web:298d5defa0501afde6d3be"
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db , auth}