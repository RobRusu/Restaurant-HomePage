export function contacts() {
  const contacts = document.createElement('div');
  contacts.classList.add('contacts');


  const restaurantNumber = document.createElement('p');
  restaurantNumber.classList.add('restNumber');
  restaurantNumber.textContent = "Restaurant Number: 555-420-1337"

  const restaurantEmail = document.createElement('p');
  restaurantEmail.classList.add('restEmail');
  restaurantEmail.textContent = "Restaurant Email: surelyNotFake@isReal.com"

  const potatoNumber = document.createElement('p');
  potatoNumber.classList.add('potatoNumber');
  potatoNumber.textContent = "Potato Garden Number: 555-420-7331"

  const potatoEmail = document.createElement('p');
  potatoEmail.classList.add('potatoEmail');
  potatoEmail.textContent = "Potato Garden Email: AnotherRealAddress@isReal.com"

  const tomatoNumber = document.createElement('p');
  tomatoNumber.classList.add('tomatoNumber');
  tomatoNumber.textContent = "Tomato Garden Number: 555-420-3371"

  const tomatoEmail = document.createElement('p');
  tomatoEmail.classList.add('tomatoEmail');
  tomatoEmail.textContent = "Tomato Garden Email: RealTomatoEmail@isReal.com"

  const secretNumber = document.createElement('p');
  secretNumber.classList.add('secretNumber');
  secretNumber.textContent = "Secret Number: 555-666-6969"

  contacts.append(restaurantNumber, restaurantEmail, potatoNumber, potatoEmail, tomatoNumber, tomatoEmail, secretNumber)

  return contacts;
}