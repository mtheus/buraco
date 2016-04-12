//import GameFixture from './example-rules';
//import Rules from '../src/rules';
import GameFixture from './game-fixture';

describe('Buraco', () => {

	var example = new GameFixture()
		.invalid()
		.makeGame();  	

	it('we are playing buraco', () => {
		expect(example.game).toEqual('buraco');
	});

});

