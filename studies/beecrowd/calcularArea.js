const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');

function calcularAreaCirculo() {
    const PI = 3.14159;
    
    const raio = parseFloat(input);
    
    const area = PI * Math.pow(raio, 2);

    console.log(`A=${area.toFixed(4)}`);
}

calcularAreaCirculo();