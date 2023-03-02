function changeDate()
{
    var d = document.getElementById("date");
    if (d.innerHTML === "01:28 am") {
        d.innerHTML = 'Monday, 20 February';
    } else {
        d.innerHTML = "01:28 am";
    }
}

function changeAudio()
{
    var a = document.getElementById("audio");
    if (a.innerHTML === "󰕾") {
        a.innerHTML = "<p class='pointer'>󰕿</p>";
    } else {
        a.innerHTML = "<p class='pointer'>󰕾</p>";
    }
}


function RofiLauncher()
{
    if (document.getElementById("launcher").style.visibility === "visible") {
        document.getElementById("launcher").style.visibility="hidden";
    } else { 
        document.getElementById("launcher").style.visibility="visible"
    }
}

function changeTo1()
{
    document.getElementById("body-image-w2").style.visibility="hidden";
    document.getElementById("launcher").style.visibility="hidden";
    document.getElementById('w1').innerHTML = "󰮯";
    document.getElementById('w2').innerHTML = "󰊠";
    document.getElementById('title').innerHTML = "ayxthefish - Firefox";
    document.getElementById("body-image-w2").style.visibility="hidden";
    document.getElementById("body-image").style.visibility="visible";
}

function changeTo2()
{
    document.getElementById("launcher").style.visibility="hidden";
    document.getElementById('w1').innerHTML = "󰊠";
    document.getElementById('w2').innerHTML = "󰮯";
    document.getElementById('title').innerHTML = "ayx ~/.config/bspwm";
    document.getElementById("body-image-w2").style.visibility="visible";
    document.getElementById("body-image").style.visibility="hidden";
}

function changeToEmpty()
{
    document.getElementById('w1').innerHTML = "󰊠";
    document.getElementById('w2').innerHTML = "󰊠";
    document.getElementById('title').innerHTML = "ayx - Arch Linux";
    document.getElementById("body-image-w2").style.visibility="hidden";
    document.getElementById("body-image").style.visibility="hidden";
}


function randomWall() {
    var Images = new Array();
    Images[0] = '../images/wp/wallhaven-x6ee2o.png'
    Images[1] = '../images/wp/wallhaven-p99oxp.png'
    Images[2] = '../images/wp/wallhaven-9doowx.png'
    Images[3] = '../images/wp/wallhaven-0pe613.jpg'
    Images[4] = '../images/wp/wallhaven-we5qpr.jpg'
    Images[5] = '../images/wp/wallhaven-9dd3d1.jpg'
    Images[6] = '../images/wp/wall-04.webp'
    Images[7] = '../images/wp/wall-01.webp'
    Images[8] = '../images/wp/wallhaven-1p398w.jpg'
    Images[9] = '../images/wp/wall-02.webp'
    Images[10] = '../images/wp/bg_20.jpg'
    Images[11] = '../images/wp/wallhaven-ex881l.png'
    
    var p = Images.length;
    var preBuffer = new Array()

    for (i = 0; i < p; i++){
        preBuffer[i] = new Image()
        preBuffer[i].src = Images[i]
    }

    var whichImage = Math.round(Math.random()*(p-1));
    var img = "url("+Images[whichImage]+");";
    console.log(img)
    document.body.style.background = Images[whichImage];
}