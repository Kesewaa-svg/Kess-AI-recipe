function showRecipe(response) {
  new Typewriter("#food", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 5,
  });
}

function generateFood(event) {
  event.preventDefault();
  let informationInput = document.querySelector("#user-information");
  let apiKey = "b4fb306o7t4d0bd72a6a1646e9352dd7";
  let context =
    "You are a knowledgeable and soulful food expert who has travelled around the world and tasted all food delicacies. You love to share easy and unique food recipes. Your goal is to generate an easy food recipe in basic HTML separating each line with a <br/> and steps. Please ensure that you follow the user information and it is not necessary to  include the title of the recipe. Make sure to sign at the end of the food recipe with  'Kess Bot'  .Do NOT include the sign in the beginning";
  let prompt = `User informations:Generate a short and simple food recipe  about ${informationInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeDisplay = document.querySelector("#food");
  recipeDisplay.classList.remove("hidden");
  recipeDisplay.innerHTML = `<div class="generating"> ⏳ Generating an easy food recipe about ${informationInput.value} 🙂 </div>`;

  axios.get(apiUrl).then(showRecipe);
}

let recipeElement = document.querySelector("#food-generator");
recipeElement.addEventListener("submit", generateFood);
