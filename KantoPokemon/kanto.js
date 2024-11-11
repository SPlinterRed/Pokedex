

const playground = document.getElementById('pokelist');

const pokedata = document.createElement('div');
pokedata.innerHTML = '<p> List of Pokemons: Bulbasaur,\
Charizard, and Chuchu </p>';
playground.append(pokedata);

const nextbutton = document.createElement('button');
nextbutton.id = "next";
nextbutton.textContent ='next pokemon';
playground.append(nextbutton);

const trollbutton = document.createElement('button');
trollbutton.id = "next";
trollbutton.textContent ='removebuton';
playground.append(trollbutton);

nextbutton.addEventListener('click',removebutton);
trollbutton.addEventListener('click',appendbutton);

function appendbutton(){
    trollbutton.remove();
    playground.append(nextbutton);

}

function removebutton(){
    nextbutton.remove();
    playground.append(trollbutton);
}