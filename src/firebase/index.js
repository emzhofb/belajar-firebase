import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB0ITjGfFyPKyv6nW7VGVW-BzB59YqJvP4",
    authDomain: "fir-sekolah-2263f.firebaseapp.com",
    databaseURL: "https://fir-sekolah-2263f.firebaseio.com",
    projectId: "fir-sekolah-2263f",
    storageBucket: "fir-sekolah-2263f.appspot.com",
    messagingSenderId: "660320092892"
};
firebase.initializeApp(config);

export default firebase