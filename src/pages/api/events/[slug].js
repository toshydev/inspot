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

    const fetchData = await fetch(url);
    if (!fetchData.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await fetchData.json();
      error.status = fetchData.status;
      throw error;
    } else {
      const data = await fetchData.json();
      console.log("fetched data: ", data);
      return response.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    return response.status(500).json({ Message: "error" });
  }
}
