const list = document.getElementById('list');
// const editBtn = document.querySelectorAll('#edit');
// const xBtn = document.querySelectorAll('#x');

document.addItem.addEventListener('submit', function(event) {
  event.preventDefault();
  // new list item
  const userInput = addItem.title.value;
  var newLi = document.createElement('li');
  const newDiv = document.createElement('div');
  newDiv.textContent = userInput;
  newLi.appendChild(newDiv);

  //new buttons for list item
  const editButton = document.createElement('button');
  editButton.id = 'edit';
  const xButton = document.createElement('button');
  xButton.id = 'x';
  editButton.textContent = 'edit';
  xButton.textContent = 'x';

  newLi.appendChild(editButton);
  newLi.appendChild(xButton);
  list.appendChild(newLi);
});

// x button clears

list.addEventListener('click', function(e) {
  if (e.target.id === 'x') {
    console.log(e.target);
    const list = e.target.parentNode;
    const unordered = list.parentNode;
    unordered.removeChild(list);
  }
});

list.addEventListener('click', function(e) {
  const listItem = document.querySelector('ul div');
  if (e.target.id === 'edit') {
    listItem.contentEditable = true;
    document.getElementById('edit').textContent = 'save';
  }
});
