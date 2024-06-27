import {
	Accordion,
	AccordionSummary,
	Button, Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText, TextField
} from "@mui/material";
import {useEffect, useState} from "react";

// interface TaskDisplayProps {
// 	setShowTheTasks: (a:boolean) => void,
// }
//
// const TaskDisplay = ({ setShowTheTasks }: TaskDisplayProps) => {
//
// 	const [userInput, setUserInput] = useState<string>("")
// 	const [incomingTasks, setIncomingTasks] = useState<string[]>(dateInfo.tasks)
// 	const displayTasksOrNot = () => {
// 		if(incomingTasks.length > 0){
// 			return(
// 				incomingTasks.map((value) => {
// 					return(
// 					<Accordion>
// 						<AccordionSummary>
// 							{ value }
// 						</AccordionSummary>
// 					</Accordion>
// 					)
// 				})
// 			);
// 		} else {
// 			return (
// 				<Accordion>
// 					<AccordionSummary>
// 						No Tasks
// 					</AccordionSummary>
// 				</Accordion>
// 			)
// 		}
// 	}
//
// 	return(
// 		<>
// 			{displayTasksOrNot()}
// 			<Grid container spacing={ 2 }>
// 				<Grid item xs={ 12 }>
// 					<TextField id='filled-basic' label='New Tasks...' variant='filled' sx={{ width: '100%', mt:2 }} onChange={ (e)=> {
// 						setUserInput(e.target.value)
// 					}}/>
// 				</Grid>
// 				<Grid item xs={ 2 }>
// 					<Button variant='outlined' onClick={ () => {
// 						console.log(userInput)
// 						dateInfo.tasks.push(userInput)
// 						setIncomingTasks([...incomingTasks, userInput])
// 					}}>Add</Button>
// 				</Grid>
// 			</Grid>
// 		</>
// 	);
// }

// export default TaskDisplay;