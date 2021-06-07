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

  fetchUsers(userUrl, configObj)

/*
  fetch(userUrl, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
*/
}

function fetchUsers(userUrl, configObj) {
  let users = fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(json => renderUsers(json.message));
  return users;
  }

function renderUsers(users) {
  const newUserId = newUser.id;
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = newUserId;
  document.body.appendChild(ul);
  ul.appendChild(li);
  }
