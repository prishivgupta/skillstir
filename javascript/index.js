const firebaseConfig = {
    apiKey: "AIzaSyA3dci-3CnLUzf1cEmqpA4ZV6ztPwrGJeQ",
    authDomain: "everchat-d9b7b.firebaseapp.com",
    databaseURL: "https://everchat-d9b7b.firebaseio.com",
    projectId: "everchat-d9b7b",
    storageBucket: "everchat-d9b7b.appspot.com",
    messagingSenderId: "869059872709",
    appId: "1:869059872709:web:8af1d551d8c58d3d636dac",
    measurementId: "G-FDVC6TMB03"
  };
firebase.initializeApp(firebaseConfig);


console.log("aur bahiya kais hoo")
const db = firebase.firestore();
submitLogin = async () => {
    // e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.
    let email = document.getElementById("exampleInputEmail1").value
    let pass = document.getElementById("exampleInputPassword1").value
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        sessionStorage.setItem("AuthenticationState", "Authenticated");
        window.open('dashboard.html','_self');
      }, err => {
        //   let span = document.createElement('div')
        //   span.innerHTML = `
        //     ${err}
        //   `
          alert(err)
        console.log('Error logging in: ', err);
      });
  };

