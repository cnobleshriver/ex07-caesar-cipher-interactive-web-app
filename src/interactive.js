// TASK #2: import the decoder class
import decoder from "./decoderRingClass.js";

// Create a decoder object.
const d = new decoder("");

// TASK #3: Validate the cipher key text input
function validateKeyTextInput() {
  const key = document.getElementById("key").value;
  if (key.length === 26 && key.toLowerCase() === key) {
    document.getElementById("key").style.backgroundColor = "white";
    d.cipher = key;
  } else {
    document.getElementById("key").style.backgroundColor = "yellow";
  }
}

// TASK #3:  Color the encoded text box.
function colorEncodedTextBox() {
  const encodedTextBox = document.getElementById("encoded");
  if (encodedTextBox.value === "") {
    encodedTextBox.style.backgroundColor = "white";
    encodedTextBox.style.color = "black";
  } else {
    encodedTextBox.style.backgroundColor = "red";
    encodedTextBox.style.color = "white";
  }
}

// TASK #3: Encode the text in the encode text box.
function encodeText() {
  const input = document.getElementById("encode").value;
  const encoded = d.encode(input);
  document.getElementById("encoded").value = encoded;
  colorEncodedTextBox();
}

// TASK #3: Color the decoded text box.
function colorDecodedTextBox() {
  const decodedTextBox = document.getElementById("decoded");
  if (decodedTextBox.value === "") {
    decodedTextBox.style.backgroundColor = "white";
    decodedTextBox.style.color = "black";
  } else {
    decodedTextBox.style.backgroundColor = "green";
    decodedTextBox.style.color = "white";
  }
}

// TASK #3: Decode the text in the decode text box.
function decodeText() {
  const input = document.getElementById("decode").value;
  const decoded = d.decode(input);
  document.getElementById("decoded").value = decoded;
  colorDecodedTextBox();
}

// TASK #4: Assign event handlers to events. Initialize background color for key
// input.
document.getElementById("key").style.backgroundColor = "yellow";
document.getElementById("key").addEventListener("keyup", validateKeyTextInput);
document.getElementById("encode").addEventListener("keyup", encodeText);
document.getElementById("encode").addEventListener("keyup", encodeText);
document.getElementById("encode").addEventListener("keyup", colorEncodedTextBox);
document.getElementById("decode").addEventListener("keyup", decodeText);
document.getElementById("decode").addEventListener("keyup", colorDecodedTextBox);
