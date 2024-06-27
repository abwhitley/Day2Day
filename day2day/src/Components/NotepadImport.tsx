import { Grid, List, ListItemText, ListItem, ListItemIcon, TextField, Button, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { NoteData, UsersData } from "../DataSets/UsersData";
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Typography from '@mui/material/Typography';
import {getFirstOfMonth} from "../Utils/DateUtils";

interface NotepadProps {
    user: UsersData
}

const Notepad = ({ user }:NotepadProps) => {

    const [userInputMainNote, setUserInputMainNote] = useState<string>("");
    const [userInputSubNote, setUserInputSubNote] = useState<string>("");
    const [notesToDisplay, setNotesToDisplay] = useState<NoteData[]>(user.notes);
    const [iconForNewNote, setIconForNewNote] = useState<string>("");

    const determineIcon = (iconName: string) => {
        if(iconName === "Calendar"){
            return(
                <CalendarMonthOutlinedIcon />
            );
        } else if(iconName === "Star"){
            return(
              <StarBorderPurple500OutlinedIcon />
            );
        }
    }


    return(
        <>
            <Grid container item spacing={ 1 } sx={{ width:'500px', ml:10, border: "1px solid red", mt: -5}} alignItems='center' justifyItems='center' xs={6} lg={4}>
                <Grid item xs={ 12 }>
                    <Typography variant='h3' sx={{fontStyle: 'italic', border: '1px solid purple'}}>Notes:</Typography>
                </Grid>
                <Grid item xs={ 12 } sx={{mt:-5}}>
                    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', height: '100%'}}>

                        {
                            notesToDisplay.map((value) => {
                                return(
                                    <>
                                        <ListItem>
                                            <ListItemIcon>
                                                {
                                                    determineIcon(value.icon)
                                                }
                                            </ListItemIcon>
                                            <ListItemText primary={ <Typography variant='subtitle1'>{ value.mainText }</Typography> } secondary={ <Typography variant='caption'>{ value.subText }</Typography> } />
                                        </ListItem>
                                    </>

                            );
                            })
                        }

                    </List>
                </Grid>
                <Grid item xs={ 10 }>
                    <TextField variant='standard' label='New Note...' sx={{ width:'100%', maxWidth:"800px" }} onChange={ (e)=> {
                        setUserInputMainNote(e.target.value)
                    }}/>
                    <TextField variant='standard' label='secondary info...' sx={{ width:'100%', maxWidth:"800px" }} onChange={ (e) => {
                        setUserInputSubNote(e.target.value)
                    }}/>
                </Grid>
                <Grid item xs={ 2 }>
                    <Button onClick={ () => {
                        let newNote = {mainText: userInputMainNote, subText: userInputSubNote, icon:iconForNewNote, isFinished: false}
                        localStorage.setItem('test', JSON.stringify(newNote))
                        console.log(localStorage.getItem("test"));
                        user.notes.push()
                        setNotesToDisplay([...user.notes])
                        setUserInputMainNote("")
                        setUserInputSubNote("")
                        setIconForNewNote("")
                        getFirstOfMonth();
                    }}>Submit</Button>
                </Grid>
                <Grid item xs={ 2 }>
                    <Checkbox icon={ <CalendarMonthOutlinedIcon /> } onClick={ () => {
                        setIconForNewNote("Calendar")
                    }}/>
                </Grid>
                <Grid item xs={ 2 }>
                    <Checkbox icon={<StarBorderPurple500OutlinedIcon />} onClick={ () => {
                        setIconForNewNote("Star")
                    }}/>
                </Grid>
            </Grid>
        </>
    );
}

export default Notepad;