const alarm = document.querySelector('.alarm');
const timer = document.querySelector('.timer');
const stopwatch = document.querySelector('.stopwatch');
const exacttime = document.querySelector('.exact-time');
const alarmsection = document.querySelector('.alarm-section');
const timersection = document.querySelector('.timer-section');
const stopwatchsection = document.querySelector('.stopwatch-section');
const exacttimesection = document.querySelector('.exact-time-section');
const instructionsection1 = document.querySelector('.instruction-block1');
const instructionsection2 = document.querySelector('.instruction-block2');
const instructionsection3 = document.querySelector('.instruction-block3');
const alarmdate = document.querySelector('.alarm-date');
const hidedate = document.querySelector('.hidedate');
const showdate = document.querySelector('.showdate');
const darktheme = document.querySelector('body');
const lighttheme = document.querySelector('body');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const btn = document.querySelector('.btn');
const mybox = document.querySelector('.mybox');
document.querySelector('.btn').addEventListener('click', function(){
	mybox.style.display = 'block';
})


document.querySelector('.dark').addEventListener('click', function(){
    darktheme.style.background = 'gray';
    light.style.display = 'inline';
    dark.style.display = 'none';

})
document.querySelector('.light').addEventListener('click', function(){
    lighttheme.style.background = 'white';
    dark.style.display = 'inline';
    light.style.display = 'none';
   

})

document.querySelector('.alarm-section').addEventListener('click', function(){
    alarm.style.display = 'block';
    timer.style.display = 'none';
    stopwatch.style.display = 'none';
    exacttime.style.display = 'none';

    alarmsection.classList.add('active');
    timersection.classList.remove('active');
    stopwatchsection.classList.remove('active');
    exacttimesection.classList.remove('active');

    instructionsection1.style.display = 'block';
    instructionsection2.style.display = 'none';
    instructionsection3.style.display = 'none';

    card1.style.display = 'none';
    card2.style.display = 'none';
    card3.style.display = 'none';
    card4.style.display = 'none';

})

document.querySelector('.hidedate').addEventListener('click', function(){
  hidedate.style.display = 'none';
  alarmdate.classList.add('hidethedate');
  showdate.style.display = 'inline';
})

document.querySelector('.showdate').addEventListener('click', function(){
  hidedate.style.display = 'inline';
  alarmdate.classList.remove('hidethedate');
  showdate.style.display = 'none';
})



document.querySelector('.timer-section').addEventListener('click', function(){
    alarm.style.display = 'none';
    timer.style.display = 'block';
    stopwatch.style.display = 'none';
    exacttime.style.display = 'none';

    alarmsection.classList.remove('active');
    timersection.classList.add('active');
    stopwatchsection.classList.remove('active');
    exacttimesection.classList.remove('active');

    instructionsection1.style.display = 'none';
    instructionsection2.style.display = 'block';
    instructionsection3.style.display = 'none';

    card1.style.display = 'none';
    card2.style.display = 'none';
    card3.style.display = 'none';
    card4.style.display = 'none';
})

document.querySelector('.stopwatch-section').addEventListener('click', function(){
    alarm.style.display = 'none';
    timer.style.display = 'none';
    stopwatch.style.display = 'block';
    exacttime.style.display = 'none';

    alarmsection.classList.remove('active');
    timersection.classList.remove('active');
    stopwatchsection.classList.add('active');
    exacttimesection.classList.remove('active');

    instructionsection1.style.display = 'none';
    instructionsection2.style.display = 'none';
    instructionsection3.style.display = 'block';

    card1.style.display = 'none';
    card2.style.display = 'none';
    card3.style.display = 'none';
    card4.style.display = 'none';
})

