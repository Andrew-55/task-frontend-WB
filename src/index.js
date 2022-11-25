import './index.html';
import './index.scss';
import {
  getLamps,
  addDescModel,
  changeImageBlock,
  removeSkeletonImg,
  addItems,
  checkDarkMode,
  addClassBlock,
  removeClassBlock,
  addOnclickAllItemsBlock,
} from './modules/functions';

const url = 'https://private-anon-47dcf56d44-lampshop.apiary-mock.com/lamps';
let activeModel = 0;
let stateLamps = [];
const descBlock = document.getElementById('desc__block');
const designBlock = document.getElementById('design__block');
const selectBloks = document.getElementsByClassName('select-model__item');
const modelItems = document.getElementById('model__items');
const switchDark = document.getElementById('switch__dark');
const switchLight = document.getElementById('switch__light');

switchDark.onclick = () => {
  if (stateLamps[activeModel].isDarkMode) {
    addClassBlock(designBlock, 'dark-mode');
  }
};
switchLight.onclick = () => {
  removeClassBlock(designBlock, 'dark-mode');
};

getLamps(url).then((data) => {
  stateLamps = [...data];

  removeSkeletonImg(modelItems);
  addDescModel(data[activeModel]);
  addItems(data, modelItems);
  checkDarkMode(selectBloks[activeModel], switchDark);
  addClassBlock(selectBloks[activeModel], 'active');

  Array.from(selectBloks).forEach((elem, index) => {
    elem.onclick = () => {
      document.querySelector('.select-model__item.active')?.classList.remove('active');
      addClassBlock(elem, 'active');
      addDescModel(stateLamps[index]);
      changeImageBlock(descBlock, stateLamps[index].image, stateLamps[index].id);
      changeImageBlock(designBlock, stateLamps[index].image, stateLamps[index].id);
      activeModel = index;
      if (!stateLamps[activeModel].isDarkMode) {
        removeClassBlock(designBlock, 'dark-mode');
        addClassBlock(switchDark, 'disable-btn');
      }
      if (stateLamps[activeModel].isDarkMode) {
        removeClassBlock(switchDark, 'disable-btn');
      }
    };
  });

  changeImageBlock(descBlock, data[activeModel].image, data[activeModel].id);
  changeImageBlock(designBlock, data[activeModel].image, data[activeModel].id);
});
