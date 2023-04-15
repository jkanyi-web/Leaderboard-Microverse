/** @format */

const receiveData = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GHKOyOvQob3Ow34Iv2i1/scores/',
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Response not OK');
    })
    .then((data) => {
      let markup = '';
      data.result.forEach((item) => {
        markup += `<p>${item.user}: ${item.score}</p>`;
      });
      document.querySelector('.score-table').innerHTML = markup;
    })
    .catch((error) => {
      document.querySelector('.error').textContent = error;
    });
};

export default receiveData;
