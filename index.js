// Add your code here
const newUser = function submitData(newName, newEmail) {
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

  const newUser = fetch(userUrl, configObj)
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
  return newUser;
}



/*
fetchUsers(userUrl, configObj)
function fetchUsers(userUrl, configObj) {
  let users = fetch(userUrl, configObj)
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
*/
