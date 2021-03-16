const signupform = document.querySelector('#signup-form');
const loginform = document.querySelector('#login-form');

db.collection('guides').get().then(snapshot => {
    setupGuide(snapshot.docs);
})

//signup
signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    // get info 
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;
    //signup user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupform.reset();
    })
})

//signout or logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('Succesfully Signed Out');
    })
})

//login
loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    //get info
    const email = loginform['login-email'].value;
    const password = loginform['login-password'].value;
    //login user
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginform.reset();
    })
})

//Auth status changes
auth.onAuthStateChanged((user) => {
    if(user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
    }
})