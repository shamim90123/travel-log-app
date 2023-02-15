import { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container,  AppBar, Typography, Grow, Grid } from '@material-ui/core';

// files importing
import Posts from './modules/home/posts/Posts';
import Form from './modules/home/form/Form';
// import appLogo from './assets/images/20161016_165118.jpg';
import useStyles from './assets/css/styles';

import { getPosts } from './redux/actions/posts';
// import * as postAaction from './redux/actions/actions';

const App = () => {
	
	const [currentId, setCurrentId ] = useState(null);

	const classes = useStyles();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch])

	// <img className={classes.image} src={appLogo} alt="Travel Log App" justifycontent="right" height="60" />
	return (
		<Container maxidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h4" align="center"> Travel Log Application </Typography>
			</AppBar>
			<Grow in>
				<Container>
					<Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
						<Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId}/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;