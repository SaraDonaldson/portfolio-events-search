import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { Button, Box, CardContent, Card, CardMedia } from "@mui/material";
export default function EventCard({ r, modelOpen }) {
  return (
    <>
        <Card sx={{ display: 'flex', width:'100%', height:'100%', marginBottom:'1rem',':hover': {
      boxShadow: 20, // theme.shadows[20]
    }, cursor:'pointer' }}
    md={{width:'90%'}}
        raised
        // elevation={20}
          onClick={(e) => modelOpen(r)}
          >
      <CardMedia
        component="img"
        sx={{ width: '40%' }}
        image={r.image}

        alt="Event Cover Image"
      />
      <Box noWrap sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent nowrap={true}>
              <Typography
                xs={{ display: "inline" }}
                md={{ display: "block" }}
                variant="h6"
                color="text.primary"
                noWrap={true}
              fontWeight={'bolder'}
              >
                {r.name}
              </Typography>
              <Typography
                xs={{ display: "block" }}
                md={{ display: "block" }}
                component="p"
                variant="p"
                color="text.primary"
                noWrap={true}
              fontWeight={'medium'}
              >
                {r.date}, {r.time}
              </Typography>
              <Typography
              fontWeight={'medium'}
                xs={{ display: "inline" }}
                md={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
                noWrap={true}
                >
              {`  ${r.venue}`}
            </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      
        </Box>
      </Box>
    </Card>
      {/* <ListItem
        dense={true}
        alignItems="flex-start"
        style={{ maxHeight: "80px" }}
        className="eventCard"
      >
        <ListItemAvatar sx={{ paddingRight: "10px" }} alignItems="center">
          <img
            onClick={(e) => modelOpen(r)}
            alt="event"
            src={r.image}
            style={{ width: "100px", maxHeight: "50px" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={r.name}
          onClick={(e) => modelOpen(r)}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
                noWrap={true}
              >
                {r.date}, {r.time}
              </Typography>
              {`  ${r.venue}`}
            </React.Fragment>
          }
        />
        {/*
        <Button size="small" variant="text" fontSize="small">+ My Events</Button>
      <Button size="small" variant= "contained" fontSize="small">Find a Mate</Button> */}
      {/*
      </ListItem>
      <Divider variant="inset" component="div" /> */}
    </>
  );
}
