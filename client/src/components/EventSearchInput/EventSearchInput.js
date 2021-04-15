import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TMAPI from "../../utils/TMAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
      border: "2px solid #0DA67B",
      borderRadius: "15px",
      backgroundColor: "#f5f5f5",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [showState, setShowState] = useState({ city: "", state: "" });  

  const handleTMAPISearch = async (event) => {
    event.preventDefault();
    console.log(showState);
    const showList = await TMAPI.getCityShows(showState.city, showState.state).then(res => res.data);
    console.log('showList console log from EventSearchInput file', showList);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleTMAPISearch}
    >
      <TextField
        id="outlined-basic"
        label="City, ST (Ex: Bend, OR)"
        variant="outlined"
        onChange={(event) =>
          setShowState({
            city: event.target.value.split(",")[0],
            state: event.target.value.split(", ")[1],
          })
        }
      />
      <Button variant="contained" color="secondary" type="submit">
        Search
      </Button>
    </form>
  );
}