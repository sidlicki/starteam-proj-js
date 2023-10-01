const inputSwitch = document.querySelector('.switch');

//прописав логіку для перемикача теми, треба зробити порядок в хтмл коді хедера та в цсс хедера, бо то як зараз працює скритий імпут перемикання - це не вірне рішення

//виклик функції котра визначає чи в локал сторейдж є ключ theme зі значенням дарк,
//якщо так - накидає на боді класс дарк, якщо ні - видаляє клас дарк.
switchToDarkTheme();

function switchToDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      inputSwitch.checked = true;
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) {}
}

//прослуховувач подій на чекбоксі на його зміну, при зміні відбувається івент, котрий додає/видаляє тему дарк
inputSwitch.addEventListener('change', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  switchToDarkTheme();
});
