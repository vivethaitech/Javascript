function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    
    if (weight === '' || height === '') {
        alert('Please fill out both fields');
        return;
    }
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);

    let resultText;

    if (bmiRounded < 18.5) {
        resultText = "Your BMI is" + bmiRounded+ "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = "Your BMI is" + bmiRounded+ "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = "Your BMI is" + bmiRounded+ "You are overweight.";
    } else {
        resultText = "Your BMI is"+ bmiRounded+"You are obese.";
    }

    document.getElementById('result').innerText = resultText;
}
