// Código del cuadrado
console.group('Squares');
//const squareSide = 5;
//console.log('Los lados del cuadrado miden: ' + squareSide + ' centímetros');
//const squarePerimeter = squareSide * 4;

//FUNCIÓN TRADICIONAL
/*function squarePerimeter(side){
     return side * 4;
}*/
//FUNCIÓN FLECHA
let squarePerimeter = side => side * 4;

//console.log('El perímetro del cuadrado es: ' + squarePerimeter + ' centímetros');

//const squareArea = squareSide * squareSide;

//FUNCIÓN TRADICIONAL
/*function squareArea(side){
    return lado * lado;
}*/
//FUNCIÓN FLECHA
let squareArea = side => side * side;

//console.log('El area del cuadrado es: ' + squareArea + 'ctm2');
//LLAMAR A LAS FUNCIONES EN LA CONSOLA Y COLOCAR CUALQUIER NUMERO COMO PARAMETRO PARA QUE NOS DE EL RESULTADO
console.groupEnd('Squares');

// Código del triángulo
console.group('Triangles');
/*const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter= triangleSide1 + triangleSide2 + triangleBase;*/

//function trianglePerimeter(triangleSide1, triangleSide2, triangleBase){
  //  return triangleSide1 + triangleSide2 + triangleBase
//};
let trianglePerimeter = (triangleSide1, triangleSide2, triangleBase) => triangleSide1 + triangleSide2 + triangleBase;
//LLAMAR A LAS FUNCIONES EN LA CONSOLA Y COLOCAR CUALQUIER NUMERO COMO PARAMETRO PARA QUE NOS DE EL RESULTADO

/*const triangleArea = (triangleBase * triangleHeight) / 2;

console.log(
    'Los lados del triángulo miden ' 
    + triangleSide1 
    + 'ctms, ' 
    + triangleSide2 
    + 'ctms, ' 
    + triangleBase 
    + 'ctms'
    )
console.log('La altura del triángulo es de: ' + triangleHeight + 'ctms');
console.log('El perímetro del triángulo es de: ' + trianglePerimeter + 'ctms');
console.log('El area del triángulo es de: ' + triangleArea + 'ctms');*/

console.groupEnd('Triangles');    

// Código del Circle
console.group('Circles');
//const circleRadio = 4
//const circleDiameter = circleRadio * 2;

//function circleDiameter(radio){
  //  return radio * 2
//};
let circleDiameter = radio => radio * 2;

const PI = 3.1415;
//const PI = Math.PI;
/*const circlePerimeter = circleDiameter * PI;*/

function circlePerimeter(radio){
   const diameter = circleDiameter(radio);
   return diameter * PI;
}

//const circleArea = (circleRadio * circleRadio) * PI;
//function circleArea(radio){
  //  return (radio * radio) * PI;
//}
let circleArea = radio => (radio * radio) * PI;

/*console.log('El radio del circulo es ' + circleRadio + 'ctms');
console.log('El diámetro del circulo es ' + circleDiameter + 'ctms');
console.log('PI es ' + PI );
console.log('El perímetro del circulo es ' + circlePerimeter + 'ctms');
console.log('El area del circulo es ' + circleArea + 'ctms2');*/

console.groupEnd('Circles');

//Interactuamos con el HTML
//FUNCIONES DEL CUADRADO
function calculateSquarePerimeter(){
  const input = document.getElementById('SquareInput');
  const value = input.value;

  const perimeter = squarePerimeter(value);
  alert(perimeter);
}


function calculateSquareArea(){
  const input = document.getElementById('SquareInput');
  const value = input.value;

  const area= squareArea(value);
  alert(area);
}

//FUNCIÓN DEL TRIÁNGULO

function triangleHeight(sideA, sideB, sideC){
  if (sideA != sideB){
    console.error('Los lados A y B no son iguales');
  }else{

  }
}

function isoscelesTriangleHeight(bigTriangleSideA, bigTriangleSideB, bigTriangleSideBase){
  if (bigTriangleSideA != bigTriangleSideB){
    console.error('Los lados A y B no son iguales');
  } else {
   // let littleTriangleSideA; //PENDIENTE
    const littleTriangleSideB = bigTriangleSideBase / 2;
    const littleTriangleSideBase = bigTriangleSideA;

    const littleTriangleSideB2 = littleTriangleSideBase * littleTriangleSideB;
    const littleTriangleSideBase2 = littleTriangleSideBase * littleTriangleSideBase;

    const littleTriangleSideA = Math.sqrt(littleTriangleSideBase2 - littleTriangleSideB2);
    
    const bigTriangleHeight = littleTriangleSideA;
    return bigTriangleHeight;
  }
}