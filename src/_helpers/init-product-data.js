localStorage.setItem('products', JSON.stringify(initProducts()));

function initProducts() {
  let p = [];

  for(let i = 1; i<=10; i++) {
    let id = 100 + i;
    let p1 = {
      id: id,
      name: 'Prodcut - ' + id,
      photo: '../assets/images/' + id + '.jpg',
      inStock: i % 2 == 0 ? true : false,
      basePrice: 100.00,
      currance: '$'
    };
    p.push(p1);  
  }

  return p;
}