'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
  .then(response=>response.text())
  .then(status=>{
    document.querySelector('#fortune-text').innerHTML=status;

  });
};

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  //zipcode = request.json.get("zipcode")


  // TODO: request weather with that URL and show the forecast in #weather-info

  fetch(`/weather.json?zipcode=${zipcode}`)
  //{
  //  method: 'POST',
  //  body:JSON.stringify(zip-code),
  //  headers:{
  //    'Content-Type': 'application/json',
  //  },
  //})

  .then((response) => response.json())
  .then((jsonData) => {
    document.querySelector(`#weather-info`).innerText = jsonData.forecast;
  });
}
document.querySelector(`#weather-form`).addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(results) {
  evt.preventDefault();

  const formInputs = {
    type: document.querySelector('#type-field').value,
    amount: document.querySelector('#amount-field').value,
  };

  fetch('/order-melons.json, {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((orderMelons) => {
    });
});

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);


