export function menu(title, addClass = 'menu'){
  const menuTitle = document.createElement('p');
  menuTitle.textContent = title;
  menuTitle.classList.add(addClass);

  return menuTitle;
};

export function drinks(){
  const drinks = document.createElement('div');
  drinks.classList.add('drinks');

  for (let i = 0; i < 2; i++){
    const drink = document.createElement('div');
    drink.classList.add('drink');
    const description = document.createElement('div');
    description.classList.add('description');
    const drinkTitle = document.createElement('p');
    const drinkDescription = document.createElement('p');
    description.append(drinkTitle, drinkDescription);
    drink.append(description);

    drinks.appendChild(drink);
  }

  return drinks
}

export function dishes(){
  const dishes = document.createElement('div');
  dishes.classList.add('dishes');

  for(let i = 0; i < 4; i++){
    const dish = document.createElement('div');
    dish.classList.add('dish');
    const description = document.createElement('div');
    description.classList.add('description');
    const dishTitle = document.createElement('p');
    const dishDescription = document.createElement('p');
    description.append(dishTitle, dishDescription);
    dish.append(description);

    dishes.appendChild(dish);
  }

  return dishes;
}

export function desserts(){
  const desserts = document.createElement('div');
  desserts.classList.add('desserts');

  for(let i = 0; i < 2; i++){
    const dessert = document.createElement('div');
    dessert.classList.add('dessert');
    const description = document.createElement('div');
    description.classList.add('description');
    const dessertTitle = document.createElement('p');
    const dessertDescription = document.createElement('p');
    description.append(dessertTitle, dessertDescription);
    dessert.append(description);

    desserts.appendChild(dessert);
  }

  return desserts;
}