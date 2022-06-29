import './card.styles.css';

const Card = ({ robot: { id, name, email } }) => (
	<div className='card-container'>
		<img alt={`robot ${name}`} src={ `https://robohash.org/${id}?set=set1&size=180x180` } />
		<h2>{name}</h2>
		<p>{email}</p>
	</div>
);		

export default Card;