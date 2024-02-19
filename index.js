const getData = async () => {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(
      (res) => res.json()
    );
    data.push(pokemon);
    console.log("data", data);
    displaypokemon(data);
  }
};
const displaypokemon = (data) => {
  console.log("pokemon", data);

  const pokemonHTML = data
    ?.map(
      (pokemon) =>
        `<li class="cards">
   <img class = "card-image"  src="${pokemon.sprites.front_default}" alt="Images"/>
   <h1 class="card-name">${pokemon.id}.${pokemon.name}</h1>
   <p  class="card-type"> type:${pokemon.types[0]?.type?.name}  ${pokemon.types[1]?.type?.name}</p>
   </li>`
    )
    .join(" ");
  pokedex.innerHTML = pokemonHTML;
};
displaypokemon();
getData();
