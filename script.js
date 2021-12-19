function myFunction() {
    let myText = document.getElementById("content").value;
    document.getElementById("box").innerHTML = "" + myText;

    let myBox = document.getElementById("box").style;

    let textSize = document.getElementById("size").value;
    let textHeight = document.getElementById("height").value;
    let textWidth = document.getElementById("width").value
    
    myBox.fontSize = textSize + "px";
    myBox.height = textHeight + "px";
    myBox.width = textWidth + "px";


}