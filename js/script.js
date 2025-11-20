// Drag and Drop functionality
const dragDropBox = document.getElementById('drag-drop-box');
const fileInput = document.getElementById('fileInput');
const progressBar = document.getElementById('progress-bar');
const progress = document.querySelector('.progress');
const processingSection = document.getElementById('processing-section');
const resultsSection = document.getElementById('results');
const scanDetails = document.getElementById('scan-details');
const chatbotSection = document.getElementById('chatbot-section');
let fileData = null;

// Drag and drop events
dragDropBox.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragDropBox.classList.add('drag-over');
});

dragDropBox.addEventListener('dragleave', () => {
  dragDropBox.classList.remove('drag-over');
});

dragDropBox.addEventListener('drop', (event) => {
  event.preventDefault();
  dragDropBox.classList.remove('drag-over');
  fileData = event.dataTransfer.files[0];
  handleFileUpload(fileData);
});

// Manually select file
fileInput.addEventListener('change', (event) => {
  fileData = event.target.files[0];
  handleFileUpload(fileData);
});

// Handle file upload
function handleFileUpload(file) {
  if (file) {
    console.log(`File chosen: ${file.name}`);
    showProcessing();
    simulateUpload();
  }
}

// Show progress bar and simulate processing
function showProcessing() {
  processingSection.style.display = 'block';
  resultsSection.style.display = 'none';
  chatbotSection.style.display = 'none';
  progress.style.width = '0%';
}

// Simulate file upload and processing (for demo purposes)
function simulateUpload() {
  let progressValue = 0;
  let interval = setInterval(() => {
    progressValue += 10;
    progress.style.width = progressValue + '%';

    if (progressValue >= 100) {
      clearInterval(interval);
      displayResults();
    }
  }, 500);
}

// Display results after file is processed
function displayResults() {
  processingSection.style.display = 'none';
  resultsSection.style.display = 'block';
  chatbotSection.style.display = 'block';
  
  // Simulate MRI scan results (you can replace this with actual data)
  scanDetails.innerText = 'Scan analyzed: No abnormalities detected.';
}

// Chatbot functionality (simple simulation)
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Send user question to chatbot
sendBtn.addEventListener('click', () => {
  const userText = userInput.value;
  if (userText.trim() !== '') {
    appendChat('You', userText);
    getChatbotResponse(userText);
    userInput.value = '';
  }
});

// Simulate chatbot response using OpenAI ChatGPT API
function getChatbotResponse(userText) {
  // Simulated response (replace this with actual API call)
  setTimeout(() => {
    const botResponse = `AI Response to: "${userText}" - This looks like a normal scan, consult with a specialist for further clarification.`;
    appendChat('AI', botResponse);
  }, 1000);
}

// Append message to chat log
function appendChat(sender, text) {
  const message = document.createElement('p');
  message.textContent = `${sender}: ${text}`;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}
