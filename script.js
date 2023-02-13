class Dictionary {
    constructor(dictionary) {
        this.dictionary = [];
    }
    addWord(word) {
        this.dictionary.push(word);
    }
    getWords() {
        return this.dictionary;
    }
}

let dictionary = new Dictionary();

function searchedWord() {
    let searchedWord = document.getElementById("searched-word").value;
    let foundWord = dictionary.getWords().find(word => word === searchedWord);
    if (foundWord) {
        alert("Word " + searchedWord + " was found in the dictionary");
    } else {
        alert("Sorry, but " + searchedWord + " was not found in the dictionary");
    }
    document.getElementById("searched-word").value = "";
}
document.getElementById("searched-word").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchedWord();
    }
});

function enteredWord() {
    let enteredWord = document.getElementById("entered-word").value;
    dictionary.addWord(enteredWord);
    let wordsContainer = document.getElementById("words-container");
    let newWordElement = document.createElement("p");
    newWordElement.innerHTML = enteredWord;
    wordsContainer.appendChild(newWordElement);
    document.getElementById("entered-word").value = "";
}
document.getElementById("entered-word").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        enteredWord();
    }
});