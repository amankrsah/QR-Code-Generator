let qrcode = document.querySelector("#qrcode")
let qrtext = document.querySelector("#vals")
let qrbtn = document.querySelector(".btn")


window.addEventListener("load", event => {
    var load = qrcode.complete;
    alert(load);
})
let alert = document.querySelector(".alerts");
let alertmsg = document.querySelector(".alertmsg");

let dismissBtn = document.querySelector(".dismiss_btn");

function dismiss() {
    alert.setAttribute("style", "top:-50px;display:none;")
    console.log("Function Called..!")
}

function alerts(p) {
    if (p == 'f') {
        alertmsg.innerText = "Please Enter a valid link..!"
        document.querySelector(".dismiss_btn").setAttribute("style", "display:block;")
        alert.setAttribute("style", "background-color:red;top:5px")
        alert.classList.add("animateAlert")

        // console.log("Alerts function called..!")
    } else if (p == 's') {
        alertmsg.innerText = "QR-code Generated successfully..💯"
        document.querySelector("#space_top").setAttribute("style", "display:none;")
        document.querySelector(".dismiss_btn").setAttribute("style", "display:block;")
        alert.setAttribute("style", "background-color:rgb(0 163 86);top:5px")
        document.querySelector(".btn").setAttribute("style", "display:none;")
        document.querySelector("#vals").setAttribute("style", "display:none;")
        document.querySelector(".save_btn").setAttribute("style", "display:block;")
        document.querySelector(".more_btn").setAttribute("style", "display:block;")
        alert.classList.add("animateAlert")

    }
}


function submit() {
    let val = document.getElementById("vals").value;
    alert.setAttribute("style", "display:block")
    dismissBtn.setAttribute("style", "display:block")
    console.log(val)
    if (val == "") {
        console.log(window.navigator.onLine)
        alerts('f')
    } else {
        let size = "1000x1000"
        let data = val
        let baseURL = "https://api.qrserver.com/v1/create-qr-code/"
        let url = `${baseURL}?data=${data}&size=${size}`;
        qrcode.src = url
        alerts('s')
        console.log("Aman")
        qrcode.setAttribute("style", "display:block")
        document.getElementById("#dwnld").setAttribute("href", url)

        // alert('Aman is a god boy')
    }


}