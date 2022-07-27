let qrcode = document.querySelector("#qrcode")
let qrtext = document.querySelector("#vals")
let qrbtn = document.querySelector(".btn")

let alert = document.querySelector(".alerts");
let alertmsg = document.querySelector(".alertmsg");

let dismissBtn = document.querySelector(".dismiss_btn");

function dismiss() {
    alert.classList.remove("animateAlert")
    alert.classList.add("removealerts")
    alert.setAttribute("style", "top:-500px")
    setTimeout(() => {
        alert.classList.remove("removealerts")

    }, 100);
    console.log("Function Called..!")
}

function alerts(p) {
    if (p == 'f') {
        alertmsg.innerText = "Please Enter a valid link..!"
        document.querySelector(".dismiss_btn").setAttribute("style", "display:block;")
        alert.setAttribute("style", "background-color:red;top:5px")
        alert.classList.add("animateAlert")

    } else if (p == 's') {

        alertmsg.innerText = "QR-code Generated successfully..💯"
        alert.setAttribute("style", "background-color:rgb(0 163 86);top:5px")
        document.querySelector(".container").classList.add("active")
        alert.classList.add("animateAlert")


    }
}

document.querySelector("#more").addEventListener("click", () => {
    document.querySelector(".container").classList.remove("active")
    document.querySelector("#qrcode").setAttribute("style", "display:none")
        // alert.
    alert.setAttribute("style", "display:none")
    qrtext.value = "";
})

function submit() {
    let val = document.getElementById("vals").value;
    alert.setAttribute("style", "display:block")
    dismissBtn.setAttribute("style", "display:block")
    console.log(val)
    if (val == "") {
        alerts('f')
    } else {
        let size = "1000x1000"
        let data = val
        let baseURL = "https://api.qrserver.com/v1/create-qr-code/"
        let url = `${baseURL}?data=${data}&size=${size}`;
        document.querySelector("#img_dwnld").setAttribute("href", url)
        document.querySelector("#img_dwnld").setAttribute("download", url)
        qrcode.src = url
        alerts('s')
        console.log("Aman")
        qrcode.setAttribute("style", "display:block")
        document.getElementById("#dwnld").setAttribute("href", url)
    }
};