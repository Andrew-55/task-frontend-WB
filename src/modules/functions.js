export const getLamps = async (url) => {
  try {
    let response = await fetch(url);
    let array = await response.json();
    return array;
  } catch (error) {
    alert('Sorry, the server is unavailable :(\nTry again later.');
  }
};

export const addImageBlock = (block, imageUrl, nameClass) => {
  const image = document.createElement('img');
  image.src = `${imageUrl}`;
  image.classList.add(nameClass);
  block.appendChild(image);
};

export const addDescModel = (obj) => {
  document.getElementById('material').innerHTML = obj.material;
  document.getElementById(
    'dimensions',
  ).innerHTML = `H ${obj.height} x W ${obj.width} x D ${obj.width}`;
  document.getElementById('weight').innerHTML = `${obj.weight} kg`;
  document.getElementById('electrification').innerHTML = obj.electrification;
};

export const changeImageBlock = (block, imageUrl, id) => {
  const img = block.getElementsByClassName('image-changet')[0];
  img.remove();
  addImageBlock(block, imageUrl, 'image-changet');
  if (id === 2) {
    const imgNew = block.getElementsByClassName('image-changet')[0];
    imgNew.classList.add('image-changet_short');
  }
};

export const removeSkeletonImg = (block) => {
  Array.from(block.getElementsByClassName('skeleton')).forEach((elem) => elem.remove());
};

export const addItems = (listsItems, block) => {
  Array.from(listsItems).forEach((item) => {
    const model = document.createElement('div');
    model.classList.add('select-model__item');
    block.appendChild(model);
    addImageBlock(model, item.image, 'image-selects');
  });
};

export const checkDarkMode = (item, button) => {
  if (!item.isDarkMode) {
    button.classList.add('disable-btn');
  }
};

export const addClassBlock = (block, nameCLass) => {
  block.classList.add(nameCLass);
};

export const removeClassBlock = (block, nameClass) => {
  block.classList.remove(nameClass);
};
