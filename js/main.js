document.querySelectorAll('.card').forEach((card) => {
	card.addEventListener('click', function () {
		const selectedDish = this.getAttribute('data-dish');
		localStorage.setItem('selectedDish', selectedDish);
		populateDishDetails(selectedDish);
	});
});

function populateDishDetails(selectedDish) {
	const dishDetails = {
		Adobo: {
			ingredients: `
        <h3>Ingredients:</h3>
        <ul class="checklist">
            <li>Chicken or Pork</li>
            <li>Soy sauce</li>
            <li>Vinegar</li>
            <li>Garlic</li>
            <li>Bay leaves</li>
            <li>Peppercorns</li>
        </ul>
        `,
			procedure: `
        <h3>Procedure:</h3>
        <ol>
            <li>Marinate meat for 30 minutes.</li>
            <li>Simmer for 40 minutes.</li>
            <li>Serve hot with rice.</li>
        </ol>
        `,
		},
		Sinigang: {
			ingredients: `
        <h3>Ingredients:</h3>
        <ul class="checklist">
            <li>Tamarind soup base</li>
            <li>Pork or Fish</li>
            <li>Tomatoes</li>
            <li>Onion</li>
            <li>Radish</li>
            <li>Eggplant</li>
            <li>Okra</li>
            <li>Siling labuyo (optional)</li>
        </ul>
        `,
			procedure: `
        <h3>Procedure:</h3>
        <ol>
            <li>Boil for 20 minutes.</li>
            <li>Add vegetables, simmer for 10 minutes.</li>
            <li>Adjust seasonings and serve hot.</li>
        </ol>
        `,
		},
		Sisig: {
			ingredients: `
        <h3>Ingredients:</h3>
        <ul class="checklist">
            <li>Pork face (or cheeks)</li>
            <li>Onions, finely chopped</li>
            <li>Chili peppers, chopped</li>
            <li>Calamansi</li>
            <li>Mayonnaise (optional)</li>
            <li>Salt &amp; Pepper</li>
        </ul>
        `,
			procedure: `
        <h3>Procedure:</h3>
        <ol>
            <li>Boil for 20 minutes.</li>
            <li>Grill for 5 minutes.</li>
            <li>Dice and stir-fry for 3-5 minutes.</li>
        </ol>
        `,
		},
	};

	document.getElementById('dishTitle').textContent =
		selectedDish + ' - Recipe Details';
	document.getElementById('ingredients').innerHTML =
		dishDetails[selectedDish].ingredients;
	document.getElementById('procedure').innerHTML =
		dishDetails[selectedDish].procedure;

	document.getElementById('dish-selection').style.display = 'none';
	document.getElementById('details-timer').style.display = 'flex';
}
