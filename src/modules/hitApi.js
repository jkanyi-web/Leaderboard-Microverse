/** @format */

const hitApi = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'rock-paper-scissors',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = await response.json();
  return data.result.split(' ')[3];
};

const callApi = async () => {
  const id = localStorage.getItem('id');

  if (id) {
    return;
  }
  const newId = await hitApi();
  localStorage.setItem('id', newId);
};

export default callApi;
