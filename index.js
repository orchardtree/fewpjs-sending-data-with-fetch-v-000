// Add your code here
function submitData(newName, newEmail) {
  const userUrl = "http://localhost:3000/users"

  const formData = {
    name: newName,
    email: newEmail
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch(userUrl, configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
    renderUsers(object);
  })
  .catch(function(error) {
    console.log(error.message);
    renderErrors(error)
  });
}

function renderUsers(newUser) {
  const newUserId = newUser.id;
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = newUserId;
  document.body.appendChild(ul);
  ul.appendChild(li);
  console.log(newUserId);
}

function renderErrors(error) {
  const errorMsg = error.message
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = errorMsg;
  document.body.appendChild(ul);
  ul.appendChild(li);
  console.log(errorMsg);
}
