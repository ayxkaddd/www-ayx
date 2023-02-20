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

function changeTo1()
{
    document.getElementById("body-image-w2").style.visibility="hidden";
    document.getElementById('w1').innerHTML = "󰮯";
    document.getElementById('w2').innerHTML = "󰊠";
    document.getElementById('title').innerHTML = "ayxthefish - Firefox";
    document.getElementById("body-image-w2").style.visibility="hidden";
    document.getElementById("body-image").style.visibility="visible";
}

function changeTo2()
{
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
