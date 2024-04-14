const pokemonSearch = document.getElementById('pokemon-search');
const searchButton = document.getElementById('search-button');
const pokemonInfo = document.getElementById('pokemon-info');
const api_url = `https://pokeapi.co/api/v2/pokemon`

searchButton.addEventListener('click', (event) => {
    
    event.preventDefault();
    const pokemonName = pokemonSearch.value;
    fetch(`${api_url}/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pokemonInfo.innerHTML = `
        <p>Name: ${data.name}</p>
        <p>Type: ${data.types[0].type.name}</p>
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p> <img src="${data.sprites.front_default}"/>
`
    })}

);
