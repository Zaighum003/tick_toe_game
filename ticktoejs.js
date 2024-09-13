let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let player = document.querySelector("#turn-info");
let winner = document.querySelector("#winner-info");
let turn0 = true;

function resetmethod() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winner.innerText = "No winner yet";
    player.innerText = "Player X's Turn"; 
    turn0 = true;
}
reset.addEventListener("click", resetmethod);

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            if (pos1val === "x") {
                winner.innerText = "Player X Wins!";
            } else {
                winner.innerText = "Player O Wins!";
            }

            boxes.forEach((box) => {
                box.disabled = true;
            });

            return; 
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "x";
            player.innerText = "Player O's Turn";
        } else {
            box.innerText = "o";
            player.innerText = "Player X's Turn";
        }

        box.disabled = true;
        turn0 = !turn0;
        checkwinner();
    });
});
