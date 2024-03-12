const toastQueue = []; // Array to store all toast messages

function showToast() {
  const toastContainer = document.getElementById('toast-container');
  
  // If there are already three toasts displayed, remove the oldest one
  if (toastQueue.length >= 3) {
    const oldToast = toastQueue.shift(); // Remove the oldest toast
    oldToast.classList.add('slide-out');
    setTimeout(() => {
      oldToast.remove();
    //   createToast(toastContainer);
    }, 500);
  } else {
    setTimeout(createToast(toastContainer),500);
  }
}

function createToast(container) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = `
    <span>This is a toast message</span>
    <span class="close-btn" onclick="closeToast(this)">X</span>
  `;
  container.prepend(toast);
  toastQueue.push(toast); // Add the new toast to the array

  setTimeout(() => {
    closeToast(toast.querySelector('.close-btn'));
  }, 3000);
}

function closeToast(btn) {
  const toast = btn.closest('.toast');
  toast.classList.add('slide-out');
  setTimeout(() => {
    toast.remove();
    const index = toastQueue.indexOf(toast);
    toastQueue.splice(index, 1); // Remove the closed toast from the array
  }, 800);
}
