// Add your code here

function submitData(newName, newEmail) {
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


  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object.id);
      const newUser = object;
      const newUserId = newUser.id;


      let users = fetch("http://localhost:3000/users")
          .then(resp => resp.json())
          .then(json => renderUsers(json.message));


      if (true == true) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.innerHTML = newUserId;
        document.body.appendChild(ul);
        ul.appendChild(li);
      //} else {
        //const li = document.createElement('li');
        //li.innerHTML = newUserId;
        //ul.appendChild(li);
        }
    })

    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
    //fetchUsers();
  }

function fetchUsers() {
  const usersUrl = "http://localhost:3000/users"
  let users = fetch(usersUrl)
      .then(resp => resp.json())
      .then(json => renderUsers(json.message));
  return users;
  }

function renderUsers(users) {
  const body = document.querySelector('body');
  for (const user in users) {
    const p = document.createElement('p');
    p.innerHTML = user;
    body.appendChild(p);
    }
  }
