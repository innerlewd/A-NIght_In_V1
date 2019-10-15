var firebaseConfig = {
    apiKey: "AIzaSyA0DkrefLcwyQwSLyJ_5zal9zvNNIRMY-M",
    authDomain: "a-night-in-174af.firebaseapp.com",
    databaseURL: "https://a-night-in-174af.firebaseio.com",
    projectId: "a-night-in-174af",
    storageBucket: "a-night-in-174af.appspot.com",
    messagingSenderId: "315150093524",
    appId: "1:315150093524:web:6fdf687e5d784b617f3f41",
    measurementId: "G-LRKZPEN53F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  ///reference messages collection
  var messageRef = firebase.database().ref('message');
  
//listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
///submit form
function submitForm(e){
    e.preventDefault();
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var userCity = getInputVal('inputCity');
    var userState = getInputVal('inputState');
    ///save user
  saveMessage(firstName,lastName,userCity,userState);
$('form')[0].reset();
}
///function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
///save info to firebase
function saveMessage(firstName,lastName,userCity,userState){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    firstName: firstName,
    lastName: lastName,
    userCity: userCity,
    userState: userState,
  })
}