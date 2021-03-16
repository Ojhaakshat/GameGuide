const guides = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetils = document.querySelector('.account-details');

const setupUI = (user) => {
    if(user) {
        const html = `<div>Logged In As : ${user.email}</div>`
        accountDetils.innerHTML = html;
        loggedInLinks.forEach(element => {
            element.style.display = 'block';
        });
        loggedOutLinks.forEach(element => {
            element.style.display = 'none';
        });

    } else {
        accountDetils.innerHTML = '';
        loggedInLinks.forEach(element => {
            element.style.display = 'none';
        });
        loggedOutLinks.forEach(element => {
            element.style.display = 'block';
        });
    }
}


//setup guides
const setupGuide = (data => {
    if(data.length) {
        let html = '';
        data.forEach(element => {
            const guide = element.data();
            const li = `
            <li>
                <div class="collapsible-header grey lighten-4">${guide.title}</div>
                <div class="collapsible-body white"><span>${guide.content}</span></div>
            </li>
            `
            html += li;
        });
        guides.innerHTML = html;
    } else {
        guides.innerHTML = `<h5 class = "center">Login to view guides</h5>`
    }
})

document.addEventListener('DOMContentLoaded', (e) => {
    var modals = document.querySelectorAll('.modal');
    // initialises all Modals with class of modals
    M.Modal.init(modals);

    var guideitems = document.querySelectorAll('.collapsible');
    
    // initialises all items Collapsible with class of collapsible    
    M.Collapsible.init(guideitems);
})
