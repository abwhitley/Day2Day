import {Card, CardContent, Grid, Typography} from "@mui/material";
import {getMonthName} from "../Utils/DateUtils";

const MonthHeader = () => {
	let currentMonth = getMonthName();
	return (
		<Grid item xs={12} lg={12}>
		<Card>
			<CardContent>
				<Typography variant='h4'sx={{ textAlign:'center' }}>{ currentMonth }</Typography>
			</CardContent>
		</Card>
		</Grid>
	);
}

export default MonthHeader;