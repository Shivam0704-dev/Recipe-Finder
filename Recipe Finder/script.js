const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const recipeContainer = document.getElementById('recipe-container');

    searchBtn.addEventListener('click', () => {
      const query = searchInput.value;
      if (!query) return;
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => {
          recipeContainer.innerHTML = '';
          if (!data.meals) {
            recipeContainer.innerHTML = '<p>No recipes found.</p>';
            return;
          }
          data.meals.forEach(meal => {
            const card = document.createElement('div');
            card.className = 'recipe-card';

            card.innerHTML = `
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <h2 class="recipe-title">${meal.strMeal}</h2>
              <p>${meal.strCategory}</p>
              <ul class="nutrition-list">
                <li><strong>Area:</strong> ${meal.strArea}</li>
                <li><strong>Tags:</strong> ${meal.strTags || 'N/A'}</li>
              </ul>
            `;
            recipeContainer.appendChild(card);
          });
        })
        .catch(err => {
          recipeContainer.innerHTML = '<p>Error fetching recipes. Try again later.</p>';
        });
    });