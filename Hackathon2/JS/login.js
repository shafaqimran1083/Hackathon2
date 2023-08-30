// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app)

function login(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
        window.location.href = "../pages/dashboard.html"
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User Not Found',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

