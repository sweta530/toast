var id= 0;
var arr = [];

function show_toast() {
    let toast_id = create_toast();
    var toast = document.getElementById(toast_id);
    toast.classList.add("show");
    console.log(arr);
    remove_toast(toast)
}

function create_toast(){
    var toast_container = document.getElementById("toast-container");
    toast_id = "toast-"+id;
    toast_container.innerHTML += 
    `<div class="toast" id=${toast_id}>
        This is SnackBar!!
        <button class="close-btn" onclick="close_toast()">X</button>
    </div>`;
    arr.push(toast_id);
    id+=1;
    return toast_id;
}

function remove_toast(toast) {
    setTimeout(function(){ toast.classList.remove("show"); }, 3900);
    if (arr.length >3) {
        arr.shift();
    }
}