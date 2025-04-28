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
			<li>
				<input type="checkbox" id="adobo_proc_1">
				<label for="adobo_proc_1">
					Place your chicken or pork in a bowl.
				</label>
			</li>
			<li>
				<input type="checkbox" id="adobo_proc_2">
				<label for="adobo_proc_2">
					Marinate it in soy sauce and vinegar for <strong>30 minutes</strong>.
				</label>
			</li>
			<li>
				<input type="checkbox" id="adobo_proc_3">
				<label for="adobo_proc_3">
					In a pan, sauté garlic until the aroma fills the kitchen.
				</label>
			</li>
			<li>
				<input type="checkbox" id="adobo_proc_4">
				<label for="adobo_proc_4">
					Then add your marinated meat along with bay leaves and peppercorns. Simmer over low heat for <strong>40 minutes</strong>.
				</label>
			</li>
			<li>
				<input type="checkbox" id="adobo_proc_5">
				<label for="adobo_proc_5">
					Once done, taste (Mom insists on perfection) and serve hot with rice.
				</label>
			</li>
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
			<li>
				<input type="checkbox" id="sinigang_proc_1">
				<label for="sinigang_proc_1">
					Toss your pork or fish into a large pot with tamarind soup base and tomatoes. Bring it to a boil and cook for <strong>20 minutes</strong>.
				</label>
			</li>
			<li>
				<input type="checkbox" id="sinigang_proc_2">
				<label for="sinigang_proc_2">
					Carefully add radish, eggplant, okra, and (if you dare) siling labuyo. Simmer for another <strong>10 minutes</strong>.
				</label>
			</li>
			<li>
				<input type="checkbox" id="sinigang_proc_3">
				<label for="sinigang_proc_3">
					Taste and adjust the seasonings as needed. Once the sour tang is just right, serve piping hot.
				</label>
			</li>
		</ul>
		`,
	},
	Sisig: {
		ingredients: `
		<h3>Ingredients:</h3>
		<ul class="checklist">
			<li><input type="checkbox" id="sisig1"> <label for="sisig1">Pork face (or cheeks)</label></li>
			<li><input type="checkbox" id="sisig2"> <label for="sisig2">Onions, finely chopped</label></li>
			<li><input type="checkbox" id="sisig3"> <label for="sisig3">Chili peppers (siling labuyo), chopped</label></li>
			<li><input type="checkbox" id="sisig4"> <label for="sisig4">Calamansi</label></li>
			<li><input type="checkbox" id="sisig5"> <label for="sisig5">Mayonnaise (optional)</label></li>
			<li><input type="checkbox" id="sisig6"> <label for="sisig6">Salt &amp; Pepper</label></li>
		</ul>
		`,
		procedure: `
		<h3>Procedure:</h3>
		<ul class="checklist">
			<li>
				<input type="checkbox" id="sisig_proc_1">
				<label for="sisig_proc_1">
					Boil the pork face (or cheeks) for about <strong>20 minutes</strong> until tender.
				</label>
			</li>
			<li>
				<input type="checkbox" id="sisig_proc_2">
				<label for="sisig_proc_2">
					Grill or broil the tender pork for approximately <strong>5 minutes</strong> to add a smoky char.
				</label>
			</li>
			<li>
				<input type="checkbox" id="sisig_proc_3">
				<label for="sisig_proc_3">
					Dice the pork and mix it with finely chopped onions and chili peppers.
				</label>
			</li>
			<li>
				<input type="checkbox" id="sisig_proc_4">
				<label for="sisig_proc_4">
					Squeeze in some calamansi, add a dollop of mayonnaise if you're feeling fancy, then season with salt and pepper.
				</label>
			</li>
			<li>
				<input type="checkbox" id="sisig_proc_5">
				<label for="sisig_proc_5">
					Stir-fry for <strong>3-5 minutes</strong> until sizzling hot.
				</label>
			</li>
		</ul>
		`,
	},
};

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

function populateDishDetails(selectedDish) {
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

document.querySelectorAll('.card').forEach((card) => {
	card.addEventListener('click', function () {
		const selectedDish = this.getAttribute('data-dish');
		localStorage.setItem('selectedDish', selectedDish);
		populateDishDetails(selectedDish);
	});
});

document.getElementById('backBtn').addEventListener('click', function () {
	localStorage.removeItem('selectedDish');
	document.getElementById('dish-selection').style.display = 'block';
	document.getElementById('details-timer').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
	const storedDish = localStorage.getItem('selectedDish');
	if (storedDish) {
		populateDishDetails(storedDish);
	}
});

document.getElementById('startTimerBtn').addEventListener('click', function () {
	const hours = parseInt(document.getElementById('hours').value) || 0;
	const minutes = parseInt(document.getElementById('minutes').value) || 0;
	const seconds = parseInt(document.getElementById('seconds').value) || 0;

	const totalSeconds = hours * 3600 + minutes * 60 + seconds;

	if (totalSeconds <= 0) {
		alert('Please enter a valid time greater than zero.');
		return;
	}

	localStorage.setItem('timerDuration', totalSeconds);
	localStorage.setItem('originalDuration', totalSeconds);

	window.location.href = 'timer.html';
});

document.getElementById('readyBtn').addEventListener('click', function () {
	const selectedDish = localStorage.getItem('selectedDish');
	if (selectedDish) {
		localStorage.removeItem(`checklist_data_${selectedDish}`);
	}
	localStorage.removeItem('selectedDish');
	localStorage.removeItem('timerDuration');
	localStorage.removeItem('originalDuration');
	window.location.href = 'index.html';
});
