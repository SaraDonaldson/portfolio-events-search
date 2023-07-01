import React, { useState, useEffect } from "react";
import { GetEventsFromAPI } from "../EventAPI"; 
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
// import LocationDropdown from "./Registration/LocationDropdown";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import EventCard from "./EventCard";
import EventsDisplayModal from "./EventsDisplayModal.jsx";
import prepareEventDetails from "../Utils/prepareEventDetails";
import { TextField, Grid } from "@mui/material";



function EventSearch() {

    const [events, setEvents] = useState();
    const [location, setLocation] = useState("");
    const [showEvents, setShowEvents] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [chosenEvents, setChosenEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [initialRender, setInitialRender] = useState(false)


  //Loads with user's current country in DB when loading
  useEffect(() => {
    if (!location && !initialRender) {
      getInitialLocation();
      setInitialRender(true)
    }
  }, []);

  //gets user location from local storage and sets it
  async function getInitialLocation() {
    await getEvents("london");
    setLocation("London")
  }


  function handleOpenModal(res) {
    setModalData(res);
    setIsOpen(true);
  }


  const handleLocationChange = async (e) => {
    e.preventDefault()
    console.log('The location',location)
    await getEvents(location);
    setShowEdit(!showEdit);
    console.log("events set as:", events);
  };

  async function getEvents(location) {
    // console.log(the)
    let results = await GetEventsFromAPI(location);
    let otherResults = await results.map((result) => {
      let eventdetails = prepareEventDetails(result, location);
      console.log(eventdetails)
      return eventdetails;
    });
    console.log("other Results", otherResults);

    await setEvents(otherResults);
    setShowEvents(true);
  }

  function handleCheckBoxChange(event) {
    let eventId = event.target.value;
    let checkedEvents = [...chosenEvents];
    if (checkedEvents.includes(eventId)) {
      let idIndex = checkedEvents.indexOf(eventId);
      checkedEvents.splice(idIndex, 1);
      setChosenEvents(checkedEvents);
    } else {
      checkedEvents.push(eventId);
      setChosenEvents(checkedEvents);
    }
    console.log(chosenEvents);
  }


  return (
    <div>  
      <div>
        <h2 className="choose-events">
          Events Near&nbsp;
          {!showEdit && (
            <>
              {location}
              <IconButton color="secondary" aria-label="Search">
                <EditIcon
                  onClick={() => {
                    setShowEdit(!showEdit);
                  }}
                />
              </IconButton>
            </>
          )}
          </h2>
          {showEdit && (
            <form
             onSubmit={handleLocationChange }
              // formInitialValues={{ location: "" }}
              // onFormChange={handleLocationChange}
            >
              <TextField 
              name="location" 
              label="Enter Location" 
              variant="outlined"
              defaultValue={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
            
              />
            </form>
          )}
      </div>
      {showEvents && (
        <Grid pt={1} nowrap={true} alignItems="center"
        justifyContent="center" container spacing={{sm:0, md:0}} columns={12}>
 
         {/* <div className="show-choose-events">
           <div className="results-choose-events"> */}
            {events.map((r) => {
              return (
                <Grid alignItems="center"
                justifyContent="center"
                 key={r.id}
                 item xs={12} sm={6} md={4} py={{xs:'0.5rem'}} px={'1rem'} zeroMinWidth>
                
                  <EventCard r={r} modelOpen={handleOpenModal} />
                
            </Grid>
              );
            })}
            </Grid>
      )}
      {/* <Checkbox
        className="event-checkbox"
        value={r.id}
        onChange={handleCheckBoxChange}
        inputProps={{
          "aria-label": "Checkbox A",
        }}
      /> */}




    <EventsDisplayModal
        isOpen={isOpen}
        handleOpen={setIsOpen}
        eventData={modalData}
      />

    </div>
  )
}

export default EventSearch