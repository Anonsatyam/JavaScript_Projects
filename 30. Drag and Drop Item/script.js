const fill = document.querySelector(".fillBox");
const empties = document.querySelectorAll(".emptyBox");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}



function dragStart() {
    this.className += " hold";
    setTimeout(() =>
        this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = "fillBox"
}

function dragOver(event) {
    event.preventDefault();

}

function dragEnter(event) {
    event.preventDefault();
    this.className += " hovered";

}

function dragLeave() {
    this.className = "emptyBox"
}

function dragDrop() {
    this.className = "emptyBox";
    this.append(fill);
}