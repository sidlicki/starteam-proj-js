const inputSwitch = document.querySelector('.switch');

switchToDarkTheme();

function switchToDarkTheme() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.getElementById('slider').checked = true;
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) {}
}

inputSwitch.addEventListener('change', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    document.getElementById('slider').checked = false;
  } else {
    localStorage.setItem('theme', 'dark');
    document.getElementById('slider').checked = true;
  }
  switchToDarkTheme();
});

const inputSwitchMobile = document.querySelector('.mobile-switch');

switchToDarkThemeMobile();

function switchToDarkThemeMobile() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.getElementById('mobile-slider').checked = true;
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) {}
}

inputSwitchMobile.addEventListener('change', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    document.getElementById('mobile-slider').checked = false;
  } else {
    localStorage.setItem('theme', 'dark');
    document.getElementById('mobile-slider').checked = true;
  }
  switchToDarkThemeMobile();
});