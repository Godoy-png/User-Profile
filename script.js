const form = document.getElementById("update-form");
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const locationField = document.getElementById("location");
const bioField = document.getElementById("bio");
const profilePicField = document.getElementById("profile-pic");
const profileImage = document.querySelector(".profile-image");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obter valores do formulário
  const nameValue = nameField.value;
  const ageValue = ageField.value;
  const locationValue = locationField.value;
  const bioValue = bioField.value;
  const profilePicFile = profilePicField.files[0];

  
  if (!nameValue || !ageValue || !locationValue || !bioValue) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Enviar os dados do formulário
  const formData = new FormData();
  formData.append("name", nameValue);
  formData.append("age", ageValue);
  formData.append("location", locationValue);
  formData.append("bio", bioValue);
  if (profilePicFile) {
    formData.append("profile-pic", profilePicFile);
  }

  
  // Atualizar imagem na pagina
  if (profilePicFile) {
    const reader = new FileReader();
    reader.onload = () => {
      profileImage.src = reader.result;
    };
    reader.readAsDataURL(profilePicFile);
  }

  // Atualizar informações
  document.querySelector(".name").textContent = nameValue;
  document.querySelector(".age").textContent = ageValue;
  document.querySelector(".location").textContent = locationValue;
  document.querySelector(".bio").textContent = bioValue;

  alert("Suas informações foram atualizadas!");
});


/* 

Criado por: Gabriel Godoy

Created by: Gabriel Godoy

*/
