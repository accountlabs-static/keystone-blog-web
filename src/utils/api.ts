import qs from 'qs';

const contentUrl = process.env.CONTENT_URL;
const bearerToken = process.env.API_TOKEN;

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  const mergedOptions = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    },
    ...options,
  }

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${contentUrl}/api${path}${queryString ? `?${queryString}` : ''}`  
  const response = await fetch(requestUrl, mergedOptions)
  

  if (!response.ok) {
    console.error(response.statusText)
    throw new Error('An error occurred please try again')
  }
  const data = await response.json()
  return data
}