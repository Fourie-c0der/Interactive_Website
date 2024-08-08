let formData = [];

function saveData(data) {
  formData.push(data);
  console.log(formData);
}


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const course = document.getElementById('course').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const highschool = document.getElementById('highschool').value;
  const gradyear = document.getElementById('gradyear').value;

  if (name === '' || surname === '' || course === '' || email === '' || dob === '' || highschool === '' || gradyear === '') {
    alert('Please fill in all the required fields.');
  } else {
    const data = {
      name: name,
      surname: surname,
      course: course,
      phone: phone,
      email: email,
      dob: dob,
      highschool: highschool,
      gradyear: gradyear
    };

    saveData(data);

    alert('Thank you for enrolling!');

    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('course').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('highschool').value = '';
    document.getElementById('gradyear').value = '';
  }
});