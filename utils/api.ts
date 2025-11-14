export const fetchCouponsFromAPI = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error in the API request');
  }
  return await response.json();
};