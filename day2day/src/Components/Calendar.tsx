import exp from "node:constants";
import {Grid} from "@mui/material";
import CalendarHeader from "./CalendarHeader";
import MonthHeader from "./MonthHeader";
import Header from "./Header";
import SingleDate from "./SingleDate";
import Notepad from "./Notepad";
import NotepadImport from "./NotepadImport";
import {UsersData} from "../DataSets/UsersData";
import {useState} from "react";
import {getFirstOfMonth} from "../Utils/DateUtils";

interface CalendarProps {
    user: UsersData
}
const Calendar = ({user}: CalendarProps) => {

    const dates = getFirstOfMonth();


    return(
        <>
            <Grid container spacing={2} sx={{border:'1px solid blue'}}>
                <Grid item xs={12} lg={12}>
                    <Header />
                </Grid>
                <Grid container item spacing={2} xs={12} lg={7} sx={{ml:2, border: '1px solid green'}}>
                    <MonthHeader />
                    <CalendarHeader />
                    <Grid container item spacing={2} xs={12} lg={12}>
                        {
                            dates.map((value, index) => {
                                if(index >= 0 && index < 7){
                                    return(
                                        <Grid item xs='auto' lg="auto">
                                            <SingleDate dateNumber={value.toString()}/>
                                        </Grid>
                                    );
                                }
                            })
                        }
                    </Grid>
                    <Grid container item spacing={2} xs={12} lg={12}>
                    {
                        dates.map((value, index) => {
                            if(index >= 7 && index < 14){
                                return(
                                    <Grid item xs='auto' lg="auto">
                                        <SingleDate dateNumber={value.toString()}/>
                                    </Grid>
                                );
                            }
                        })
                    }
                    </Grid>
                    <Grid container item spacing={2} xs={12} lg={12}>
                    {
                        dates.map((value, index) => {
                            if(index >= 14 && index < 21){
                                return(
                                    <Grid item xs='auto' lg="auto">
                                        <SingleDate dateNumber={value.toString()}/>
                                    </Grid>
                                );
                            }
                        })
                    }
                    </Grid>
                    <Grid container item spacing={2} xs={12} lg={12}>
                    {
                        dates.map((value, index) => {
                            if(index >= 21 && index < 28){
                                return(
                                    <Grid item xs='auto' lg="auto">
                                        <SingleDate dateNumber={value.toString()}/>
                                    </Grid>
                                );
                            }
                        })
                    }
                    </Grid>
                    <Grid container item spacing={2} xs={12} lg={12}>
                    {
                        dates.map((value, index) => {
                            if(index >= 28 && index < 35){
                                return(
                                    <Grid item xs='auto' lg="auto">
                                        <SingleDate dateNumber={value.toString()}/>
                                    </Grid>
                                );
                            }
                        })
                    }
                    </Grid>
                    <Grid container item spacing={2} xs={12} lg={12}>
                        {
                            dates.map((value, index) => {
                                if(index >= 35 && index < 42){
                                    return(
                                        <Grid item xs='auto' lg="auto">
                                            <SingleDate dateNumber={value.toString()}/>
                                        </Grid>
                                    );
                                }
                            })
                        }
                    </Grid>
                </Grid>
                <NotepadImport user={user}/>
            </Grid>
        </>
    );

}

export default Calendar;