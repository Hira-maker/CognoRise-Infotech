// Select DOM elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const bmiResultEl = document.getElementById('bmiResult');
const bmiCategoryEl = document.getElementById('bmiCategory');

// Add event listener to the calculate button
calculateBtn.addEventListener('click', calculateBMI);

// Function to calculate BMI and update the result
function calculateBMI() {
    const weight = parseFloat(weightInput.value); // Get the value from weight input
    const height = parseFloat(heightInput.value) / 100; // Convert height from cm to meters

    // Check if input values are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid positive values for weight and height.');
        return; // Stop function execution if inputs are invalid
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Get BMI category based on the calculated value
    const bmiCategory = getBMICategory(bmi);

    // Display the BMI result and category
    bmiResultEl.textContent = bmi.toFixed(2); // Round to 2 decimal places
    bmiCategoryEl.textContent = `Category: ${bmiCategory}`;
}

// Function to determine the BMI category based on the BMI value
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
