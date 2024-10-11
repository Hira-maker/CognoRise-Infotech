// Select DOM elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const bmiResult = document.getElementById('bmiResult');
const bmiCategory = document.getElementById('bmiCategory');

// Add event listener to the calculate button
calculateBtn.addEventListener('click', calculateBMI);

// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    // Validate input
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    // Convert height from cm to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    // Display BMI result
    bmiResult.textContent = bmi;

    // Determine BMI category and display message
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display BMI category
    bmiCategory.textContent = `Category: ${category}`;
}
