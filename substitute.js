/*
 * This file is responsible for performing the logic of replacing
 * all occurrences of each mapped word with its emoji counterpart.
 */

// emojiMap.js defines the 'sortedEmojiMap' variable.
// Referenced here to reduce confusion.
const emojiMap = sortedEmojiMap;

/*
 * For efficiency, create a word --> search RegEx Map too.
 */
let regexs = new Map();
for (let word of emojiMap.keys()) {
  // We want a global, case-insensitive replacement.
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  regexs.set(word, new RegExp(word, 'gi'));
}

/**
 * Substitutes emojis into text nodes.
 * If the node contains more than just text (ex: it has child nodes),
 * call replaceText() on each of its children.
 *
 * @param  {Node} node    - The target DOM Node.
 * @return {void}         - Note: the emoji substitution is done inline.
 */
function replaceText (node) {
  // Setting textContent on a node removes all of its children and replaces
  // them with a single text node. Since we don't want to alter the DOM aside
  // from substituting text, we only substitute on single text nodes.
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
  if (node.nodeType === Node.TEXT_NODE) {
    // This node only contains text.
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType.

    // Skip textarea nodes due to the potential for accidental submission
    // of substituted emoji where none was intended.
    if (node.parentNode && 0 &&
        node.parentNode.nodeName === 'TEXTAREA') {
      return;
    }

    // Because DOM manipulation is slow, we don't want to keep setting
    // textContent after every replacement. Instead, manipulate a copy of
    // this string outside of the DOM and then perform the manipulation
    // once, at the end.
    let content = node.textContent;

    // Replace every occurrence of 'word' in 'content' with its emoji.
    // Use the emojiMap for replacements.
    /*for (let [word, emoji] of emojiMap) {
      // Grab the search regex for this word.
      const regex = regexs.get(word);

      // Actually do the replacement / substitution.
      // Note: if 'word' does not appear in 'content', nothing happens.
      content = content.replace(regex, emoji);
    }*/

    // Now that all the replacements are done, perform the DOM manipulation.
    node.textContent = content;
  }
  else {
    // This node contains more than just text, call replaceText() on each
    // of its children.
    for (let i = 0; i < node.childNodes.length; i++) {
      replaceText(node.childNodes[i]);
    }
  }
}

// Start the recursion from the body tag.
replaceText(document.body);
console.log("ASDADAS")
$("<style>* { font-family: 'Comic Sans MS'; }</style>").appendTo("head");
$('<style type="text/css">BODY {overflow-x: hidden;}</style>').appendTo("head");
$("body").css('background', '-moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet)');
var trailLength = 8 // The length of trail (8 by default; put more for longer "tail")
console.log("Trying")
var path = "http://www.javascriptkit.com/script/script2/cursor.gif"; // URL of your image
a = chrome.extension.getURL("cursor.gif");
console.log(path);
console.log(a);
var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
var i,d = 0

function initTrail() { // prepares the script
	images = new Array() // prepare the image array
	for (i = 0; i < parseInt(trailLength); i++) {
		images[i] = new Image()
		images[i].src = a;
	}
	storage = new Array() // prepare the storage for the coordinates
	for (i = 0; i < images.length*3; i++) {
		storage[i] = 0
	}
	for (i = 0; i < images.length; i++) { // make divs for IE and layers for Navigator
		document.write('<div id="obj' + i + '" style="position: absolute; z-Index: 100; height: 0; width: 0"><img src="' + images[i].src + '"></div>')
	}
	//trail()
}
function trail() { // trailing function
	for (i = 0; i < images.length; i++) { // for every div/layer
		document.getElementById("obj" + i).style.top = storage[d]+'px' // the Y-coordinate
		document.getElementById("obj" + i).style.left = + storage[d+1]+'px' // the X-coordinate
		d = d+2
	}
	for (i = storage.length; i >= 2; i--) { // save the coordinate for the div/layer that's behind
		storage[i] = storage[i-2]
	}
	d = 0 // reset for future use
	var timer = setTimeout("trail()",10) // call recursively
}
function processEvent(e) { // catches and processes the mousemove event
	if (window.event) { // for IE
		storage[0] = window.event.y+standardbody.scrollTop+10
		storage[1] = window.event.x+standardbody.scrollLeft+10
	} else {
		storage[0] = e.pageY+12
		storage[1] = e.pageX+12
	}
}

	initTrail()
	document.onmousemove = processEvent // start capturing
// $('.btn-shit').css({
// height: 55px;
// border: 2px solid #25567a;
// color: #fff;
// text-transform: uppercase;
// font-size: 25px;
// font-weight: 500;
// border-radius: 30px;
// letter-spacing: 1px;
// padding: 10px 40px;
// box-shadow: 0 22px 40px rgba(0, 0, 0, 0.95), inset 0 2px 0px rgba(255, 255, 255, 0.5);
// overflow: hidden;
// background: #15487f;
// background: -moz-linear-gradient(left, #15487f 0%, #479fd6 100%);
// background: -webkit-gradient(left top, right top, color-stop(0%, #15487f), color-stop(100%, #479fd6));
// background: -webkit-linear-gradient(left, #15487f 0%, #479fd6 100%);
// background: -o-linear-gradient(left, #15487f 0%, #479fd6 100%);
// background: -ms-linear-gradient(left, #15487f 0%, #479fd6 100%);
// background: linear-gradient(to right, #15487f 0%, #479fd6 100%);
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#15487f', endColorstr='#479fd6', GradientType=1 );
// line-height: 1.33;
// });
// $('.btn-shit .glare'),css({
// width: 150%;
// margin-left: -22%;
// margin-top: -14px;
// z-index: 2;
// height: 28px;
// border-radius: 50%;
// background: rgba(0,0,0,1);
// background: -moz-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.49) 51%, rgba(0,0,0,0) 100%);
// background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,1)), color-stop(51%, rgba(0,0,0,0.49)), color-stop(100%, rgba(0,0,0,0)));
// background: -webkit-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.49) 51%, rgba(0,0,0,0) 100%);
// background: -o-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.49) 51%, rgba(0,0,0,0) 100%);
// background: -ms-linear-gradient(top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.49) 51%, rgba(0,0,0,0) 100%);
// background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.49) 51%, rgba(0,0,0,0) 100%);
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 );
// });
// $("button").css('btn-shit','glare');
console.log("Success!")
// Now monitor the DOM for additions and substitute emoji into new nodes.
// @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      // This DOM change was new nodes being added. Run our substitution
      // algorithm on each newly added node.
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const newNode = mutation.addedNodes[i];
        replaceText(newNode);
      }
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
