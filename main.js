// Define currentUser globally, ensure it's declared only once
let currentUser = null;

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication (e.g., validate credentials with server)
    if (isValidCredentials(username, password)) {
        currentUser = username;
        // Redirect to chat page
        window.location.href = 'ehdp.html';
    } else {
        showError('Invalid username or password.');
    }
}

// Function to validate credentials
function isValidCredentials(username, password) {
    const validCredentials = {
        'Debarshi': 'hi',
        'Vihaan': 'bye',
        'Gorank': 'Gorank1!',
        'Adhrit': 'Adhrit1!',
        'Hrishi': 'Hrishi1!',
        'Dhairya': 'Dhairya1!',
        'Pranavi': 'Pranavi1!',
        'Akshara': 'Akshara1!',
        'Gauri': 'Gauri1!',
        'Nishad': 'Nishad1!',
        'Yuv': 'Yuv1!',
        'Adarsh': 'Adarsh1!',
        'Om': 'Om1!',
        'Avantika': 'Avantika1!',
        'Siddhant': 'Kunjeer1!'
    };
    return validCredentials.hasOwnProperty(username) && validCredentials[username] === password;
}

// Chat Page WebSocket setup
const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function(event) {
    // Send authentication token to server upon connection
    if (currentUser) {
        socket.send(JSON.stringify({ type: 'auth', username: currentUser }));
    }
});

socket.addEventListener('message', function(event) {
    const data = JSON.parse(event.data);
    handleMessage(data);
});

// Function to handle incoming messages
function handleMessage(data) {
    const messages = document.getElementById('messages');
    const message = document.createElement('li');
    message.textContent = data.username + ': ' + data.content;
    messages.appendChild(message);
}

// Function to send messages
function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value;
    if (message.trim() !== '') {
        // Encrypt message before sending (optional)
        const encryptedMessage = encryptMessage(message);
        socket.send(JSON.stringify({ type: 'message', content: encryptedMessage }));
        input.value = '';
    }
}

// Placeholder encryption function
function encryptMessage(message) {
    // Perform encryption (e.g., using AES encryption algorithm)
    // This is a placeholder function for demonstration
    return message;
}
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.querySelector('img').src;
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Existing lightbox JavaScript code

    // Navigation buttons
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            window.location.href = 'ehdp.html';
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'homepage.html';
        });
    }
});
