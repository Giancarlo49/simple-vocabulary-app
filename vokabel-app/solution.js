let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let randomGermanWord;

function addVocabulary() {
    dictionary[germanText.value] = englishText.value;

    germanText.value = '';
    englishText.value = '';

    // Text wird im webbrowser unter den Dateinamen "dictionary" gespeichert. //

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render(){
    vocabularyList.innerHTML = '';
    for (let key in dictionary) {
    vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

// Vokablen werden in zufälliger Reihenfolge abgefragt  ////////////////

function nextVocabulary() {
    let obj_keys = Object.keys(dictionary);
    randomGermanWord = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    word.innerHTML = `${dictionary[randomGermanWord]}?`;

}

//  Vokabeln werden verglichen  /////////////////////////////////
function compare() {
    if(germanText.value == randomGermanWord) {
        // Richtig !!
        text.innerHTML = 'Richtig!!';

    }else {
        // Falsch
        text.innerHTML = 'Falsch!!'

    }

    //  Eingabe im Eingabefeld wird gelöscht  ///////////////////////////////
    germanText.value = '';

    // nächste Vokabel wird aufgerufen  //////////////////////////////
    nextVocabulary();
}