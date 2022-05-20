const randomUsers = () => {
  let uri = "https://randomuser.me/api/?results=50";
  fetch(uri)
    .then(res => res.json())
    .then(data => allUsers(data.results));
};

const allUsers = users => {
  console.log(users);

  let usersDiv = document.getElementById("usersDiv");
  for (let user of users) {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
      
        <div class="card shadow">
          <img src="${user.picture.large}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${user.id.name}</h5>
            <p class="card-text">
             Email : ${user.email}
            </p>
          </div>
        </div>
      
      `;

    usersDiv.appendChild(div);
  }
};
randomUsers();
