var checkTurn = 0;
var round = 0;
const slotValue = [];
theEnd = false;




function changeContent(col, row, slot){

    if (checkTurn == 0 && slotValue[slot - 1] != "X" && slotValue[slot - 1] != "O" && theEnd == false){
        var audio = new Audio("clickSound.wav");
        audio.play();

        content = "X";
        
        slotValue[slot - 1] = "X";

        var showPlayer = document.getElementById('playBoard').rows[parseInt(row,10)].cells;
            showPlayer[parseInt(col,10)].classList.add('redCell');

        checkTurn = 1
        round++;
        
    } else if (checkTurn == 1 && slotValue[slot - 1] != "X" && slotValue[slot - 1] != "O" && theEnd == false){
        var audio = new Audio("clickSound.wav");
        audio.play();

        content = "O"
        slotValue[slot - 1] = "O"

        var showPlayer = document.getElementById('playBoard').rows[parseInt(row,10)].cells;
            showPlayer[parseInt(col,10)].classList.add('greenCell');

        checkTurn = 0
        round++;
    } 
    
    if (round == 9  && theEnd == false){
        var audio = new Audio("drawSound.wav");
            audio.play();
            
        var win = document.getElementById('Result').rows[parseInt(0,10)].cells;
        wincContent = "DRAW!"
        win[parseInt(0,10)].innerHTML = wincContent;
        theEnd = true;
    }

    if ((slotValue[1 - 1] == "X" && slotValue[2 - 1] == "X" && slotValue[3 - 1] == "X") || 
        (slotValue[4 - 1] == "X" && slotValue[5 - 1] == "X" && slotValue[6 - 1] == "X") || 
        (slotValue[7 - 1] == "X" && slotValue[8 - 1] == "X" && slotValue[9 - 1] == "X") ||
        (slotValue[1 - 1] == "X" && slotValue[4 - 1] == "X" && slotValue[7 - 1] == "X") ||
        (slotValue[2 - 1] == "X" && slotValue[5 - 1] == "X" && slotValue[8 - 1] == "X") ||
        (slotValue[3 - 1] == "X" && slotValue[6 - 1] == "X" && slotValue[9 - 1] == "X") ||
        (slotValue[3 - 1] == "X" && slotValue[5 - 1] == "X" && slotValue[7 - 1] == "X") ||
        (slotValue[1 - 1] == "X" && slotValue[5 - 1] == "X" && slotValue[9 - 1] == "X") ) {
            var audio = new Audio("winSound.wav");
            audio.play();

            theEnd = true;
            var win = document.getElementById('Result').rows[parseInt(0,10)].cells;
            wincContent = "Red WON!"
            win[parseInt(0,10)].innerHTML = wincContent;
    }
    
    
    if ((slotValue[1 - 1] == "O" && slotValue[2 - 1] == "O" && slotValue[3 - 1] == "O") || 
        (slotValue[4 - 1] == "O" && slotValue[5 - 1] == "O" && slotValue[6 - 1] == "O") || 
        (slotValue[7 - 1] == "O" && slotValue[8 - 1] == "O" && slotValue[9 - 1] == "O") ||
        (slotValue[1 - 1] == "O" && slotValue[4 - 1] == "O" && slotValue[7 - 1] == "O") ||
        (slotValue[2 - 1] == "O" && slotValue[5 - 1] == "O" && slotValue[8 - 1] == "O") ||
        (slotValue[3 - 1] == "O" && slotValue[6 - 1] == "O" && slotValue[9 - 1] == "O") ||
        (slotValue[3 - 1] == "O" && slotValue[5 - 1] == "O" && slotValue[7 - 1] == "O") ||
        (slotValue[1 - 1] == "O" && slotValue[5 - 1] == "O" && slotValue[9 - 1] == "O") ) {
            var audio = new Audio("winSound.wav");
            audio.play();

            theEnd = true;
            var win = document.getElementById('Result').rows[parseInt(0,10)].cells;
            wincContent = "Green WON!"
            win[parseInt(0,10)].innerHTML = wincContent;
    }
    
}