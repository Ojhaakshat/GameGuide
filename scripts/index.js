const guides = document.querySelector('.guides');

//setup guides
const setupGuide = (data => {
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
})

document.addEventListener('DOMContentLoaded', (e) => {
    var modals = document.querySelectorAll('.modal');
    // initialises all Modals with class of modals
    M.Modal.init(modals);

    var guideitems = document.querySelectorAll('.collapsible');
    
    // initialises all items Collapsible with class of collapsible    
    M.Collapsible.init(guideitems);
})