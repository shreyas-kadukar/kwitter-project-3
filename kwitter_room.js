const firebaseConfig = {
    apiKey: "AIzaSyCYMPUXDcdPLfBvo12h1aAgJCzm3-oAO6k",
    authDomain: "kwitter-7e4f0.firebaseapp.com",
    databaseURL: "https://kwitter-7e4f0-default-rtdb.firebaseio.com",
    projectId: "kwitter-7e4f0",
    storageBucket: "kwitter-7e4f0.appspot.com",
    messagingSenderId: "427843526613",
    appId: "1:427843526613:web:a9716d6c31b0f94a68a75c"
  };

  const app = initializeApp(firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="welcome "+username+" !";

function addroom(){
    room_name=document.getElementById("room").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     
  console.log(Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

    });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}