function makeTextBigger() {
  //   alert("Hello, world!");
  var textArea = document.getElementById("inputTextArea");
  textArea.style.fontSize = "24pt";
  // alternative to document.getElementById("inputTextArea").style.fontSize = "24pt";
}

function handleRadioButtonChange() {
  var textArea = document.getElementById("inputTextArea");
  var fancyRadioButton = document.getElementById("fancyShmancyRadio");

  if (fancyRadioButton.checked) {
    // Set styles for FancyShmancy
    textArea.style.color = "blue";
    // I do not know why but the text is not turning blue.
    // the underline is so, good enough
    textArea.style.fontWeight = "bold";
    textArea.style.textDecoration = "underline";
    alert("FancyShmancy selected!");
  } else {
    // Remove styles for BoringBetty
    textArea.style.fontWeight = "normal";
    textArea.style.textDecoration = "none";
    textArea.style.color = ""; // Reset to the default color
    alert("BoringBetty selected!");
  }
}
