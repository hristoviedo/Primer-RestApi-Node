const container = document.querySelector(".container");

const getURL = new URLSearchParams(window.location.search);

id = getURL.get("id");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(`${url}/${id}`)
.then( res => res.json())
.then(data => {
    const name = document.createElement("p");
    name.innerHTML = data.name;
    container.appendChild(name);
})