// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app)

function signup() {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var repeatPassword = document.getElementById('passwordAgain').value;

        if (password === repeatPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function(userCredential) {
                    var user = userCredential.user;
                    console.log(user)
                    // Now, you can store additional user data to Firestore or Realtime Database
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        } else {
            alert("Passwords do not match.");
        }
        console.log("Signup button clicked!");
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Email:", email);
            console.log("Password:", password);
            console.log("Repeat Password:", repeatPassword);
        };



