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
            <li><input type="checkbox" id="adobo1"> <label for="adobo1">Chicken or Pork</label></li>
            <li><input type="checkbox" id="adobo2"> <label for="adobo2">Soy sauce</label></li>
            <li><input type="checkbox" id="adobo3"> <label for="adobo3">Vinegar</label></li>
            <li><input type="checkbox" id="adobo4"> <label for="adobo4">Garlic</label></li>
            <li><input type="checkbox" id="adobo5"> <label for="adobo5">Bay leaves</label></li>
            <li><input type="checkbox" id="adobo6"> <label for="adobo6">Peppercorns</label></li>
        </ul>
        `,
			procedure: `
        <h3>Procedure:</h3>
        <ul class="checklist">
            <li><input type="checkbox" id="adobo_proc_1"> <label for="adobo_proc_1">Marinate meat for 30 minutes.</label></li>
            <li><input type="checkbox" id="adobo_proc_2"> <label for="adobo_proc_2">Simmer for 40 minutes.</label></li>
            <li><input type="checkbox" id="adobo_proc_3"> <label for="adobo_proc_3">Serve hot with rice.</label></li>
        </ul>
        `,
		},
		Sinigang: {
			ingredients: `
        <h3>Ingredients:</h3>
        <ul class="checklist">
            <li><input type="checkbox" id="sinigang1"> <label for="sinigang1">Tamarind soup base</label></li>
            <li><input type="checkbox" id="sinigang2"> <label for="sinigang2">Pork or Fish</label></li>
            <li><input type="checkbox" id="sinigang3"> <label for="sinigang3">Tomatoes</label></li>
            <li><input type="checkbox" id="sinigang4"> <label for="sinigang4">Onion</label></li>
            <li><input type="checkbox" id="sinigang5"> <label for="sinigang5">Radish</label></li>
            <li><input type="checkbox" id="sinigang6"> <label for="sinigang6">Eggplant</label></li>
            <li><input type="checkbox" id="sinigang7"> <label for="sinigang7">Okra</label></li>
            <li><input type="checkbox" id="sinigang8"> <label for="sinigang8">Siling labuyo (optional)</label></li>
        </ul>
        `,
			procedure: `
        <h3>Procedure:</h3>
        <ul class="checklist">
            <li><input type="checkbox" id="sinigang_proc_1"> <label for="sinigang_proc_1">Boil for 20 minutes.</label></li>
            <li><input type="checkbox" id="sinigang_proc_2"> <label for="sinigang_proc_2">Add vegetables and simmer for 10 minutes.</label></li>
            <li><input type="checkbox" id="sinigang_proc_3"> <label for="sinigang_proc_3">Adjust seasonings and serve hot.</label></li>
        </ul>
        `,
		},
		Sisig: {
			ingredients: `
        <h3>Ingredients:</h3>
        <ul class="checklist">
            <li><input type="checkbox" id="sisig1"> <label for="sisig1">Pork face (or cheeks)</label></li>
            <li><input type="checkbox" id="sisig2"> <label for="sisig2">Onions, finely chopped</label></li>
            <li><input type="checkbox" id="sisig3"> <label for="sisig3">Chili peppers, chopped</label></li>
            <li><input type="checkbox" id="sisig4"> <label for="sisig4">Calamansi</label></li>
            <li><input type="checkbox" id="sisig5"> <label for="sisig5">Mayonnaise (optional)</label></li>
            <li><input type="checkbox" id="sisig6"> <label for="sisig6">Salt &amp; Pepper</label></li>
        </ul>
        `,
			procedure: `
        <h3>Procedure:</h3>
        <ul class="checklist">
            <li><input type="checkbox" id="sisig_proc_1"> <label for="sisig_proc_1">Boil for 20 minutes.</label></li>
            <li><input type="checkbox" id="sisig_proc_2"> <label for="sisig_proc_2">Grill for 5 minutes.</label></li>
            <li><input type="checkbox" id="sisig_proc_3"> <label for="sisig_proc_3">Dice and stir-fry for 3-5 minutes.</label></li>
        </ul>
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
	restoreChecklistState(selectedDish);
	attachChecklistListeners(selectedDish);
}

function attachChecklistListeners(selectedDish) {
	const checkboxes = document.querySelectorAll(
		'#details-timer input[type="checkbox"]'
	);
	checkboxes.forEach((cb) => {
		cb.addEventListener('change', function () {
			updateChecklistStorage(selectedDish);
		});
	});
}

function updateChecklistStorage(selectedDish) {
	const checkboxes = document.querySelectorAll(
		'#details-timer input[type="checkbox"]'
	);
	let state = {};
	checkboxes.forEach((cb) => {
		state[cb.id] = cb.checked;
	});
	localStorage.setItem(`checklist_data_${selectedDish}`, JSON.stringify(state));
}

function restoreChecklistState(selectedDish) {
	const storedData = localStorage.getItem(`checklist_data_${selectedDish}`);
	if (storedData) {
		const state = JSON.parse(storedData);
		for (let id in state) {
			const checkbox = document.getElementById(id);
			if (checkbox) {
				checkbox.checked = state[id];
			}
		}
	}
}
