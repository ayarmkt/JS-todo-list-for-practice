const input = document.querySelector('.form-control input');
const form = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const todoListContainer = document.querySelector('.todo-list-container');

const addItem = (e) => {
  e.preventDefault();

  let item = input.value;
  console.log(item);

  const html = `
    <article class="todo-item" data-id="${Date.now()}">
        <input type="checkbox" />
        <p>${item}</p>
        <div class="btn-container">
        <button class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
            <i class="fas fa-trash-alt"></i>
        </button>
        </div>
    </article>`;

  todoList.insertAdjacentHTML('afterend', html);
  todoListContainer.classList.add('show-container');
  input.value = '';
};

form.addEventListener('submit', addItem);
