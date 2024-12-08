const url = 'https://api.github.com/users/';
const usuario = 'octocat'; // Replace with any GitHub user

fetch(`${url}${usuario}`)
  .then(response => response.json())
  .then(data => {
    const perfilInfo = document.getElementById('perfil-info');
    perfilInfo.innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar de ${data.name}">
      <h3>${data.name}</h3>
      <p>${data.bio}</p>
    `;

    const repositoriosLista = document.getElementById('repositorios-lista');
    fetch(`${url}${usuario}/repos`)
      .then(response => response.json())
      .then(data => {
        data.forEach(repo => {
          const li = document.createElement('li');
          li.innerHTML = `
            <a href="${repo.html_url}">${repo.name}</a>
            <p>${repo.description}</p>
          `;
          repositoriosLista.appendChild(li);
        });
      });
  });