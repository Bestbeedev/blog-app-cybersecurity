export const fetchSponsors = async () => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(`${API_URL}/sponsors`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};