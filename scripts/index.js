document.addEventListener('DOMContentLoaded', (e) => {
    var modals = document.querySelectorAll('.modal');
    // initialises all Modals with class of modals
    M.Modal.init(modals);

    var guideitems = document.querySelectorAll('.collapsible');
    
    // initialises all items Collapsible with class of collapsible    
    M.Collapsible.init(guideitems);
})