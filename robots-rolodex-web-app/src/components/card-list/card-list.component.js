import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ robots }) => (
	<div className='card-list'>
		{robots.map(robot => <Card key={robot.id} robot={robot} />)}
	</div>
)

export default CardList;