import {Accordion, AccordionSummary, Button, List, ListItem, ListItemText, TextField, Typography} from "@mui/material";
import {useState} from "react";

const Notepad = () => {

	const [notes, setNotes] = useState<string[]>([]);
	const [userInput, setUserInput] = useState<string>("")

	return (
		<>
			<Typography variant='h4' sx={{fontStyle: 'italic', fontFamily: 'Monospace'}}>Note Pad</Typography>
			<List sx={{border: '1px solid black', height:'60%'}}>
				{
					notes.map((value) => {
						return(
							<ListItem>
								<ListItemText>{value}</ListItemText>
							</ListItem>
						);
					})
				}
			</List>
			<TextField id='filled-basic' label='New Note...' variant='filled' sx={{width: '100%', mt:2}} onChange={(e)=> {
				setUserInput(e.target.value)
			}}/>
			<Button onClick={() => {
				setNotes([...notes, userInput])
			}}>Add</Button>
		</>
	);
}

export default Notepad