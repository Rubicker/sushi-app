import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyCYCgRvqQCCOIN76xV1FHu5pL4xGObGOro',
  authDomain: 'sushi-app-me.firebaseapp.com',
  databaseURL: 'https://sushi-app-me.firebaseio.com',
  projectId: 'sushi-app-me',
  storageBucket: '',
  messagingSenderId: '185635780411',
  appId: '1:185635780411:web:5ecc027d1dd320c8'
}

firebase.initializeApp(config)
