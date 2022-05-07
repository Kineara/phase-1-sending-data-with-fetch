function submitData(newName, newEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: newName,
      email: newEmail,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      const resElement = document.createElement("div");
      resElement.textContent = json.id;
      document.body.appendChild(resElement);
    })
    .catch(error => {
      const errorElement = document.createElement("div");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    })
}
