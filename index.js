window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("nav");
    var width = window.innerWidth || document.documentElement.clientWidth;
    // Change the background color when scrolling
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
        navbar.style.backgroundColor = "rgb(26,50,90,0.8)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
}

const icon = document.getElementById("icon");
const cros = document.getElementById("cross");
const ye = document.getElementById("ye");
const navicon = () =>{
    icon.style.display = 'none';
    cros.style.display = 'flex';
    ye.style.display = 'flex';
}

const cross = () =>{
    icon.style.display = 'flex';
    cros.style.display = 'none';
    ye.style.display = 'none';
}

const close = () =>{
    console.log("hello");
    ye.style.display = 'none';
    cros.style.display = 'none';
    icon.style.display = 'flex';
}


ye.addEventListener('click',()=>{
    ye.style.display = 'none';
    cros.style.display = 'none';
    icon.style.display = 'flex';
})
