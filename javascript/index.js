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
        window.open('profile.html','_self');
      }, err => {
        //   let span = document.createElement('div')
        //   span.innerHTML = `
        //     ${err}
        //   `
          alert(err)
        console.log('Error logging in: ', err);
      });
  };

chnbio = () =>{
  let val = document.getElementById("bioed").value
  firebase.auth().onAuthStateChanged(function(user){
    var bioref = db.collection("user").doc(user.email);
    bioref.update({
      bio: firebase.firestore.FieldValue.arrayUnion(val)
  });
  })
  }


  
  firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    let glist = []
    let plist = []
    db.collection('Groups').where("members","array-contains","abhishekst").get().then((querySnapshot) =>{
      // var renuser = <UserCard />
      querySnapshot.docs.forEach((documen) => {
              let x = documen.data()
              glist.push(x)  
              
              let cont = `
              <div class="col mb-4">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${x.project.name}</h5>
                <p class="card-text">${x.project.desc}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
             </div>
              `
              // console.log(cont)
              let z = document.getElementById("myp")
              console.log(z)
              z.innerHTML += cont

          });
          // console.log(glist)
        })
        .catch((error) => {
          console.log(`Error getting documents: ${error}`);
        })

        // console.log(glist)

      
        db.collection('project').get().then((querySnapshot) =>{
          // var renuser = <UserCard />
          querySnapshot.docs.map((document) => {
                  plist.push(document.data())    
                  // console.log(plist)                   
              });
            })
            .catch((error) => {
              console.log(`Error getting documents: ${error}`);
            })

          // console.log(plist)

      
      db.collection('user').doc(user.email).get().then((doc) =>{
             let x =doc.data()
             document.getElementsByClassName("pname").innerHTML = `${x.name}`
             document.getElementById("puid").innerHTML = `${x.uid}`
             let follwers = x.followers
             let following = x.following
             let projects = x.projects
             document.getElementById("loc").innerHTML = `${x.location}`
             document.getElementById("ppost").innerHTML = `${projects.length}`
             document.getElementById("pfoll").innerHTML = `${follwers.length}`
             document.getElementById("pings").innerHTML = `${following.length}`

             x.bio.forEach(val => {
               const li = document.createElement("li")
               li.innerHTML = `${val}`
               document.getElementById("bio").append(li)
             });
            //  console.log(x.name)

             lang = "python"
             const li2 = document.createElement("li")
             li2.class = "als-item"
            //  li2.innerHTML = `
            //  <div class="card skillCard shadow-sm" >
            //    <img class="card-img-top skillImg" src="asset/skills/${lang}.png" alt="Card image cap">
            //    <div class="card-body">
            //      <p class="text-center skillName font-weight-bold ">${lang}</p>
            //    </div>
            //  </div>
            //  `
            //  li2.append(content)
            const di2 = document.createElement("div")
            di2.class = "card skillCard shadow-sm"
            const img = document.createElement("img")
            img.class =  "card-img-top skillImg"
            img.src = `asset/skills/${lang}.png`
            img.alt = "Card image cap"
            di2.appendChild(img)
            const di3 = document.createElement("div")
            di3.class = "card-body"
            const par = document.createElement("p")
            par.class = "text-center skillName font-weight-bold"
            par.innerHTML = `${lang}`
            di3.appendChild(par)
  
            di2.appendChild(di3)
            li2.append(di2) 

            const ul = document.createElement("ul")      
            ul.append(li2)
            console.log(ul) 
            document.getElementById("dlink").innerHTML += li2            
            })
            .catch((error) => {
              console.log(`Error getting documents: ${error}`);
            });

            
  
  }
  else{
      console.log("issue")
  }
});

