const db = firebase.firestore();

  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        
        db.collection('user').doc(user.email).get().then((doc) =>{
               let x =doc.data()
               document.getElementById("pname").innerHTML = `${x.name}`
               
              //  setname(x.name)
               console.log(x.name)
               
              //  setfollowers(x.followers)
            //  console.log(followers)
              //  setfollowing(x.following)
              //  setgroups(x.groups)
              //  setuid(x.uid)
              //  setskills(x.skills)
               
              })
              .catch((error) => {
                console.log(`Error getting documents: ${error}`);
              });
  
              
    
    }
    else{
        console.log("issue")
    }
  });