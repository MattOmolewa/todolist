/*Part 3

For this assignment you will be combining your knowledge of DOM access and events to build a todo app!

As a user, you should be able to:

    Add a new todo (by submitting a form)
    Mark a todo as completed (cross out the text of the todo)
    Remove a todo

Part 4:

Using localStorage, try to store your todos so that if you refresh the page you do not lose what you have added to the list! As a super bonus, try to also save todos that you have marked as complete! */

const list = document.querySelector("ul");
const form = document.querySelector("form");
//adding todos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textInput = document.querySelector("#todos").value.trim();
  const html = `<li>${textInput}<span class="material-icons">clear</span></li>`;
  if (textInput) {
    list.insertAdjacentHTML("afterbegin", html);
    storeTodos();
  }
  form.reset();
});
//striking and deleting todos
list.addEventListener("click", (e) => {
  const a = e.target;
  a.className == "checked"
    ? a.classList.remove("checked")
    : a.classList.add("checked");
  if (a.tagName == "SPAN") {
    a.parentElement.remove();
  }
  storeTodos();
});
const storeTodos = () => (localStorage.myitems = list.innerHTML);
const getTodos = () => {
  let storedValues = localStorage.myitems;
  if (storedValues) {
    list.innerHTML = storedValues;
  } else {
    list.innerHTML = "";
  }
};
getTodos();
