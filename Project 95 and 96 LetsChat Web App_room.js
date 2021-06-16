var firebaseConfig = {
    apiKey: "AIzaSyABb4Z8RUHVmiC6kS8Xn6yF_DQeWEfK2MU",
    authDomain: "kwitter-f3779.firebaseapp.com",
    databaseURL: "https://kwitter-f3779-default-rtdb.firebaseio.com",
    projectId: "kwitter-f3779",
    storageBucket: "kwitter-f3779.appspot.com",
    messagingSenderId: "820495194905",
    appId: "1:820495194905:web:04909ddf9d5c6311108388",
    measurementId: "G-W9QLW56W4P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "LetsChat Web App_room.html"

}


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class = 'room_name' id =" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "LetsChat Web App_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "LetsChat Web App_login.html";
}
