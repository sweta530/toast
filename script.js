const toastContainer = document.getElementById('toast-container');
const maxVisibleToasts = 3;
const toastQueue = [];
var id=0

function showToast() {
  const toast_id = `toast-${id}`
  id+=1;
  if (toastContainer.children.length < maxVisibleToasts) {
    createToast(toast_id);
  } else {
    toastQueue.push(toast_id);
  }
}

function createToast(toast_id) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = 
  `<span>This is a toast message</span>
    <span class="close-btn" onclick="closeToast(${toast})">X</span> `;
  toastContainer.prepend(toast);
  closeToast(toast)
}

function closeToast(toast) {
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
        if (toastQueue.length > 0) {
          createToast(toastQueue.shift());
        }
    }, 1000);
  }, 4000);
}
