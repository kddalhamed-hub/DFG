function startChat() {
    const username = document.getElementById('username').value;
    if (username.trim() !== "") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('chat-screen').classList.remove('hidden');
        document.getElementById('display-name').innerText = username;
    } else {
        alert("يرجى إدخال اسمك أولاً!");
    }
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value;
    
    if (messageText.trim() !== "") {
        const messagesArea = document.getElementById('messages-area');
        
        // إنشاء عنصر الرسالة
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg', 'user-msg');
        msgDiv.innerText = messageText;
        
        messagesArea.appendChild(msgDiv);
        input.value = ""; // تفريغ الحقل
        
        // التمرير للأسفل تلقائياً
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }
}

function logout() {
    location.reload(); // إعادة تحميل الصفحة للعودة لشاشة الدخول
}
