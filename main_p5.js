const header = document.querySelector('#main_p5');

fetch('../P5.js/main_p5.html')
.then(res => res.text())
.then(data => Image.innerHTML = data)
