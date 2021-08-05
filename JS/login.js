const database = [
    {
      name: "Administrator",
      email: "admin@mail.com",
      password: "adminadmin"
    },
    {
      name: "Lenin",
      email: "leninmoffin@gmail.com",
      password: "walkers join"
    }
  ];
  
  // -------------------------------[ FUNCIONAL ]------------------------
  
  function validate(email, password) {
    return database.find(
      (user) => user.email === email && user.password === password
    );
  }
  
  function login(email, password) {
    const user = validate(email, password);
  
    if (user) {
      alert("Bienvenido " + user.name);
    } else {
      alert("Error: El usuario no existe");
    }
  }
  
  // -------------------------------[ VISUAL ]------------------------
  
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const buttonSubmit = document.getElementById("submit");
  
  buttonSubmit.addEventListener("click", function () {
    // Todas las etiquetas <input> tienen una propiedad llamada .value
    // donde se obtiene el valor del campo en ese momento.
    const email = emailInput.value;
  
    if (!email) {
      emailInput.classList.add("is-invalid");
      return;
    } else {
      emailInput.classList.remove("is-invalid");
    }
  
    const password = passwordInput.value;
  
    if (!password) {
      passwordInput.classList.add("is-invalid");
      return;
    } else {
      passwordInput.classList.remove("is-invalid");
    }
  
    login(email, password);
  });
  