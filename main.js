var game = new Phaser.Game(800,600,Phaser.CANVAS, 'gameDiv');

var spacefield;

var backgroundv;

var player;



var mainState = {
	preload: function (){

		game.load.image('starfield', "assets/starfield.png");
		game.load.image('player', "assets/Chrono.gif");


	},

	create: function (){

		spacefield = game.add.tileSprite(0,0,800,600,'starfield');
		backgroundv = 5;

			player = game.add.sprite.(game.world.centerX, game.world.centerY +200, 'player');
			game.physics.enable(player, Physics.ARCADE);

	},


	update: function() {

		spacefield.tilePosition.y += backgroundv;

	}



};

