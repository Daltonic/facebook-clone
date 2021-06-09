import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import { firebaseConfig } from './app.config'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const storage = firebaseApp.storage()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, storage, provider, timestamp }
export default db
