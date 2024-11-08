function calculate(operation) {
    const num1 = document.getElementById('number1').value.trim();
    const num2 = document.getElementById('number2').value.trim();
    const resultDisplay = document.getElementById('result');
    
    // Перевірка на пусті поля
    if (num1 === '' || num2 === '') {
        resultDisplay.textContent = 'Будь ласка, введіть обидва числа';
        return;
    }
    
    // Перевірка на коректність введених даних (перевірка, що значення - числа)
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = 'Введіть коректні числа';
        return;
    }
    
    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultDisplay.textContent = 'Помилка: ділення на нуль неможливе';
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultDisplay.textContent = 'Невідома операція';
            return;
    }
    
    // Округлення результату до сотих
    if (typeof result === 'number') {
        result = Math.round(result * 100) / 100;
    }

    resultDisplay.textContent = `Результат: ${result}`;
}
