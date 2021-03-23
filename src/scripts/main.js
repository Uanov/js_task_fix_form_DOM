'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.innerHTML = wordInHtml(input.name);
  input.placeholder = wordInHtml(input.name);
  label.htmlFor = input.placeholder;
  input.parentElement.append(label);
}

function wordInHtml(string) {
  return ((string[0].toUpperCase() + string.slice(1))
    .replace(/([A-Z])/g, ' $1')).slice(1);
}
