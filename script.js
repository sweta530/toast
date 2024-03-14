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
    toastContainer.appendChild(toast);
    moveDiv(toast);
}

function moveDiv(toast) {
    toast.classList.add('right');
    setTimeout(() => {
        toast.classList.remove('right');
    }, 2000);
    setTimeout(() => {
        toast.classList.add('left');
    }, 4000);
    setTimeout(() => {
      toast.classList.remove('left');
      toast.remove();
      if (arr.length > 0) {
        createDiv(document.getElementById(arr.shift()));
      }
    }, 5000);
}

function closeToast(toastID) {
  let toast = document.getElementById(toastID);
  toast.nextSibling.classList.add('down');
  toast.remove();
}



