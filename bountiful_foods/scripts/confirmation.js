// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the input values
const firstName = urlParams.get('firstname');
const email = urlParams.get('email');
const phone = urlParams.get('phone');
const fruit1 = urlParams.get('fruit1');
const fruit2 = urlParams.get('fruit2');
const fruit3 = urlParams.get('fruit3');
const specialInstructions = urlParams.get('instructions');

// Get the order date
const orderDate = new Date().toLocaleDateString();

// Read the nutrition facts from the local JSON file
fetch('./data/fruit.json')
    .then(response => response.json())
    .then(nutritionFacts => {
        // Get the nutrition facts for the selected fruits
        const fruits = [fruit1, fruit2, fruit3];
        const totalNutritionFacts = {
            calories: 0,
            fat: 0,
            sugar: 0,
            carbohydrates: 0,
            protein: 0
        };
        fruits.forEach(fruit => {
            const nutrition = nutritionFacts.find(n => n.name === fruit).nutritions;
            totalNutritionFacts.calories += nutrition.calories;
            totalNutritionFacts.fat += nutrition.fat;
            totalNutritionFacts.sugar += nutrition.sugar;
            totalNutritionFacts.carbohydrates += nutrition.carbohydrates;
            totalNutritionFacts.protein += nutrition.protein;
        });

        // Round the nutritional facts to two decimal places
        totalNutritionFacts.fat = totalNutritionFacts.fat.toFixed(2);
        totalNutritionFacts.sugar = totalNutritionFacts.sugar.toFixed(2);
        totalNutritionFacts.carbohydrates = totalNutritionFacts.carbohydrates.toFixed(2);
        totalNutritionFacts.protein = totalNutritionFacts.protein.toFixed(2);

        // Display the input values, order date, and nutrition facts
        const output = document.getElementById('output');
        output.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Fruit 1:</strong> ${fruit1}</p>
            <p><strong>Fruit 2:</strong> ${fruit2}</p>
            <p><strong>Fruit 3:</strong> ${fruit3}</p>
            <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
            <p><strong>Order Date:</strong> ${orderDate}</p>
            <p><strong>Nutrition Facts:</strong></p>
            <ul>
                <li>Calories: ${totalNutritionFacts.calories} kcal</li>
                <li>Fat: ${totalNutritionFacts.fat} g</li>
                <li>Sugar: ${totalNutritionFacts.sugar} g</li>
                <li>Carbohydrates: ${totalNutritionFacts.carbohydrates} g</li>
                <li>Protein: ${totalNutritionFacts.protein} g</li>
            </ul>
        `;
    });