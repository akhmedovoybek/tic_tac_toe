var btnsArray = document.querySelectorAll(".game-cell");
var isnull = false;
var winner; 
btnsArray.forEach(item=>{
    item.addEventListener("click", event=>{
        if (!isnull){
            item.innerHTML = "X";
            isnull = true;
        }
        else{
            item.innerHTML = "O";
            isnull = false;
        }
        if (over()){
            winner = winner.toUpperCase();
            if (winner == "DRAW"){
                document.querySelector("#result").innerHTML = `Game over! ${winner}`;
            }
            else{
                document.querySelector("#result").innerHTML = `Game over! ${winner} is a winner.`;
            }
        }
    })
})

// 0 1 2
// 3 4 5
// 6 7 8

function over() {
    //horizontal
    if (btnsArray[0].innerHTML=="X" && btnsArray[1].innerHTML=="X" && btnsArray[2]=="X"){
        winner = "x";
        return true;
    }
    if (btnsArray[3].innerHTML=="X" &&btnsArray[4].innerHTML=="X" && btnsArray[5].innerHTML=="X"){
        winner = "x";
        return true;
    }
    if (btnsArray[6].innerHTML=="X" && btnsArray[7].innerHTML=="X" && btnsArray[8].innerHTML=="X"){
        winner = "x";
        return true;
    }
    //vertical
    if (btnsArray[0].innerHTML=="X" && btnsArray[3].innerHTML=="X" && btnsArray[6].innerHTML=="X"){
        winner = "x";
        return true;
    }
    if (btnsArray[1].innerHTML=="X" &&btnsArray[4].innerHTML=="X" && btnsArray[7].innerHTML=="X"){
        winner = "x";
        return true;
    }
    if (btnsArray[2].innerHTML=="X" &&btnsArray[5].innerHTML=="X" &&btnsArray[8].innerHTML=="X"){
        winner = "x";
        return true;
    }
    //diagonal
    if (btnsArray[0].innerHTML=="X" &&btnsArray[4].innerHTML=="X" &&btnsArray[8].innerHTML=="X"){
        winner = "x";
        return true;
    }
    if (btnsArray[2].innerHTML=="X" &&btnsArray[4].innerHTML=="X" &&btnsArray[6].innerHTML=="X"){
        winner = "x";
        return true;
    }
    //null
    //horizontal
    if (btnsArray[0].innerHTML=="O" && btnsArray[1].innerHTML=="O" && btnsArray[2]=="O"){
        winner = "o";
        return true;
    }
    if (btnsArray[3].innerHTML=="O" &&btnsArray[4].innerHTML=="O" && btnsArray[5].innerHTML=="O"){
        winner = "o";
        return true;
    }
    if (btnsArray[6].innerHTML=="O" && btnsArray[7].innerHTML=="O" && btnsArray[8].innerHTML=="O"){
        winner = "o";
        return true;
    }
    //vertical
    if (btnsArray[0].innerHTML=="O" && btnsArray[3].innerHTML=="O" && btnsArray[6].innerHTML=="O"){
        winner = "o";
        return true;
    }
    if (btnsArray[1].innerHTML=="O" &&btnsArray[4].innerHTML=="O" && btnsArray[7].innerHTML=="O"){
        winner = "o";
        return true;
    }
    if (btnsArray[2].innerHTML=="O" &&btnsArray[5].innerHTML=="O" &&btnsArray[8].innerHTML=="O"){
        winner = "o";
        return true;
    }
    //diagonal
    if (btnsArray[0].innerHTML=="O" &&btnsArray[4].innerHTML=="O" &&btnsArray[8].innerHTML=="O"){
        winner = "o";
        return true;
    }
    if (btnsArray[2].innerHTML=="O" &&btnsArray[4].innerHTML=="O" &&btnsArray[6].innerHTML=="O"){
        winner = "o";
        return true;
    }
    //draw
    else if ((btnsArray[0].innerHTML=="X" || btnsArray[0].innerHTML=="O") && (btnsArray[1].innerHTML=="X" || btnsArray[1].innerHTML=="O") &&(btnsArray[2].innerHTML=="X" || btnsArray[2].innerHTML=="O") &&(btnsArray[3].innerHTML=="X" || btnsArray[3].innerHTML=="O") &&(btnsArray[4].innerHTML=="X" || btnsArray[4].innerHTML=="O") &&(btnsArray[5].innerHTML=="X" || btnsArray[5].innerHTML=="O") &&(btnsArray[6].innerHTML=="X" || btnsArray[6].innerHTML=="O") &&(btnsArray[7].innerHTML=="X" || btnsArray[7].innerHTML=="O") &&(btnsArray[8].innerHTML=="X" || btnsArray[8].innerHTML=="O") &&(btnsArray[9].innerHTML=="X" || btnsArray[9].innerHTML=="O")){
        winner = "DRAW";
        return true;
    }
    else{
        return false;
    }
}


