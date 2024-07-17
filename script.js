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

const textToMorseMap = Object.fromEntries(
    Object.entries(morseCodeMap).map(([k, v]) => [v, k])
);

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

function encodeToMorse() {
    const textInput = document.getElementById('textInput').value.trim().toUpperCase();
    let encodedMessage = '';

    for (let char of textInput) {
        if (char === ' ') {
            encodedMessage += '/ ';
        } else {
            encodedMessage += (textToMorseMap[char] || '') + ' ';
        }
    }

    document.getElementById('encodedText').innerText = encodedMessage.trim();
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    
    // Update active class on nav links
    const navLinks = document.querySelectorAll('.topnav a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.topnav a[href="#${sectionId}"]`).classList.add('active');
}