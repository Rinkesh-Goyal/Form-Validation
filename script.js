/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
function validateForm() {
  const countryElement = document.getElementById('country');
  const stateElement = document.getElementById('gds-cr-one');
  const nameElement = document.getElementById('name');
  const passwordElement = document.getElementById('psw');
  const emailElement = document.getElementById('email');
  const zipElement = document.getElementById('zip');
  const passwordRepeatElement = document.getElementById('psw-repeat');
  let status = true;

  const name = nameElement.value;
  const email = emailElement.value;
  const zip = zipElement.value;
  const password = passwordElement.value;
  const passwordRepeat = passwordRepeatElement.value;
  const country = countryElement.options[countryElement.selectedIndex].text;
  const state = stateElement.options[stateElement.selectedIndex].text;
  // console.log(nameElement);

  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/;

  const checkName = (() => {
    if (name.length < 4 || name.length > 15 || format.test(name)) {
      document.getElementById('nameloc').textContent = 'Invalid Name';
      nameElement.value = '';
      status = false;
    }
  })();

  const checkEmail = (() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length < 4 || email.length > 30 || !emailRegex.test(email)) {
      document.getElementById('emailloc').textContent = 'Invalid Email';
      emailElement.value = '';
      status = false;
    }
  })();

  const checkZip = (() => {
    const zipRegex = /^[1-9][0-9]$/;
    if (zip.length !== 6 || zipRegex.test(zip)) {
      document.getElementById('ziploc').textContent = 'Invalid Zip Code';
      zipElement.value = '';
      status = false;
    }
  })();

  const checkPassword = (() => {
    const passRegex = /^[a-zA-Z0-9!@#$%^&*_]{6,16}$/;
    if (!passRegex.test(password)) {
      document.getElementById('passwordloc').textContent = 'Invalid Password';
      passwordElement.value = '';
      status = false;
    }
  })();

  const checkRepeatPassword = (() => {
    if (password !== passwordRepeat) {
      document.getElementById('password-repeatloc').textContent = 'Password should be same';
      passwordRepeatElement.value = '';
      status = false;
    }
  })();

  const checkCountry = (() => {
    if (country === 'Please select a country.') {
      document.getElementById('countryloc').textContent = 'Please select a country.';
      status = false;
    }
  })();

  const checkState = (() => {
    if (state === '-' || state === 'Please select a region.') {
      document.getElementById('stateloc').textContent = 'Please select a region.';
      status = false;
    }
  })();

  const checkCondition = (() => {
    if (!document.getElementById('condition').checked) {
      alert('Please accept the Terms and Privacy.');
      status = false;
    }
  })();

  const errorElement = document.querySelectorAll('.error');
  if (status === true) {
    for (let i = 0; i < errorElement.length; i += 1) {
      errorElement[i].classList.add('active');
    }
  } else {
    for (let i = 0; i < errorElement.length; i += 1) {
      errorElement[i].classList.remove('active');
    }
  }
}
