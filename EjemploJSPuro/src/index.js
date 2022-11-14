const container = document.querySelector(".container");

const url = "https://jsonplaceholder.typic5ode.com/users";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const p = document.createElement("p");
      p.setAttribute("id", user.id);
      p.innerHTML = user.name;
      p.addEventListener("click", () => {
        window.location.href = `./usuarios.html?id=${user.id}`;
      });
      container.appendChild(p);
    });
  })
  .catch((err) => console.log(err));
