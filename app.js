const resDiv = document.getElementById('results');
const resBtn = document.getElementById('getData');



resDiv.innerHTML = `<p>Click me for advice!<p>`

resBtn.addEventListener('mouseover', () => {
  document.getElementById("image").setAttribute('src', './Shaq3.png');
});

resBtn.addEventListener('mouseout', () => {
  document.getElementById("image").setAttribute('src', './Shaq2.png');
});

resBtn.addEventListener('click', () => {
  getAdvice();
});

function getAdvice() {
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resDiv.innerHTML = `<p>${Adviceobj.advice}<p>`;
  }).catch(error => {
    console.log(error);
  });
}
