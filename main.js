let printIt = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "./main.json", true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      let card = document.querySelector("#contenedor__cards");
      data.forEach((item) => {
        card.innerHTML += `
        <div>
          <p>${item.name}</p>
          <p>${item.email}</p>
          <p>${item.address.city}</p>
          <p>${item.phone}</p>
        </div>
        `;
      });
    }
  };
};

printIt();
