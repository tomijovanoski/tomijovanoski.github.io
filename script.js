var sprite = document.getElementById('sprite');
var contentWrapper = document.getElementsByClassName('content-wrapper')[0];
var contentSections = document.getElementsByClassName('content');
var spriteWidth = sprite.clientWidth;
var windowWidth = document.getElementsByTagName('body')[0].clientWidth;
var windowHeight = document.getElementsByTagName('body')[0].clientHeight;
var browserWidth = document.getElementsByTagName('html')[0].clientWidth
var spriteClass = sprite.classList[0].split('');
var spriteNo = spriteClass[spriteClass.length - 2] + spriteClass[spriteClass.length - 1]
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";

var numberFrames = 42

if (spriteWidth > windowWidth / 2) {
  sprite.style.transform = `scale(${windowWidth / 2 / spriteWidth}) translateY(-100%)`
  sprite.style.transformOrigin = 'bottom right'
  sprite.style.right = `${(browserWidth - windowWidth) / 2}px`
}

//#region BASED ON DELTA AND MOUSE WHEEL

// if (document.attachEvent)
//   window.attachEvent("on" + mousewheelevt, function (e) { scroller(e) });
// else if (document.addEventListener)
//   window.addEventListener(mousewheelevt, function (e) { scroller(e) }, false);

// function scroller(evt) {
//   //Guess the delta.
//   var delta = 0;
//   if (!evt) evt = window.event;
//   if (evt.wheelDelta) {
//     delta = evt.wheelDelta / 120;
//   } else if (evt.detail) {
//     delta = -evt.detail / 3;
//   }
//   if (evt.preventDefault) evt.preventDefault();
//   evt.returnValue = false;

//   //Do the magic.
//   if (delta < 0 && spriteNo < 20 && spriteNo > 0) {
//     spriteNo++
//     sprite.className = `s000${twoDigitFormat(spriteNo)}`
//     // console.log(spriteNo)
//   }
//   if (delta > 0 && spriteNo <= 20 && spriteNo > 1) {
//     spriteNo--
//     sprite.className = `s000${twoDigitFormat(spriteNo)}`
//     console.log(spriteNo)
//   }
// }

//#endregion BASED ON DELTA AND MOUSE WHEEL

//#region BASED ON SCROLL POSITION
const twoDigitFormat = (n) => {
  return n > 9 ? "" + n : "0" + n;
}
if (document.attachEvent) {
  window.attachEvent("on" + scroll, function (e) { scroller(e) });
} else if (document.addEventListener) {
  window.addEventListener('scroll', function (e) { scroller(e) }, false)
}

function scroller(evt) {
  let k = windowHeight / (numberFrames * (contentSections.length - 1))
  let testFrame = Math.floor(window.pageYOffset / k)

  console.log(testFrame)

  if (testFrame > 0 && testFrame < numberFrames + 1) sprite.className = `s000${twoDigitFormat(testFrame)}`
}
//#endregion BASED ON SCROLL POSITION