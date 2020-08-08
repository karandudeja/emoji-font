var userTxt = document.getElementById("textIn");
var emojifiedTxt = document.getElementById("emojifiedMsg");
var credits = document.getElementById("credits");
var rules = document.getElementById("disclaimer");
var headingText = document.getElementById("heading");
var emojiString = "";
var newEmojiString = "";

let strobeCount = 0;
let strobeReps = 8;
let strobeOneCycleDuration = 0.16; // write as per normal human seconds where 1 sec is 1.0
document.body.onload = strobeEffect(strobeReps, strobeOneCycleDuration);

//function calls the strobe effect, every time on page load
function strobeEffect(sr, sd){
    rules.style.visibility = "visible";
    let runStrobe = setInterval(changeBgColor, sd*1000);

    function changeBgColor(){
        rules.style.backgroundColor = rules.style.backgroundColor == "black" ? "white" : "black";
        rules.style.color = rules.style.backgroundColor == "white" ? "black" : "white";
        strobeCount++;
        if(strobeCount > sr){
            clearInterval(runStrobe);
            rules.style.backgroundColor = "#f6f6f6";
            rules.style.color =  "#999";
        }
    }   
}

//take input box's value, using 'input' in the eventListener and create the mapped emoji text-string
var emoS = "";
userTxt.addEventListener('input', function(e){
    emoS = "";
    let userGave = "";
    if(e.target.value === "." || e.target.value === "," || e.target.value === "?" || e.target.value === "!" || e.target.value === "@" || e.target.value === "#" || e.target.value === "&" || e.target.value === "*" || e.target.value === "$"){
        userGave = e.target.value;
    }
    else{
        userGave = e.target.value.toLowerCase();
    }
    userTxt.value = userGave;
    for(let i =0; i < userGave.length; i++){
        switch (userGave[i]) {
            case " ":
              emoS += "&nbsp;&nbsp;&nbsp;&nbsp;";
              break;
            //////////// lowercase characters //////
            case "a":
              emoS += "🔓";
              //console.log("entered a");
              break;
            case "b":
              emoS += "💪";
              //console.log("entered b");
              break;
            case "c":
              emoS += "🌜";
              //console.log("entered c");
              break;
            case "d":
              emoS += "🍶";
              //console.log("entered d");
              break;
            case "e":
              emoS += "🍥";
              //console.log("entered e");
              break;
            case "f":
              emoS += "🎏";
              //console.log("entered f");
              break;
            case "g":
              emoS += "🐬";
              //console.log("entered g");
              break;
            case "h":
              emoS += "🐎";
              //console.log("entered h");
              break;
            case "i":
              emoS += "📍";
              //console.log("entered i");
              break;
            case "j":
              emoS += "🎷";
              //console.log("entered j");
              break;
            case "k":
              emoS += "🎋";
              //console.log("entered k");
              break;
            case "l":
              emoS += "🕯️";
              //console.log("entered l");
              break;
            case "m":
              emoS += "🎹";
              //console.log("entered m");
              break;
            case "n":
              emoS += "⛩️";
              //console.log("entered n");
              break;
            case "o":
              emoS += "🍩";
              //console.log("entered o");
              break;
            case "p":
              emoS += "🚩";
              //console.log("entered p");
              break;
            case "q":
              emoS += "🍭";
              //console.log("entered q");
              break;
            case "r":
              emoS += "🌱";
              //console.log("entered r");
              break;
            case "s":
              emoS += "⚡";
              //console.log("entered s");
              break;
            case "t":
              emoS += "☂️";
              //console.log("entered t");
              break;
            case "u":
              emoS += "👅";
              //console.log("entered u");
              break;
            case "v":
              emoS += "💎";
              //console.log("entered v");
              break;
            case "w":
              emoS += "〰";
              //console.log("entered w");
              break;
            case "x":
              emoS += "✂️";
              //console.log("entered x");
              break;
            case "y":
              emoS += "🍸";
              //console.log("entered y");
              break;
            case "z":
              emoS += "💤";
              //console.log("entered z");
              break;
            //////////// numbers ///////////////
            case "0":
              emoS += "⚫";
              //console.log("entered z");
              break;
            case "1":
              emoS += "🕐";
                //console.log("entered z");
              break;
            case "2":
                emoS += "🕑";
                //console.log("entered z");
                break;
            case "3":
                emoS += "🕒";
                //console.log("entered z");
                break;
            case "4":
                emoS += "🕓";
                //console.log("entered z");
                break;
            case "5":
                emoS += "🕔";
                //console.log("entered z");
                break;
            case "6":
                emoS += "🕕";
                //console.log("entered z");
                break;
            case "7":
                emoS += "🕖";
                //console.log("entered z");
                break;
            case "8":
                emoS += "🕗";
                //console.log("entered z");
                break;
            case "9":
                emoS += "🕘";
                //console.log("entered z");
                break;
            ////////// special characters ////////////
            case "?":
                emoS += "❓";
                break;
            case ".":
                emoS += "🚷";
                break;
            case "!":
                emoS += "🕴️";
                break;
            case "*":
                emoS += "❄️";
                break;
            case "#":
                emoS += "#️⃣";
                break;
            case ",":
                emoS += "🌪️ &nbsp;"; 
                break;
            case "@":
                emoS += "🤜"; 
                break;
            case "&":
                emoS += "🐚"; 
                break;
            case "$":
                emoS += "💰"; 
                break;
          }
    }
    emojifiedTxt.innerHTML = emoS;
}, false);

