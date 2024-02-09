export function footer(){
  const mainFooter = document.querySelector('footer');
  mainFooter.style.bottom = 0;
  const footer = document.createElement('p');
  footer.textContent = 'Copyright © 2024 - '
  const link = document.createElement('a');
  link.textContent = 'Made by RobRusu';
  link.href = 'https://github.com/RobRusu';
  footer.appendChild(link);

  return footer
}