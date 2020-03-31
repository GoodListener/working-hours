import * as firebase from 'firebase/app';
import "firebase/firestore";

var config = {
    apiKey: '***',
    databaseURL: '***',
    projectId: '***'
}

firebase.initializeApp(config);
var fireStore = firebase.firestore();

export default fireStore;