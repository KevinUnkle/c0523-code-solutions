async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const pokemonData = await response.json(response);
    console.log(pokemonData);
  } catch (error) {
    console.log(error);
  }
}
fetchPokemon();
