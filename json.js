function users() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => userData(data));

  function userData(users) {
    const ul = document.getElementById("users");
    for (let user of users) {
      const li = document.createElement("li");
      li.innerText = ` Email:  ${user.email}`;

      ul.appendChild(li);
    }
  }
}

// post

function postMessage() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => posts(data));

  function posts(posts) {
    let div = document.getElementById("posts");
    for (let post of posts) {
      let child = document.createElement("div");
      child.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;

      child.style.border = "1px solid gray";
      child.style.margin = "10px";
      child.style.backgroundColor = "purple";
      child.style.padding = "10px";
      child.style.color = "white";
      div.appendChild(child);
    }
  }
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then(res => res.json())
  .then(data => console.log(data));
