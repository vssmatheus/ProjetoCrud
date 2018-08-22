firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("card-login").style.display ="none";
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Bem Vindo: " + email_id;
      }
    } else {
      // No user is signed in.
      document.getElementById("card-login").style.display ="block";
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });

function login(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        window.alert("Error: " + errorMessage)
      });
}

function logout(){
    firebase.auth().signOut();
    window.location.href = 'index.html'
}

function create_account(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    
        // Handle Errors here.
        
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        
        window.alert("Error: " + errorMessage)
        
      });
      
}

//Estas funções não estão sento utilizadas
function add(){
    window.location.href = 'paginaInicial.html'
}
function volta(){
    window.location.href = 'index.html'
}