/** @format */

import './style.css';

import callApi from './modules/hitApi.js';
import postData from './modules/postData.js';
import receiveData from './modules/receiveData.js';

const form = document.querySelector('form');
const refreshBtn = document.getElementById('refresh');

callApi();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData(e);
});

receiveData();
refreshBtn.addEventListener('click', () => {
  receiveData();
});
