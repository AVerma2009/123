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

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "LetsChat Web App_login.html";
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = ""
}
