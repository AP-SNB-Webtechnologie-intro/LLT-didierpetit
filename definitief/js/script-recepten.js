/* 
Surf naar de "coffee API" op https://sampleapis.com/api-list/coffee
Zoek naar de correct url met endpopint waarbij je 20 resultaten van hot-coffee-recepten in een json-file te zien krijgt.
Test of je de correcte endpoint hebt in Postman. Pas nadien "fetch" je de correcte link naar de API in de code hieronder.
*/

fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=9ade122b896a44618e77c3a321e133cd&query=bread')
    // maak van het antwoord een JSON antwoord
    .then(response => response.json())
    // lees de json uit en zet om naar HTML
    .then(json => {
        // lees het volledige antwoord uit in de console (verwijder deze regel code wanneer je klaar bent)
        // plaats een section met grid
        let html = '<div class="accordion accordion-flush" id="accordionExample">';
        // plaats van de recepten met naam, ingerdiënten, afbeelding,... in HTML
        // op regel 25 plaats je tussen de accolades de titel van het recept in
        // op regel 31 laadt je de juiste "keys" van het recept in.
        for (let recipe of json) {
            
            html += `<div class="accordion-item">

            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${recipe.id}" aria-expanded="false" aria-controls="collapse${recipe.id}">
                ${recipe.title}
                </button>
              </h2>
              <div id="collapse${recipe.id}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <img src="${recipe.image}" style="max-height: 150px;" class="float-start img-sm p-3" alt=""><span class="h6 mt-2 koffiebruin">ingrediënten</span>:
               ${recipe.ingredients} <hr>
               <span class="h6 mt-2">bereiding</span>:
               ${recipe.description}</div>
            </div>
      </div>`;
        }
        html += '</div>';
        document.getElementById("recepten").innerHTML = html;
    });