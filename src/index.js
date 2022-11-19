import './index.html';
import './index.scss';

const url = 'https://private-anon-47dcf56d44-lampshop.apiary-mock.com/lamps';
let startModel = 0;

const getLamps = async () => {
  try {
    let response = await fetch(url);
    let array = await response.json();
    return array;
  } catch (error) {
    alert('Sorry, the server is unavailable :(\nTry again later.');
  }
};

const addImageBlock = (block, imageUrl) => {
  const image = document.createElement('img');
  image.src = `${imageUrl}`;
  block.appendChild(image);
};
const addDescModel = (obj) => {
  document.getElementById('material').innerHTML = obj.material;
  document.getElementById(
    'dimensions',
  ).innerHTML = `H ${obj.height} x W ${obj.width} x D ${obj.width}`;
  document.getElementById('weight').innerHTML = `${obj.weight} kg`;
  document.getElementById('electrification').innerHTML = obj.electrification;
};


getLamps().then((data) => {
  addDescModel(data[startModel]);

  const selectBloks = document.getElementsByClassName('select-model__item');
  for (let i = 0; i < selectBloks.length; i++) {
    addImageBlock(selectBloks[i], data[i].image);
  };

  const descBlock = document.getElementById("desc__block");
  addImageBlock(descBlock, data[startModel].image);

  const designBlock = document.getElementById("design__block");
  addImageBlock(designBlock, data[startModel].image);

});