document.querySelector('.exact-time-section').addEventListener('click', function(){
    alarm.style.display = 'none';
    timer.style.display = 'none';
    stopwatch.style.display = 'none';
    exacttime.style.display = 'block';

    alarmsection.classList.remove('active');
    timersection.classList.remove('active');
    stopwatchsection.classList.remove('active');
    exacttimesection.classList.add('active');

    instructionsection1.style.display = 'none';
    instructionsection2.style.display = 'none';
    instructionsection3.style.display = 'none';

    card1.style.display = 'block';
    card2.style.display = 'block';
    card3.style.display = 'block';
    card4.style.display = 'block';
})

window.addEventListener("load", buildIt);

function buildIt() {
    startTime();
    hrsMenu();
    minsMenu();
    secsMenu();
    soundMenu();
    buildAudio();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var time = checkZero(h) + ":" + checkZero(m) + ":" + checkZero(s);
    document.getElementById("time").innerHTML =
        time;
    var t = setTimeout(startTime, 500);
}

function checkZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

function hrsMenu() {
    var select = document.getElementById("hours");
    var hours = 23;

    for (i = 0; i <= hours; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function minsMenu() {
    var select = document.getElementById("minutes");
    var mins = 59;

    for (i = 0; i <= mins; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function secsMenu() {
    var select = document.getElementById("seconds");
    var secs = 59;

    for (i = 0; i <= secs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function soundMenu() {
    var select = document.getElementById("sound");

    var array = [
        {
            name: "Ring1",
            url: "https://zvukipro.com/uploads/files/2018-11/1542124200_alarm-clock-beep-1_zjgin-vd.mp3"
        },
        {
            name: "Ring2",
            url: "https://zvukipro.com/uploads/files/2020-01/1580160107_05434.mp3"
        },
        {
            name: "Jingle bells",
            url: "/uploads/public_files/2022-12/1670061449_jingle_bells_instrumental_ringon_site.mp3"
        },
        {
            name: "Shelkunchik",
            url: "/uploads/public_files/2022-12/schelkunchik_tanec_fei_drazhe_ringon_site.mp3"
        },
        {
            name: "Let it snow",
            url: "/uploads/public_files/2022-12/1670062908_da_budet_sneg_ringon_site.mp3"
        },
        {
            name: "Вставай",
            url: "http://file.mobilmusic.ru/11/e7/bd/388658.mp3"
        },
        {
            name: "Rings",
            url: "https://www.freespecialeffects.co.uk/soundfx/telephone/phone_ring_2.wav"
        }
    ];

    for (var i = 0; i < array.length; i++) {

        var option = document.createElement("option");
        option.value = array[i].url;
        option.text = array[i].name;
        select.appendChild(option);
    }
}

function buildAudio() {
    var myDiv = document.getElementById("myDiv");
    var myAudio = document.createElement("audio");

    myAudio.src = "https://www.freespecialeffects.co.uk/soundfx/various/forest.wav";
    myAudio.id = "myAudio";
    myDiv.appendChild(myAudio);
}

document.getElementById("setButton").addEventListener("click", setAlarm);
document.getElementById("clearButton").addEventListener("click", clearAlarm);
document.getElementById("sound").addEventListener("change", getSrc);

function getSrc() {
    document.getElementById("myAudio").src = document.getElementById("sound").value;
}


function setAlarm() {

    var hour = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("seconds");

    var selectedHour = hour.options[hour.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);

    document.getElementById('hours').disabled = true;
    document.getElementById('minutes').disabled = true;
    document.getElementById('seconds').disabled = true;
    document.getElementById('audio').disabled = true;


    setInterval(function playAlarmSound() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var time = addZero(h) + ":" + addZero(m) + ":" + addZero(s);

        if (time == alarmTime) {
            myAudio.play();
            myAudio.loop = true;
        }
    }, 1000);
}

function addZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function clearAlarm() {
    document.getElementById("hours").disabled = false;
    document.getElementById("minutes").disabled = false;
    document.getElementById("seconds").disabled = false;
    document.getElementById("sounds").disabled = false;
    document.getElementById("myAudio").disabled = false;
    myAudio.pause();
}