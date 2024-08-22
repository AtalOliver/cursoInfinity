document.getElementById('calcForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const number = parseInt(document.getElementById('numberInput').value);
  if (number > 0) {
      document.getElementById('factorialResult').textContent = `Fatorial de ${number}: ${calculateFactorial(number)}`;
      document.getElementById('fibonacciResult').textContent = `Sequência de Fibonacci até ${number}: ${calculateFibonacci(number).join(', ')}`;
  } else {
      alert('Por favor, insira um número inteiro positivo.');
  }
});

function calculateFactorial(num) {
  if (num === 0 || num === 1) {
      return 1;
  }
  return num * calculateFactorial(num - 1);
}

function calculateFibonacci(num) {
  let fibonacciSequence = [0, 1];
  for (let i = 2; i <= num; i++) {
      fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }
  return fibonacciSequence;
}