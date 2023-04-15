/** @format */
const id = localStorage.getItem('id');

const postData = async (e) => {
  const name = e.target.querySelector('.name').value;
  const score = e.target.querySelector('.score').value;

  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
};

export default postData;
