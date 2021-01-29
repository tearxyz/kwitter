
var firebaseConfig = {
  apiKey: "AIzaSyDT6smryzdV7G_vKS3kIK38EHvjy1pcxNI",
  authDomain: "classtest-95747.firebaseapp.com",
  databaseURL: "https://classtest-95747-default-rtdb.firebaseio.com",
  projectId: "classtest-95747",
  storageBucket: "classtest-95747.appspot.com",
  messagingSenderId: "576281826789",
  appId: "1:576281826789:web:b46823f24fd25af1744b0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
