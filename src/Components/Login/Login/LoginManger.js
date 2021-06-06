
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './firebase.Config'



export const initializeLoginFrameWorker = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}


export const handleGoogleSingIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            var credential = result.credential
            var token = credential.accessToken

            const { displayName, photoURL, email } = result.user
            const user = {
                name: displayName,
                photo: photoURL,
                email: email,
                success: true
            }
            return user
        })
        .catch(error => {
            var errorCode = error.code
            var errorMessage = error.message
            // The email of the user's account used.
            var email = error.email
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential
            // ...
        })
}



export const handleCreactUser = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {

            const newUserInfo = {}
            newUserInfo.error = ''
            newUserInfo.success = true
            updateUserName(name)
            return newUserInfo


        })
        .catch((error) => {
            const newUserInfo = {}
            newUserInfo.error = error.message
            newUserInfo.success = false
            return newUserInfo
        });
}

export const handleSingInUsers = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            // Signed in
            const newUserInfo = {}
            newUserInfo.error = ''
            newUserInfo.success = true
            return newUserInfo
            // ...
        })
        .catch((error) => {
            const newUserInfo = {}
            newUserInfo.error = error.message
            newUserInfo.success = false
            return newUserInfo
        });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(function () {
        console.log('user Update Successfully ')
    }).catch(function (error) {
        // An error happened.
        console.log(error)
    });
}

export const handleSingOut = () => {
    return firebase.auth().signOut().then(res => {
        const singOut = {
            isSingIn: false,
            name: '',
            photo: '',
            email: '',
            password: '',
            success: false,
            newUser: false
        }
        return singOut
    }).catch((error) => {
        // An error happened.
    });

}
