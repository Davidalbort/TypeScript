(() =>{
let prices = [1,2,2,1,1,'hola', true];
// price.push('asas');
//price.push(true);
//price.push({});
prices.push(121232);

let products = ['hola', true];
products.push(false);

let mixed : (number | string | boolean | Object)[] = ['hola',true];
mixed.push(12);
mixed.push('as');
mixed.push(true);
mixed.push({});
mixed.push([]);
})();