let btn = document.getElementById("btn");
let output = document.getElementById("output");
let imgElement = document.getElementById("pokemonSprite");


btn.addEventListener("click", function(){
    let id = Math.floor(Math.random() * 1024)+1;
    
    let fetchid= "https://pokeapi.co/api/v2/pokemon/"+ id;
    let data;
    fetch(fetchid)
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => imgElement.src =data.sprites.front_default)
        .catch(error => console.error(error));
    fetch(fetchid)
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => output.innerHTML = data.name)
        .catch(error => console.error(error));
    
    
    
    imgElement.style.display ="block";
})
  