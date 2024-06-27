import {Card, CardContent, Grid, Typography} from "@mui/material";
import {getDayName} from "../Utils/DateUtils";

interface CardStyle {
	backgroundColor: string
	width: number,
	ml: number
}
const CalendarHeader = () => {

	const dayOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', "Wednesday", 'Thursday', 'Friday', 'Saturday'];

	const styleToday: CardStyle = {
		backgroundColor: 'lightblue',
		width: 139,
		ml: .5
	}
	const styleNotToday:CardStyle = {
		backgroundColor: 'white',
		width: 139,
		ml: .5
	}

	return(
		<>
				{
					dayOfWeek.map((value) => {
						let dayNumber = new Date().getDay()
						let dayName = getDayName(dayNumber);
						let style: CardStyle = {backgroundColor:"", width: 0, ml:0}
						if (value === dayName){
							style = styleToday
						} else {
							style = styleNotToday
						}
						return(
							<Grid item xs='auto' lg="auto" alignItems='center'>
								<Card sx={style}>
									<CardContent>
										<Typography>{ value }</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})
				}
		</>
	);
}

export default CalendarHeader