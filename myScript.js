var userTxt = document.getElementById("textIn");
var emojifiedTxt = document.getElementById("emojifiedMsg");
var credits = document.getElementById("credits");
var rules = document.getElementById("disclaimer");
var headingText = document.getElementById("heading");
var emojiString = "";
var newEmojiString = "";
var removeNumCharsFromBack = 16;

let strobeCount = 0;
let strobeReps = 8;
let strobeOneCycleDuration = 0.16; // write as per normal human seconds where 1 sec is 1
document.body.onload = strobeEffect(strobeReps, strobeOneCycleDuration);

function strobeEffect(sr, sd){
    rules.style.visibility = "visible";
    let runStrobe = setInterval(changeBgColor, sd*1000);

    function changeBgColor(){
        rules.style.backgroundColor = rules.style.backgroundColor == "black" ? "white" : "black";
        rules.style.color = rules.style.backgroundColor == "white" ? "black" : "white";
        strobeCount++;
        //console.log(`strobeCount is : ${strobeCount}`);
        if(strobeCount > sr){
            clearInterval(runStrobe);
            rules.style.backgroundColor = "#f6f6f6";
            rules.style.color =  "#888";
        }
    }
    
}



function bgWhite(){
    console.log("make BG white");
    rules.style.backgroundColor = "white";
    rules.style.color = "black";
}


//new attempt with input box's value, using 'input' in the eventListener
var emoS = "";
userTxt.addEventListener('input', function(e){
    emoS = "";
    let userGave = e.target.value.toLowerCase();
    userTxt.value = userGave;
    for(let i =0; i < userGave.length; i++){
        switch (userGave[i]) {
            case " ":
              emoS += "&nbsp;&nbsp;&nbsp;";
              break;
            //////////// lowercase //////
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
              emoS += "📀";
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
            //////////// numbers //////
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
            
          }
    }
    emojifiedTxt.innerHTML = emoS;
}, false);

//uppercase characters NOT in use
/*A🗼⛰️ B🍤🅱️ C🌜🌊 D🍤🌛 E🏯 F🎋🎏 G🌀 H I🚹 J🎷K🎿⏮️ L M〽️⚖️ N📉🎢<br/><br/>O🍩 P Q🍭🍳R S T U V W〰️ X✂️🛠️⚒️⚔️ Y Z💤*/

//numbers 0123456789 ⚫🕐🕑🕒🕓🕔🕕🕖🕗🕘

userTxt.addEventListener('focus', () => {
    changeHeadingText();
    if (window.matchMedia("(max-width: 400px)").matches) {
        credits.style.visibility = 'hidden';
    }
    else {
        credits.style.visibility = 'visible';
    }
});

userTxt.addEventListener('blur', () => {
    credits.style.visibility = 'visible';
});


function changeHeadingText(){
    let oArray = ["📀","💿","🎡","🔅","😮","😎","🙃","😵","🌚","🌞","🌎","🌕","🍩","🥚","🏀","🎱","⚽","⚙️","🎈","⭕","🚫","🅾️","🚭","🌀","0️⃣","⏺️","🔄","🔘","☢️","☯️","☮️","☸️","🔮","⭐","🐡","🐤","🐧","🐼","🙆‍♂️","👁️","💍","🌼","💥","🍊"];
    let r1 = oArray[Math.floor(Math.random()*oArray.length)];
    let r2 = oArray[Math.floor(Math.random()*oArray.length)];
    let newHeading = "em"+r1+"ji &nbsp; f"+r2+"nt";
    headingText.innerHTML = newHeading;
}



function checkString(str) {
  console.log("checkString called...");
  if (str.charAt(str.length - 1) === "�") {
    console.log("have to remove � !!!");
    //newEmojiString = emojiString.slice(0, -1);
    //emojiString = newEmojiString;
  }
}

