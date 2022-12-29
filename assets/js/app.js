var cl = console.log;

var phones = [
  { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
  { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
  { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
  { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
  { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
];

var tableInfo = document.getElementById("tableInfo");

result1 = '';


phones.forEach(function(phone, i){
  //cl(phone)

  result1 += `<tr>
              <th>${i + 1}</th>
              <th>${phone.name}</th>
              <th>${phone.price}</th>
              <th>${phone.color}</th>
              <th>${phone.storage}</th>
              <th>${phone.camera}</th>
              <tr>`
});

tableInfo.innerHTML = result1;

var cityes = [
  {
      "name": "USA",
      "population": 331002651,
      "area": 9833520,
      "capital": "Washington, D.C.",
      "language": "English"
  },
  {
      "name": "Canada",
      "population": 37411047,
      "area": 9984670,
      "capital": "Ottawa",
      "language": "English and French"
  },
  {
      "name": "Mexico",
      "population": 127575529,
      "area": 1964375,
      "capital": "Mexico City",
      "language": "Spanish"
  },
  {
      "name": "France",
      "population": 66710000,
      "area": 640679,
      "capital": "Paris",
      "language": "French"
  },
  {
      "name": "Germany",
      "population": 82790000,
      "area": 357114,
      "capital": "Berlin",
      "language": "German"
  },
];

var countryele = document.getElementById('countryele');

result2 = '';

cityes.forEach(function(city,i){
  //cl(capi)

  result2 += `<tr>
              <th>${i + 1}</th>
              <th>${city.name}</th>
              <th>${city.population}</th>
              <th>${city.area}</th>
              <th>${city.capital}</th>
              <th>${city.language}</th>
              </tr>`
});
countryele.innerHTML = result2





