export function createTitle(){
  const element = document.createElement('div')
  element.textContent = 'World of Fries';
  element.classList.add('title');

  return element;
}

export function createDiv(className = 'randomClass'){
  const element = document.createElement('div');
  element.classList.add('content', className);

  return element;
}