  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAWjysUM44XHrumoA6TYID3ydRIQChelc4",
    authDomain: "proyecto-tn.firebaseapp.com",
    projectId: "proyecto-tn",
    storageBucket: "proyecto-tn.appspot.com",
    messagingSenderId: "371135811110",
    appId: "1:371135811110:web:68ccfc96d270113cd0a0e7",
    measurementId: "G-733M88ZPDL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


const btnRegistrar = document.getElementById('btnSignUp');
const btnLogin = document.getElementById('btnLogin')
const btnCerrarSesion = document.getElementById('btnCerrarSesion');
const btnFacebook = document.getElementById('btnFacebook');

// CREAR USUARIO
btnRegistrar.addEventListener('click', ()=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password)
        promise
            .then(user => console.log("Bienvenid@ " + email))
            .catch (e => alert(e.message));
        console.log("Usuario creado satisfactoriamente")
})


// INICIAR SESIÓN
btnLogin.addEventListener('click', ()=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const mimuro = document.getElementById('mimuro');
    const formulario = document.getElementById('formulario'); 

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
        promise
            .then(user => console.log(email + " Te logueaste correctamente"))
            .catch(e => alert(e.message));
  
})


// CERRAR SESIÓN 
btnCerrarSesion.addEventListener('click',()=>{
  firebase.auth().signOut();
  alert("Cerrado de Sesión exitoso");

  const mimuro = document.getElementById('mimuro');
  const formulario = document.getElementById('formulario'); 
  mimuro.classList.remove('show');
  mimuro.classList.add('hide');
  formulario.classList.remove('hide');
  formulario.classList.add('show'); 
})



// ESTADO
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    const email = user.email;
    // console.log(user);
    console.log("Usuario activo " + email);
    mimuro.classList.remove('hide');
    mimuro.classList.add('show');
    formulario.classList.remove('show');
    formulario.classList.add('hide');

  }
  else{
    console.log("Usuario no activo")
  }
});

// LOGIN CON FACEBOOK
btnFacebook.addEventListener('click', ()=>{

  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result);
    console.log("logueado con facebook");
  })
  .catch((error) => {
    console.log(error);
  });
})


const btnGoogle = document.getElementById('btnGoogle');

// LOGIN CON GOOGLE
btnGoogle.addEventListener('click', ()=>{

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result);
    console.log("logueado con GOOGLE");
  })
  .catch((error) => {
    console.log(error);
  });
})
