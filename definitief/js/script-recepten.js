fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=9ade122b896a44618e77c3a321e133cd&query=bread')
    .then(response => response.json())
    .then(data => {
        const recipes = data.results || data; // Controleer verschillende mogelijke API-structuren
        let html = '<div class="accordion accordion-flush" id="accordionExample">';

        for (let recipe of recipes) {
            html += `<div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${recipe.id}" aria-expanded="false" aria-controls="collapse${recipe.id}">
                                ${recipe.title}
                            </button>
                        </h2>
                        <div id="collapse${recipe.id}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <img src="${recipe.image}" style="max-height: 150px;" class="float-start img-sm p-3" alt="">
                                <span class="h6 mt-2">ingrediënten</span>: ${getIngredients(recipe)} <hr>
                                <span class="h6 mt-2">bereiding</span>: ${recipe.instructions || 'Geen instructies beschikbaar.'}
                            </div>
                        </div>
                    </div>`;
        }

        html += '</div>';
        document.getElementById("recepten").innerHTML = html;
    })
    .catch(error => console.error('Error fetching data:', error));

// Functie om ingrediënten op te halen op basis van de API-structuur
function getIngredients(recipe) {
    if (recipe.extendedIngredients) {
        return recipe.extendedIngredients.map(ingredient => ingredient.originalString).join(', ');
    } else if (recipe.ingredients) {
        return recipe.ingredients.join(', ');
    } else {
        return 'Geen ingrediënten beschikbaar.';
    }
}
