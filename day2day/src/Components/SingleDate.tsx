import {
	Alert,
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader, Divider,
	Grid, IconButton,
	Paper,
	Stack,
	Typography
} from "@mui/material";
import {grey} from "@mui/material/colors";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {CheckBoxOutlined} from "@mui/icons-material";
import {hasSubscribers} from "node:diagnostics_channel";
import {useState} from "react";
import {getFirstOfMonth} from "../Utils/DateUtils";

interface SingleDateProps {
	dateNumber : string
}

const SingleDate = ({dateNumber}:SingleDateProps) => {

	 const [cardColor, setCardColor] = useState<string>("white")
	const displayIcon = (tasks : string[]) => {
		if (tasks.length > 0){
			return (
				<ChatBubbleOutlineOutlinedIcon />
			);
		} else {
			return (
				<Button size='small' disabled></Button>
			);
		}
	}

	getFirstOfMonth();

	return (
		<>
			<Card sx={{ width: 139, ml:.5}}>
				<CardContent>
					<Typography>{dateNumber}</Typography>
				</CardContent>
				<CardActions>
					{/*<div>*/}
					{/*<Grid container spacing={ 2 }>*/}
					{/*	<Grid item xs={ 3 }>*/}
					{/*		{*/}
					{/*			displayIcon(date.tasks)*/}
					{/*		}*/}
					{/*	</Grid>*/}
					{/*	<Grid item xs={ 2 }>*/}
					{/*		<IconButton onClick={()=> {*/}
					{/*			if (stateShowTasks) {*/}
					{/*				setCardColor("white")*/}
					{/*				setStateShowTasks(false)*/}
					{/*			} else {*/}
					{/*				setCardColor("lightblue")*/}
					{/*				setStateShowTasks(true)*/}
					{/*				setSelectedDate(date)*/}
					{/*			}*/}
					{/*		}}><KeyboardArrowDownIcon /></IconButton>*/}
					{/*	</Grid>*/}
					{/*</Grid>*/}
					{/*</div>*/}
				</CardActions>
			</Card>
		</>
	);
}

export default SingleDate;