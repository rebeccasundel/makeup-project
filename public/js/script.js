document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Makeup-Project JS imported successfully!");
  },
  false
);

const getProductInfo = brand => {
  axios
    .get(`http://makeup-api.herokuapp.com/api/v1/products.json?${brand}`)
    .then(response => {
      const productDetail = response.data[0];
      document.getElementById('product-brand').innerText = productDetail.brand;
      document.getElementById('product-name').innerText = productDetail.name;
      document.getElementById('product-description').innerText = productDetail.description;
      document.getElementById('image_link').setAttribute('src', productDetail.image_link);

    })
    .catch(err => {
      console.log(err);
      err.response.status === 404 ? alert(`The product${brand} doesn't exist.`) : alert('Server error! Sorry.');
    });
};

document.getElementById('get-product-btn').addEventListener('click', () => {
  const userInput = document.getElementById('product-name-input').value;
  getProductInfo(userInput);
});