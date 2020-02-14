// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAT2ob5KOJWzklXAyAQvyebjIDs1Ry_WZw",
    authDomain: "contactform-b236a.firebaseapp.com",
    databaseURL: "https://contactform-b236a.firebaseio.com",
    projectId: "contactform-b236a",
    storageBucket: "contactform-b236a.appspot.com",
    messagingSenderId: "150901391179",
    appId: "1:150901391179:web:0e792aac206b75dc12b2ce",
    measurementId: "G-RP5XV9RM99"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var Lname = getInputVal('Lname');
    var Country = getInputVal('Country');
    var Subject = getInputVal('Subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(fname, Lname, Country, Subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, Lname, Country, sUBJECT, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname: lname,
      country: country,
      message:message,
    });
  }