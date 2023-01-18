import * as tokenService from './tokenService';

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/chat`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const sendMessage = async (id, message) => {
  try {
    const res = await fetch(BASE_URL + '/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify({ content: message }),
    });
  } catch (err) {
    console.log(err);
  }
};

export { index, sendMessage };
