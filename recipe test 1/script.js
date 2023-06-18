const appId = "5c2b932c";
const appKey = "0d2044c29c5e4b85c082d68ca536e51a";
const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");

const recipeCard = ({ title, imageUrl, recipeUrl, ingredientsArray }) => `
<div class="max-w-2xl mx-auto">
    
    <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src="${imageUrl}">
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">${title}</h5>
            </a>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">${
              ingredientsArray.length > 0 &&
              ingredientsArray.slice(0, 5).join(", ")
            }</p>
            <a href="${recipeUrl}" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
`;
const startSearch = async () => {
  try {
    button.disabled = true;
    button.innerText = "Searching";
    container.innerHTML = "";
    const query = input.value;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;
    const res = await fetch(url);
    const { hits } = await res.json();
    console.log(hits);
    hits.forEach(({ recipe }) => {
      const card = document.createElement("div");
      card.classList.add("p-6");
      card.innerHTML = recipeCard({
        title: recipe.label,
        imageUrl: recipe.image,
        recipeUrl: recipe.url,
        ingredientsArray: recipe.ingredientLines,
      });
      container.append(card);
    });
  } catch (error) {
    console.log(error)
  } finally {
    button.disabled = false;
    button.textContent = "Search";
  }
};
button.addEventListener('click', startSearch)