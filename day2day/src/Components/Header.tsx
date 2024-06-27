import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
	return(
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h2' sx={{ fontStyle: 'italic', fontFamily: 'Monospace' }}>Calendar</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;