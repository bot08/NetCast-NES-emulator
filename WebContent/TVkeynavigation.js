/*
File keynavigation.js
@Description - tic tac toe game logic and implementaion

*/

/*
Function ready()
@param
@Description - This function is called when DOm is ready.This has the implimentation of keydown
Returns  -void
 */
// $('document').ready(function () {
// 	/*
// 	Function keydown()
// 	@param -event
// 	@Description - This has the implimentation of keydown like lfet right up and donw
// 	Returns  -void
// 	 */
// 	$(document).keydown(function (event) {

// 		var key = event.keycode || event.which;
// 		switch (key) {
// 		case VK_BACK:
// 			backButtonSelect();
// 			break;
// 		case VK_RIGHT:
// 			if (gameStarted) {
// 				squareMove("right");
// 			} else if (gameEnded) {
// 				if (backHighlight == 2) {
// 					highlightPrevious();
// 				} else if (backHighlight == 1) {
// 					highlightBack();
// 				}
// 			} else {
// 				if (allMenuObject[cntIndex + 1] != undefined && backHighlight != 2) {
// 					cntIndex++;
// 					resetHighlight();
// 					$(allMenuObject[cntIndex]).toggleClass("playerImgHover");
// 				}
// 			}
// 			break;

// 		case VK_LEFT:
// 			if (gameStarted) {
// 				squareMove("left");
// 			} else if (gameEnded) {
// 				if (backHighlight == 2) {
// 					highlightPrevious();
// 				} else if (backHighlight == 1) {
// 					highlightBack();
// 				}

// 			} else {
// 				if (allMenuObject[cntIndex - 1] != undefined && backHighlight != 2) {
// 					cntIndex--;
// 					resetHighlight();
// 					$(allMenuObject[cntIndex]).toggleClass("playerImgHover");
// 				}
// 			}
// 			break;
// 		case VK_UP:

// 			if (backHighlight == 1) {
// 				highlightBack();
// 			} else {
// 				squareMove("up");
// 			}
// 			break;
// 		case VK_DOWN:
// 			if (backHighlight == 2) {
// 				highlightPrevious();
// 			} else {
// 				squareMove("down");
// 			}

// 			break;
// 		case VK_ENTER:
// 			if (backHighlight == 2) {
// 				backButtonSelect();
// 			} else if (gameStarted) {
// 				selectSquare();
// 			} else if (gameEnded) {
// 				restart();
// 			} else {
// 				playerClicked(allMenuObject[cntIndex]);
// 			}
// 			break;
// 		}

// 	});

// });

JSNES.Keyboard = function() {
    var i;
    
    this.keys = {
        KEY_A: 0,
        KEY_B: 1,
        KEY_SELECT: 2,
        KEY_START: 3,
        KEY_UP: 4,
        KEY_DOWN: 5,
        KEY_LEFT: 6,
        KEY_RIGHT: 7
    };

    this.state1 = new Array(8);
    for (i = 0; i < this.state1.length; i++) {
        this.state1[i] = 0x40;
    }
    this.state2 = new Array(8);
    for (i = 0; i < this.state2.length; i++) {
        this.state2[i] = 0x40;
    }
};

JSNES.Keyboard.prototype = {
    setKey: function(key, value) {
        switch (key) {
            case VK_ENTER: this.state1[this.keys.KEY_A] = value; break;      // X
            case VK_1: this.state1[this.keys.KEY_B] = value; break;      // Y (Central European keyboard)
            case VK_2: this.state1[this.keys.KEY_B] = value; break;      // Z
            case VK_3: this.state1[this.keys.KEY_SELECT] = value; break; // Right Ctrl
            case VK_0: this.state1[this.keys.KEY_START] = value; break;  // Enter
            case VK_PAGE_UP: this.state1[this.keys.KEY_UP] = value; break;     // Up
            case VK_PAGE_DOWN: this.state1[this.keys.KEY_DOWN] = value; break;   // Down
            case VK_LEFT: this.state1[this.keys.KEY_LEFT] = value; break;   // Left
            case VK_UP: this.state1[this.keys.KEY_RIGHT] = value; break;  // Right

            case 103: this.state2[this.keys.KEY_A] = value; break;     // Num-7
            case 105: this.state2[this.keys.KEY_B] = value; break;     // Num-9
            case 99: this.state2[this.keys.KEY_SELECT] = value; break; // Num-3
            case 97: this.state2[this.keys.KEY_START] = value; break;  // Num-1
            case 104: this.state2[this.keys.KEY_UP] = value; break;    // Num-8
            case 98: this.state2[this.keys.KEY_DOWN] = value; break;   // Num-2
            case 100: this.state2[this.keys.KEY_LEFT] = value; break;  // Num-4
            case 102: this.state2[this.keys.KEY_RIGHT] = value; break; // Num-6
            default: return true;
        }
        return false; // preventDefault
    },

    keyDown: function(evt) {
        if (!this.setKey(evt.keyCode, 0x41) && evt.preventDefault) {
            evt.preventDefault();
        }
    },
    
    keyUp: function(evt) {
        if (!this.setKey(evt.keyCode, 0x40) && evt.preventDefault) {
            evt.preventDefault();
        }
    },
    
    keyPress: function(evt) {
        evt.preventDefault();
    }
};