//remove the bottom credits on mobile devices, when input is in focus
userTxt.addEventListener('focus', () => {
    changeHeadingText();
    if (window.matchMedia("(max-width: 400px)").matches) {
        credits.style.visibility = 'hidden';
    }
    else {
        credits.style.visibility = 'visible';
    }
});

//show the bottom credits on mobile devices, when input is out of focus(blurred as per CSS terms)
userTxt.addEventListener('blur', () => {
    credits.style.visibility = 'visible';
});

//change the "o" in the "emoji font" title every time the user clicks the input text box
function changeHeadingText(){
    let oArray = ["📀","💿","🎡","🔅","😮","😎","🙃","😵","🌚","🌞","🌎","🌕","🍩","🥚","🏀","🎱","⚽","⚙️","🎈","⭕","🚫","🅾️","🚭","🌀","0️⃣","⏺️","🔄","🔘","☢️","☯️","☮️","☸️","🔮","⭐","🐡","🐤","🐧","🐼","🙆‍♂️","👁️","💍","🌼","💥","🍊"];
    let r1 = oArray[Math.floor(Math.random()*oArray.length)];
    let r2 = oArray[Math.floor(Math.random()*oArray.length)];
    let newHeading = "em"+r1+"ji &nbsp; f"+r2+"nt";
    headingText.innerHTML = newHeading;
}

//lowercase characters, only some in use
/*a🐊🔓 b💪🗽 c🗜️ d🍶 e🍥 f🎋🌾 g🐬🦈 h🐪🐢 i📍 j🏒 k🎿🎬  l🕯️ m⚖️🎹 n⛩️🎵 o📀 p🌵🚏🚩 q📭 r🥀🌈🌱 s💲♨️⚡ t🍌 u⛎👅 v💎🔻w🔱 x✂️🛠️⚒️⚔️ 󠁧󠁢󠁳󠁣󠁴 y🏆🤸‍♂️ z💤*/

//uppercase characters NOT in use
/*A🗼⛰️ B🍤🅱️ C🌜🌊 D🍤🌛 E🏯 F🎋🎏 G🌀 H I🚹 J🎷K🎿⏮️ L M〽️⚖️ N📉🎢<br/><br/>O🍩 P Q🍭🍳R S T U V W〰️ X✂️🛠️⚒️⚔️ Y Z💤*/

//numbers 0123456789 ⚫🕐🕑🕒🕓🕔🕕🕖🕗🕘
