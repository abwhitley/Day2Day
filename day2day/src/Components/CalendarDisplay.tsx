import SingleDate from "./SingleDate";
import {Divider, Grid, Typography} from "@mui/material";
// import TaskDisplay from "./TaskDisplay";
import {useState} from "react";
import Header from "./Header";
import Notepad from "./Notepad";
import NotepadImport from "./NotepadImport";
import {UsersData} from "../DataSets/UsersData";
import {getDayName, getFirstOfMonth} from "../Utils/DateUtils";
import CalendarHeader from "./CalendarHeader";
// import taskDisplay from "./TaskDisplay";
import MonthHeader from "./MonthHeader";

// interface CalendarDisplayProps {
// 	user: UsersData
// }
// const CalendarDisplay = ({ user }:CalendarDisplayProps) => {
//
// 	const [showFirstTaskBar, setShowFirstTaskBar] = useState<boolean>(false)
// 	const [showSecondTaskBar, setShowSecondTaskBar] = useState<boolean>(false)
// 	const [showThirdTaskBar, setShowThirdTaskBar] = useState<boolean>(false)
// 	const [showFourthTaskBar, setShowFourthTaskBar] = useState<boolean>(false)
// 	const [showFifthTaskBar, setShowFifthTaskBar] = useState<boolean>(false)
// 	const [dateSelected, setDateSelected] = useState<DateProps>({date: 'null', tasks: ['null','null', 'null'], displayTask: false })
//
// 	const numberOfCardsArray: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
//
// 	const displayFirstTaskBar = () => {
// 		if (showFirstTaskBar){
// 			return (
// 				<TaskDisplay setShowTheTasks={ setShowFirstTaskBar } dateInfo={ dateSelected }/>
// 			);
// 		}
// 	}
//
// 	const displaySecondTaskBar = () => {
// 		if (showSecondTaskBar){
// 			return(
// 				<TaskDisplay setShowTheTasks={ setShowSecondTaskBar } dateInfo={ dateSelected }/>
// 			);
// 		}
// 	}
// 	const displayThirdTaskBar = () => {
// 		if (showThirdTaskBar){
// 			return(
// 				<TaskDisplay setShowTheTasks={ setShowThirdTaskBar } dateInfo={ dateSelected }/>
// 			);
// 		}
// 	}
// 	const displayFourthTaskBar = () => {
// 		if (showFourthTaskBar){
// 			return(
// 				<TaskDisplay setShowTheTasks={ setShowFourthTaskBar } dateInfo={ dateSelected }/>
// 			);
// 		}
// 	}
// 	const displayFifthTaskBar = () => {
// 		if (showFifthTaskBar){
// 			return(
// 				<TaskDisplay setShowTheTasks={ setShowFifthTaskBar } dateInfo={ dateSelected }/>
// 			);
// 		}
// 	}
//
// 	getFirstOfMonth();
//
// 	return (
// 		<>
// 			<Grid container spacing={2}>
// 				<Grid item xs={12} lg={12}>
// 					<Header />
// 				</Grid>
// 				<Grid container item spacing={2} xs={12} lg={7} sx={{ml:2}}>
// 					<MonthHeader />
// 					<CalendarHeader />
// 					{
// 						numberOfCardsArray.map((value, index) => {
// 							if(index >= 0 && index < 7){
// 								return(
// 									<Grid item xs='auto' lg="auto">
// 										<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />
// 									</Grid>
// 								);
// 							}
// 						})
// 					}
// 					{
// 						displayFirstTaskBar()
// 					}
// 					{
// 						numberOfCardsArray.map((value, index) => {
// 							if(index >= 7 && index < 14){
// 								return(
// 									<Grid item xs='auto' lg="auto">
// 										<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />
// 									</Grid>
// 								);
// 							}
// 						})
// 					}
// 					{
// 						displaySecondTaskBar()
// 					}
// 					{
// 						numberOfCardsArray.map((value, index) => {
// 							if(index >= 14 && index < 21){
// 								return(
// 									<Grid item xs='auto' lg="auto">
// 										<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />
// 									</Grid>
// 								);
// 							}
// 						})
// 					}
// 					{
// 						displayThirdTaskBar()
// 					}
// 					{
// 						numberOfCardsArray.map((value, index) => {
// 							if(index >= 21 && index < 28){
// 								return(
// 									<Grid item xs='auto' lg="auto">
// 										<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />
// 									</Grid>
// 								);
// 							}
// 						})
// 					}
// 					{
// 						displayFourthTaskBar()
// 					}
// 					{
// 						numberOfCardsArray.map((value, index) => {
// 							if(index >= 28 && index < 35){
// 								return(
// 									<Grid item xs='auto' lg="auto">
// 										<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />
// 									</Grid>
// 								);
// 							}
// 						})
// 					}
// 					{
// 						displayFirstTaskBar()
// 					}
//
// 				</Grid>
// 			</Grid>

			{/*<Grid container spacing={ 2 } justifyContent='center' >*/}
			{/*	<Grid item xs={ 12 }>*/}
			{/*		<Header />*/}
			{/*	</Grid>*/}
			{/*	<Grid container item spacing={ 2 } xs={ 12 } lg={7} sx={{ border: '1px solid black', mt:0}}>*/}
			{/*		<MonthHeader />*/}
			{/*		<CalendarHeader />*/}
			{/*		{*/}
			{/*			user.calenderInfo.map((value, index) => {*/}
			{/*				if (index >= 0 && index < 7){*/}
			{/*					return (*/}
			{/*						<Grid item xs='auto' lg={1} sx={{}}>*/}
			{/*							<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />*/}
			{/*						</Grid>*/}
			{/*					);*/}
			{/*				}*/}
			{/*			})*/}
			{/*		}*/}
			{/*		{*/}
			{/*			displayFirstTaskBar()*/}
			{/*		}*/}
			{/*		{*/}
			{/*			user.calenderInfo.map((value, index) => {*/}
			{/*				if (index >= 7 && index < 14){*/}
			{/*					return (*/}
			{/*						<Grid item xs='auto' sx={{}}>*/}
			{/*							<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />*/}
			{/*						</Grid>*/}
			{/*					);*/}
			{/*				}*/}
			{/*			})*/}
			{/*		}*/}
			{/*		{*/}
			{/*			displaySecondTaskBar()*/}
			{/*		}*/}
			{/*		{*/}
			{/*			user.calenderInfo.map((value, index) => {*/}
			{/*				if (index >= 14 && index < 21){*/}
			{/*					return (*/}
			{/*						<Grid item xs='auto' sx={{}}>*/}
			{/*							<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />*/}
			{/*						</Grid>*/}
			{/*					);*/}
			{/*				}*/}
			{/*			})*/}
			{/*		}*/}
			{/*		{*/}
			{/*			displayThirdTaskBar()*/}
			{/*		}*/}
			{/*		{*/}
			{/*			user.calenderInfo.map((value, index) => {*/}
			{/*				if (index >= 21 && index < 28){*/}
			{/*					return (*/}
			{/*						<Grid item xs='auto' sx={{}}>*/}
			{/*							<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />*/}
			{/*						</Grid>*/}
			{/*					);*/}
			{/*				}*/}
			{/*			})*/}
			{/*		}*/}
			{/*		{*/}
			{/*			displayFourthTaskBar()*/}
			{/*		}*/}
			{/*		{*/}
			{/*			user.calenderInfo.map((value, index) => {*/}
			{/*				if (index >= 28 && index < 31){*/}
			{/*					return (*/}
			{/*						<Grid item xs='auto' sx={{}}>*/}
			{/*							<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />*/}
			{/*						</Grid>*/}
			{/*					);*/}
			{/*				}*/}
			{/*			})*/}
			{/*		}*/}
			{/*		{*/}
			{/*			displayFifthTaskBar()*/}
			{/*		}*/}
			{/*	</Grid>*/}
			{/*	<Grid item xs={ 4 }>*/}
			{/*		<NotepadImport user={ user } />*/}
			{/*	</Grid>*/}
			{/*</Grid>*/}

			{/*<Grid container spacing={2} justifyContent='center' sx={{}}>*/}
			{/*	<Grid item xs={12}>*/}
			{/*		<Header />*/}
			{/*	</Grid>*/}
			{/*	<Grid container item spacing={1} xs={8}>*/}
			{/*		<Grid item xs={12}>*/}
			{/*			<CalendarHeader />*/}
			{/*		</Grid>*/}
			{/*	</Grid>*/}

			{/*	<Grid container item spacing={1} xs={8}>*/}
			{/*		{*/}
			{/*			user.calenderInfo.map((value, index) => {*/}
			{/*				if (index >= 0 && index < 7){*/}
			{/*					return(*/}
			{/*						<Grid item xs={1}>*/}
			{/*							<SingleDate date={value} stateShowTasks={showFirstTaskBar} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} />*/}
			{/*						</Grid>*/}
			{/*					);*/}
			{/*				}*/}
			{/*			})*/}
			{/*		}*/}
			{/*	</Grid>*/}
			{/*	<NotepadImport user={user}/>*/}
			{/*</Grid>*/}




			{/*<Grid container spacing={2} sx={{border: '1px solid black'}}>*/}
			{/*	<Grid container item spacing={1} xs={7} sx={{border: '1px solid black'}}>*/}
			{/*	{*/}
			{/*		allDates.map((value,index) => {*/}
			{/*			if (index >= 0 && index < 7){*/}
			{/*				return (*/}
			{/*					<Grid item xs={1} sx={{border: '1px solid black'}}>*/}
			{/*						<SingleDate date={value} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} stateShowTasks={showFirstTaskBar}  />*/}
			{/*					</Grid>*/}
			{/*				);*/}

			{/*			}*/}
			{/*		})*/}
			{/*	}*/}
			{/*	</Grid>*/}
			{/*	<Grid container item spacing={1} xs={7} sx={{border: '1px solid black'}}>*/}
			{/*	{*/}
			{/*		allDates.map((value,index) => {*/}
			{/*			if (index >= 7 && index < 14){*/}
			{/*				return (*/}
			{/*					<Grid item xs={1}>*/}
			{/*						<SingleDate date={value} setStateShowTasks={setShowSecondTaskBar} setSelectedDate={setDateSelected} stateShowTasks={showSecondTaskBar}/>*/}
			{/*					</Grid>*/}
			{/*				);*/}

			{/*			}*/}
			{/*		})*/}
			{/*	}*/}
			{/*	</Grid>*/}

			{/*	/!*</Grid>*!/*/}
			{/*	<Grid container spacing={2}>*/}
			{/*		<Grid item xs={5}>*/}
			{/*			<NotepadImport user={user}/>*/}
			{/*		</Grid>*/}
			{/*	</Grid>*/}
			{/*</Grid>*/}
		// </>
		// <>
		// 	<Grid container spacing={2}>
		// 		<Grid item xs={12}>
		// 			<Header />
		// 		</Grid>
		// 		<Grid item xs={8}>
		// 			<Grid container spacing={2} sx={{border:"1px solid black"}}>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						{
		// 							allDates.map((value,index) => {
		// 								if (index >= 0 && index < 7){
		// 									return (
		// 										<Grid item xs={1}>
		// 											<SingleDate date={value} setStateShowTasks={setShowFirstTaskBar} setSelectedDate={setDateSelected} stateShowTasks={showFirstTaskBar}  />
		// 										</Grid>
		// 									);
		//
		// 								}
		// 							})
		// 						}
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						<Grid item xs={12}>
		// 							{
		// 								displayFirstTaskBar()
		// 							}
		// 						</Grid>
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Divider />
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						{
		// 							allDates.map((value,index) => {
		// 								if (index >= 7 && index < 14){
		// 									return (
		// 										<Grid item xs={1}>
		// 											<SingleDate date={value} setStateShowTasks={setShowSecondTaskBar} setSelectedDate={setDateSelected} stateShowTasks={showSecondTaskBar}/>
		// 										</Grid>
		// 									);
		//
		// 								}
		// 							})
		// 						}
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						<Grid item xs={12}>
		// 							{
		// 								displaySecondTaskBar()
		// 							}
		// 						</Grid>
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Divider />
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						{
		// 							allDates.map((value,index) => {
		// 								if (index >= 14 && index < 21){
		// 									return (
		// 										<Grid item xs={1}>
		// 											<SingleDate date={value} setStateShowTasks={setShowThirdTaskBar} setSelectedDate={setDateSelected} stateShowTasks={showThirdTaskBar}/>
		// 										</Grid>
		// 									);
		//
		// 								}
		// 							})
		// 						}
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						<Grid item xs={12}>
		// 							{
		// 								displayThirdTaskBar()
		// 							}
		// 						</Grid>
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Divider />
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						{
		// 							allDates.map((value,index) => {
		// 								if (index >= 21 && index < 28){
		// 									return (
		// 										<Grid item xs={1}>
		// 											<SingleDate date={value} setStateShowTasks={setShowFourthTaskBar} setSelectedDate={setDateSelected} stateShowTasks={showFourthTaskBar}/>
		// 										</Grid>
		// 									);
		//
		// 								}
		// 							})
		// 						}
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						<Grid item xs={12}>
		// 							{
		// 								displayFourthTaskBar()
		// 							}
		// 						</Grid>
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Divider />
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						{
		// 							allDates.map((value,index) => {
		// 								if (index >= 28 && index < 31){
		// 									return (
		// 										<Grid item xs={1}>
		// 											<SingleDate date={value} setStateShowTasks={setShowFifthTaskBar} setSelectedDate={setDateSelected} stateShowTasks={showFifthTaskBar}/>
		// 										</Grid>
		// 									);
		//
		// 								}
		// 							})
		// 						}
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Grid container spacing={2}>
		// 						<Grid item xs={12}>
		// 							{
		// 								displayFifthTaskBar()
		// 							}
		// 						</Grid>
		// 					</Grid>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<Divider />
		// 				</Grid>
		// 			</Grid>
		// 		</Grid>
		// 		<Grid item xs={4}>
		// 			<NotepadImport user={user}/>
		// 		</Grid>
		// 	</Grid>
		// </>
// 	);
// }

// export default CalendarDisplay;