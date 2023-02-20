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
