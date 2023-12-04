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

function uppercaseText() {
  var textArea = document.getElementById("inputTextArea");
  var sentences = textArea.value.split("."); // Split text into sentences

  // Uppercase the entire text
  textArea.value = textArea.value.toUpperCase();

  // Add "-Moo" to the last word of each sentence if it doesn't already exist
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split(" "); // Split sentence into words
    var lastWordIndex = words.length - 1;

    if (lastWordIndex >= 0) {
      var lastWord = words[lastWordIndex];

      // Check if "-Moo" is not already part of the last word
      // prevents -Moo-Moo
      if (!lastWord.endsWith("-Moo")) {
        words[lastWordIndex] += "-Moo"; // Add "-Moo" to the last word
        sentences[i] = words.join(" "); // Join words back into a sentence
      }
    }
  }

  // Join sentences back into the text
  textArea.value = sentences.join(".");
}
