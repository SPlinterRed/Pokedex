

const playground = document.getElementById('pokelist');

const pokedata = document.createElement('div');
pokedata.innerHTML = '<p> List of Pokemons: Bulbasaur,\
Charizard, and Chuchu </p>';
playground.append(pokedata);

console.log(playground.getAttribute);