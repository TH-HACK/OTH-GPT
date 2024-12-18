const chatWindow = document.getElementById("chatWindow");

function handleKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

async function sendMessage() {
    const userInput = document.getElementById("userInput");
    const messageText = userInput.value.trim();
    if (!messageText) return;

    addMessage(messageText, "user-message");
    userInput.value = "";

    addTypingIndicator();

    try {
        const response = await fetch('https://api.allorigins.win/raw?url=https://tamtam.freewebhostmost.com/apiAhmed.php?user_input=' + encodeURIComponent(messageText));
        let botResponse = await response.text();
        botResponse = botResponse.replace('[Ahmed]', 'OTH👨‍💻 ‍:');
        botResponse = botResponse.replace('[Evil GPTlevI]', '‍OTH-GPT-WORM');
        botResponse = botResponse.replace('Ahmed', 'Othman');
        botResponse = botResponse.replace('[أحمد]', '[عثمان]');
        botResponse = botResponse.replace('أحمد', 'عثمان');
        removeTypingIndicator();
        addMessage(botResponse, "bot-message");
    } catch (error) {
        removeTypingIndicator();
        addMessage("تعذر جلب الرد. حاول لاحقاً.", "bot-message");
    }
}

function addMessage(text, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = text;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function addTypingIndicator() {
    const typingIndicatorDiv = document.createElement("div");
    typingIndicatorDiv.className = "typing-indicator";
    typingIndicatorDiv.textContent = "...";
    chatWindow.appendChild(typingIndicatorDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicatorDiv = document.querySelector(".typing-indicator");
    if (typingIndicatorDiv) {
        typingIndicatorDiv.remove();
    }
}

function clearChat() {
    chatWindow.innerHTML = "";
}

function toggleMenu() {
    const overlay = document.getElementById("overlay");
    const sidebar = document.getElementById("sidebar");

    const isVisible = overlay.style.display === "block";

    if (isVisible) {
        overlay.style.display = "none";
        sidebar.style.display = "none";
    } else {
        overlay.style.display = "block";
        sidebar.style.display = "block";
    }
}

// نافذة الموافقة
const agreeCheckbox = document.getElementById("agreeCheckbox");
const agreeButton = document.getElementById("agreeButton");
const popupOverlay = document.getElementById("popupOverlay");

// تفعيل الزر عند اختيار "أوافق"
agreeCheckbox.addEventListener("change", function() {
    if (this.checked) {
        agreeButton.disabled = false;
    } else {
        agreeButton.disabled = true;
    }
});

function closePopup() {
    popupOverlay.style.display = "none";
}
