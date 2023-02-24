const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var object = {};
  formData.forEach(function (value, key) {
    object;
    object[key] = value;
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(object),
    redirect: 'follow',
  };

  console.log(requestOptions);

  fetch('https://eoef126uc693pb4.m.pipedream.net', requestOptions)
    .then((response) => response.text())
    .then((result) => GetResponse(result))
    .catch((error) => console.log('error', error));

  form.reset();

  function GetResponse(result) {
    document.getElementById('formsignup').innerHTML = result;
    document.getElementById('formsignup').style.display = 'none';
    document.getElementById('formsignup').style.display = 'block';
  }
});
