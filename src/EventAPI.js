import convertCountryCode from "./Utils/convertCountryCode";

export async function GetEventsFromAPI(info) {
  let EventUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=`;
  let apiKey = process.env.REACT_APP_TICKETMASTER_API_KEY;
  let cityKey = "&locale=*&city=";

    let  fullUrl = EventUrl + apiKey + cityKey + info
  


  console.log("Fetching events....");

  console.log(`getting events by location `, info);

  try {
    let response = await fetch(fullUrl);
    //  if response is ok
    if (response.ok) {
      // wait for data
      let ticketmaster = await response.json();

      console.log("Event data response: ", ticketmaster._embedded.events);

      return ticketmaster._embedded.events;
    } else {
      console.log("Server error:", response.status, response.statusText);
    }
  } catch (err) {
    console.log("Network error:", err);
  }
}
