import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import GitHubLogo from './images/GitHub-Mark-Light-64px.png';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [robots, setRobots] = useState([]);
	const [filteredRobots, setFilteredRobots] = useState(robots);
	
	console.log('rendered');
		
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => setRobots(users)); 
	}, []);
	
	useEffect(() => {
		const newFilteredRobots = robots.filter( 
			robot => robot.name.toLocaleLowerCase().includes(searchField)
		);
		setFilteredRobots(newFilteredRobots);
	}, [robots, searchField]); 
	
	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	} 
	
	return (
		<div className="App">
			<header>
				<a href="https://github.com/averroesk/robots-rolodex-web-app-repository" target="_blank" rel="noreferrer">
					<img className='logo' src={GitHubLogo} alt="GitHub Logo" />
				</a>
				<h1 className='app-title'>Robots Rolodex</h1>
			</header>
			<SearchBox
				className='robots-search-box' 
				placeholder='search robots'
				onChangeHandler={onSearchChange}
			/> 
			<CardList robots={filteredRobots} /> 
		</div>
	);
}

export default App;
