const toastContainer = document.getElementById("toast-container");
let id = 0;
let arr = [];

function showToast() {
    let toastID = 'toast-'+id;
    id += 1;
    if (toastContainer.children.length < 3) {
        createDiv(toastID);
    } else {
        arr.push(toastID);
    }
}

function createDiv(toastID){
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = toastID;
    toast.innerHTML = `<span>This is a toast message</span>
    <span class="close-btn" onclick="closeToast('${toastID}')">X</span> `;
    toastContainer.append(toast);
    setTimeout(() => {
        moveDiv(toast);
    }, 100);
}

function moveDiv(toast) {
    setTimeout(() => {
        toast.classList.add('left');
    }, 3000);
    setTimeout(() => {
        toast.classList.remove('left');
        closeToast(toast.id);
    }, 3000);
}

function closeToast(toastID) {
    let toast = document.getElementById(toastID);
    toast.classList.add('left');
    setTimeout(() => {
        toast.remove();
        if (arr.length > 0) {
            createDiv(arr.shift());
        }
    }, 1000);
}


        // if (nextToast = toast.nextSibling) {
        //     nextToast.classList.add('down');
        //     console.log('down');
        //     setTimeout(() => {
        //         nextToast.classList.remove('down');
        //     },500);
        // }