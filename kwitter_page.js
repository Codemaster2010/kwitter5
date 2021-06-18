//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAS8AtlGXU9M2-kDE7qkTu8x7-1WVABIGc",
    authDomain: "kwitter-7529d.firebaseapp.com",
    databaseURL: "https://kwitter-7529d-default-rtdb.firebaseio.com",
    projectId: "kwitter-7529d",
    storageBucket: "kwitter-7529d.appspot.com",
    messagingSenderId: "1038866959538",
    appId: "1:1038866959538:web:9c313e0a88052c04220dab",
    measurementId: "G-EDHBC14DNW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg"). value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