//as of before 4 Aug 2020, using keyup and keydown
/*userTxt.addEventListener("keydown", function (event) {
  var keyEntered = event.code;
  console.log(keyEntered);
  //console.log(userTxt.value);
  //makeEmojiString(userTxt.value);
  if (userTxt.value.length < 1) {
    emojiString = "";
  }

  switch (keyEntered) {
    case "Space":
      emojiString += "&nbsp;&nbsp;&nbsp;";
      break;
    case "Backspace":
      newEmojiString = emojiString.slice(0, -2);
      console.log(`new Emoji String is: ${newEmojiString}`);
      console.log(
        "last character newEmojiString is : " +
          newEmojiString.charAt(newEmojiString.length - 1)
      );
      console.log(
        "type of last char is : " +
          typeof newEmojiString.charAt(newEmojiString.length - 1)
      );
      //handling the � as last character
      if (newEmojiString.charAt(newEmojiString.length - 1) === "�") {
        console.log("have to remove � !!!");
        newEmojiString = emojiString.slice(0, -1);
        emojiString = newEmojiString;
      }
      //handling the extra space removals
      else if (newEmojiString.charAt(newEmojiString.length - 1) === "s") {
        newEmojiString = emojiString.slice(
          0,
          newEmojiString.length - removeNumCharsFromBack
        );
        emojiString = newEmojiString;
        console.log("corrected emojiString is : " + emojiString);
      } 
      else if (newEmojiString.charAt(newEmojiString.length - 1) === "p") {
        newEmojiString = emojiString.slice(
          0,
          newEmojiString.length - removeNumCharsFromBack - 1
        );
        emojiString = newEmojiString;
        console.log("corrected emojiString is : " + emojiString);
      } else {
        emojiString = newEmojiString;
        checkString(emojiString);
      }
      newEmojiString = "";
      console.log(`emojiString after BACKSPACE ${emojiString}`);
      break;
    case "KeyA":
      emojiString += "🔓";
      console.log("entered a");
      break;
    case "KeyB":
      emojiString += "💪";
      console.log("entered b");
      break;
    case "KeyC":
      emojiString += "🗜️";
      console.log("entered c");
      break;
    case "KeyD":
      emojiString += "🍶";
      console.log("entered d");
      break;
    case "KeyE":
      emojiString += "🍥";
      console.log("entered e");
      break;
    case "KeyF":
      emojiString += "🌾";
      console.log("entered f");
      break;
    case "KeyG":
      emojiString += "🐬";
      console.log("entered g");
      break;
    case "KeyH":
      emojiString += "🐢";
      console.log("entered h");
      break;
    case "KeyI":
      emojiString += "📍";
      console.log("entered i");
      break;
    case "KeyJ":
      emojiString += "🏒";
      console.log("entered j");
      break;
    case "KeyK":
      emojiString += "🎿";
      console.log("entered k");
      break;
    case "KeyL":
      emojiString += "🕯️";
      console.log("entered l");
      break;
    case "KeyM":
      emojiString += "🎹";
      console.log("entered m");
      break;
    case "KeyN":
      emojiString += "⛩️";
      console.log("entered n");
      break;
    case "KeyO":
      emojiString += "📀";
      console.log("entered o");
      break;
    case "KeyP":
      emojiString += "🚩";
      console.log("entered p");
      break;
    case "KeyQ":
      emojiString += "🍭";
      console.log("entered q");
      break;
    case "KeyR":
      emojiString += "🥀";
      console.log("entered r");
      break;
    case "KeyS":
      emojiString += "⚡";
      console.log("entered s");
      break;
    case "KeyT":
      emojiString += "🍌";
      console.log("entered t");
      break;
    case "KeyU":
      emojiString += "👅";
      console.log("entered u");
      break;
    case "KeyV":
      emojiString += "💎";
      console.log("entered v");
      break;
    case "KeyW":
      emojiString += "🔱";
      console.log("entered w");
      break;
    case "KeyX":
      emojiString += "✂️";
      console.log("entered x");
      break;
    case "KeyY":
      emojiString += "🏆";
      console.log("entered y");
      break;
    case "KeyZ":
      emojiString += "💤";
      console.log("entered z");
      break;
  }
  console.log(emojiString);
  emojifiedTxt.innerHTML = emojiString;
  //console.log(emojifiedTxt);
});
*/

//lowercase characters
/*a🐊🔓 b💪🗽 c🗜️ d🍶 e🍥 f🎋🌾 g🐬🦈 h🐪🐢 i📍 j🏒 k🎿🎬  l🕯️ m⚖️🎹 n⛩️🎵 o📀 p🌵🚏🚩 q📭 r🥀🌈🌱 s💲♨️⚡ t🍌 u⛎👅 v💎🔻w🔱 x✂️🛠️⚒️⚔️ 󠁧󠁢󠁳󠁣󠁴 y🏆🤸‍♂️ z💤*/


