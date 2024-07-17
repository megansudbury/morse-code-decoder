const morseCodeMap = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
    '...--': '3', '....-': '4', '.....': '5', '-....': '6',
    '--...': '7', '---..': '8', '----.': '9', '/': ' '
};

function decodeMorse() {
    const morseInput = document.getElementById('morseInput').value.trim();
    const words = morseInput.split('   '); // Morse code words are separated by 3 spaces
    let decodedMessage = '';

    for (let word of words) {
        const letters = word.split(' ');
        for (let letter of letters) {
            decodedMessage += morseCodeMap[letter] || '';
        }
        decodedMessage += ' ';
    }

    document.getElementById('decodedText').innerText = decodedMessage.trim();
}