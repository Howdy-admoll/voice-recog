const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Voice is activated, you can speak to microphone');
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.resultsn[maamcurrent][0].transcript;
  content.textContent = transcript;
};


// adding listener to btn

btn.addEventListener('click', () => {
    recognition.start();
});