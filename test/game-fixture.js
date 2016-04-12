export default class GameFixture {
	constructor() {
		this.game = {game: 'buraco'};
	}

	makeGame() {
		console.log(this.game);
		return this.game;
	}

	invalid() {
		this.game.valid = false;
		return this;
	}

	valid() {
		this.game.valid = true;
		return this;
	}

	withPlayer(idPartner, id, name){
		this.partners[idPartner].players[id].name = name;
		this.players[id].name = name;
	}

	withSequence(id1,id2,id3,id4){
		this.shout = [id1,id2,id3,id4];
		this.turn = id1;
	}

	// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	shuffle() {

		var array = this.cards.monte;

	    var currentIndex = array.length
	      , temporaryValue
	      , randomIndex
	      ;

	    // While there remain elements to shuffle...
	    while (0 !== currentIndex) {

	      // Pick a remaining element...
	      randomIndex = Math.floor(Math.random() * currentIndex);
	      currentIndex -= 1;

	      // And swap it with the current element.
	      temporaryValue = array[currentIndex];
	      array[currentIndex] = array[randomIndex];
	      array[randomIndex] = temporaryValue;
	    }

	    return array;
	}

	// morto 2x 11, monte, lixo, mao, mesa.sequence
	fillMonteWithAllDeck(){
		// 1/2 (deck) - (H)earts,(D)iamonds,(C)lubs,(S)pades,(J)okers (suit) - Rank
		this.cards.monte = [
			'1-H-1','1-H-2','1-H-3','1-H-4','1-H-5','1-H-6','1-H-7','1-H-8','1-H-9','1-H-10','1-H-J','1-H-Q','1-H-K','1-H-A',
			'1-D-1','1-D-2','1-D-3','1-D-4','1-D-5','1-D-6','1-D-7','1-D-8','1-D-9','1-D-10','1-D-J','1-D-Q','1-D-K','1-D-A',
			'1-C-1','1-C-2','1-C-3','1-C-4','1-C-5','1-C-6','1-C-7','1-C-8','1-C-9','1-C-10','1-C-J','1-C-Q','1-C-K','1-C-A',
			'1-S-1','1-S-2','1-S-3','1-S-4','1-S-5','1-S-6','1-S-7','1-S-8','1-S-9','1-S-10','1-S-J','1-S-Q','1-S-K','1-S-A',
			'2-H-1','2-H-2','2-H-3','2-H-4','2-H-5','2-H-6','2-H-7','2-H-8','2-H-9','2-H-10','2-H-J','2-H-Q','2-H-K','2-H-A',
			'2-D-1','2-D-2','2-D-3','2-D-4','2-D-5','2-D-6','2-D-7','2-D-8','2-D-9','2-D-10','2-D-J','2-D-Q','2-D-K','2-D-A',
			'2-C-1','2-C-2','2-C-3','2-C-4','2-C-5','2-C-6','2-C-7','2-C-8','2-C-9','2-C-10','2-C-J','2-C-Q','2-C-K','2-C-A',
			'2-S-1','2-S-2','2-S-3','2-S-4','2-S-5','2-S-6','2-S-7','2-S-8','2-S-9','2-S-10','2-S-J','2-S-Q','2-S-K','2-S-A',
			'1-J-1','1-J-2',
			'2-J-1','2-J-2'
		]
	}

	init(){
		fillMonteWithAllDeck();
		this.cards.lixo = [];
		this.cards.mesa[1] = [];
		this.cards.mesa[2] = [];
		this.cards.mao[1] = [];
		this.cards.mao[2] = [];
		this.cards.mao[3] = [];
		this.cards.mao[4] = [];
		this.cards.morto[1] = [];
		this.cards.morto[2] = [];
	}

	beginGame(){
		withPlayer(1, 1, 'player 1');
		withPlayer(1, 2, 'player 2');
		withPlayer(2, 3, 'player 3');
		withPlayer(2, 4, 'player 4');
		withSequence(1,3,2,4);
		init();
	}

	giveCards(){
		for( var i = 0; i < 11; i++)		
			this.cards.mao[1].push( this.cards.monte.shift() );
		for( var i = 0; i < 11; i++)		
			this.cards.mao[2].push( this.cards.monte.shift() );
		for( var i = 0; i < 11; i++)		
			this.cards.mao[3].push( this.cards.monte.shift() );
		for( var i = 0; i < 11; i++)		
			this.cards.mao[4].push( this.cards.monte.shift() );		
	}

	giveMorto(){
		for( var i = 0; i < 11; i++)		
			this.cards.morto[1].push( this.cards.monte.shift() );
		for( var i = 0; i < 11; i++)		
			this.cards.morto[2].push( this.cards.monte.shift() );		
	}

}
