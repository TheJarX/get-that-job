import moment from "moment";

export const capitalizeWord = (str) => str[0].toUpperCase() + str.slice(1);
export const snakeKeytoCamelcase = (key) =>
  key.replace(/(_\w)/g, (match) => match[1].toUpperCase());

const formatPastDate = (str) => (/Today/.test(str) ? str : `${str} ago`);

export const dateAgo = (date) => {
  const momentDate = moment(date);
  const dateDifference = momentDate.diff(moment(new Date()), "d");
  if (dateDifference === 0 && momentDate.day() === moment(new Date()).day()) {
    return "Today";
  } else if (dateDifference <= 0 && dateDifference >= -1) {
    return "Yesterday";
  } else {
    return formatPastDate(momentDate.fromNow(true));
  }
};

export const getFlag = async (country) => {
  try {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    return data.flag;
  } catch (error) {
    return "https://vignette.wikia.nocookie.net/future/images/b/b0/No_flag.svg/revision/latest/scale-to-width-down/340?cb=20170820233350";
  }
};

export const API_URL = "http://127.0.0.1:3000";
export const HEADERS = {
  "Content-Type": "application/json",
  "Key-Inflection": "camel",
};

export async function makeRequest(url, method, body = {}, headers = {}) {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        ...headers,
        ...HEADERS,
      },
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    return { error: error.toString() };
  }
}

export async function makeGetRequest(url, headers) {
  try {
    const response = await fetch(url, {
      headers: {
        ...headers,
        ...HEADERS,
      },
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    return { error: error.toString() };
  }
}

export function makeRequestWithToken({
  url,
  token,
  method = "GET",
  headers = {},
  body = {},
}) {
  headers = {
    ...headers,
    Authorization: `Bearer ${token}`,
  };
  return method.toLowerCase() === "get"
    ? makeGetRequest(url, headers)
    : makeRequest(url, method, body, headers);
}
