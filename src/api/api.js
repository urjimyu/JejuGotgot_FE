const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const getInstance = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('서버에서 데이터를 받아오는 중 문제가 생겼습니다.');
  }

  return response.json();
};

const postInstance = async (url, data) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('서버에 데이터를 전송하는 중 문제가 생겼습니다.');
  }

  return response.json();
};

export function get(url) {
  return getInstance(url);
}

export function post(url, data) {
  return postInstance(url, data);
}
