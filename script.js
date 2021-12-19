function myFunction() {
    let myText = document.getElementById("content").value;
    document.getElementById("box").innerHTML = "" + myText;

    let myBox = document.getElementById("box").style;
    
    let textSize = document.getElementById("size").value;
    let textHeight = document.getElementById("height").value;
    let textWidth = document.getElementById("width").value
    let textColor = document.getElementById("text-color").value;
    let backgroundColor = document.getElementById("background-color").value;
    let borderColor = document.getElementById("border-color").value;
    let borderWidth = document.getElementById("border-width").value;
    let padding = document.getElementById("padding").value;

    // let fontStyleBold = document.getElementById("bold").value;
    
    myBox.fontSize = textSize + "px";
    myBox.height = textHeight + "px";
    myBox.width = textWidth + "px";
    myBox.color = textColor;
    myBox.backgroundColor = backgroundColor;
    myBox.borderColor = borderColor;
    myBox.borderWidth = borderWidth + "px";
    myBox.padding = padding + "px";

    // if (document.getElementById("bold").checked) {
    //     myBox.fontStyle = "bold";
    // }

}