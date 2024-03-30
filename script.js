document.getElementById('calculateBtn').addEventListener('click', function() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        var bmi = weight / (height * height);
        var resultText = 'Seu IMC é: ' + bmi.toFixed(2);
        
        if (bmi < 18.5) {
            resultText += '<br> Você está abaixo do peso.';
        } else if (bmi >= 18.5 && bmi < 25) {
            resultText += '<br> Seu peso está normal.';
        } else if (bmi >= 25 && bmi < 30) {
            resultText += '<br> Você está acima do peso.';
        } else {
            resultText += '<br> Você está obeso.';
        }
        
        document.getElementById('result').innerHTML = resultText;
    } else {
        document.getElementById('result').innerHTML = 'Por favor, insira valores válidos.';
    }
});
