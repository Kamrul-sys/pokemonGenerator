let btn = document.getElementById("btn");
let output = document.getElementById("output");
let imgElement = document.getElementById("pokemonSprite");

btn.addEventListener("click", async function () {
    let id = Math.floor(Math.random() * 1024) + 1;
    let fetchid = "https://pokeapi.co/api/v2/pokemon/" + id;

    try {
        output.innerHTML = "Loading...";
        imgElement.style.display = "none";

        let response = await fetch(fetchid);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        let data = await response.json();

        imgElement.src = data.sprites.front_default;

        // Capitalize name
        output.innerHTML =
            data.name.charAt(0).toUpperCase() + data.name.slice(1);

        imgElement.style.display = "block";

    } catch (error) {
        console.error(error);
        output.innerHTML = "Error loading Pokémon";
    }
});
  
