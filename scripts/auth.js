const signupform = document.querySelector('#signup-form');
const loginform = document.querySelector('#login-form');


//signup
signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    // get info 
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;
    const signupBio = signupform['signup-bio'].value;
    
    //signup user
    // auth.createUserWithEmailAndPassword(email, password).then(cred => {
    //     console.log(cred);
    //     const modal = document.querySelector('#modal-signup');
    //     M.Modal.getInstance(modal).close();
    //     signupform.reset();
    // })
    
    //signup and create user collection and document
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred);
        return db.collection('users').doc(cred.user.uid).set({
            bio: signupBio,
        })
    }).then(() => {
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
        //It is fired now whenever the database is changed - making it realtime
        db.collection('guides').onSnapshot(snapshot => {
            setupGuide(snapshot.docs);
            setupUI(user);
        }, err => console.log(err.message))
    } else {
        setupUI();
        setupGuide([]);
    }
})


const create = document.querySelector('#create-form');
create.addEventListener('submit', (e) => {
    
    e.preventDefault();
    db.collection('guides').add({
        title: create['title'].value,
        content: create['content'].value
    }).then(() => {
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        create.reset();
        
    }).catch((err) => {
        let html ='';
        let div = `<div class="alert alert-warning" role="alert"> ${err.message} </div>`
      html += div;
      guides.innerHTML += html;
        console.log(err.message);
    })
})

