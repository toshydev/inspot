export default async function handler(request, response) {
  try {
    const baseURL = "https://app.ticketmaster.com/discovery/v2/";
    const { slug, ...query } = request.query;
    const url =
      baseURL +
      slug +
      "?" +
      new URLSearchParams({
        apikey: process.env.API_KEY,
        ...query,
      }).toString();

    const fetchedData = await fetch(url);
    if (!fetchedData.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await fetchedData.json();
      error.status = fetchedData.status;
      throw error;
    } else {
      const data = await fetchedData.json();
      return response.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ Message: "error" });
  }
}
