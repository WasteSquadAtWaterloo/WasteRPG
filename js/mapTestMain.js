var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('map', 'assets/Map/testMap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/Spritesheet/roguelikeSheet_transparent.png');
    game.load.spritesheet('player', 'assets/Spritesheet/player1_sheet.png', 48, 48, 12);

}

var map;
var layer;
var cursors;
var player;

function create() {

    //  Because we're loading CSV map data we have to specify the tile size here or we can't render it
    map = game.add.tilemap('map');    
    map.addTilesetImage('roguelikeSheet_transparent','tiles');   
    layer = map.createLayer(0);
    map.setCollisionByExclusion([63]); 
    layer.resizeWorld();    
    
    //fixedToCamera = true;

    player = game.add.sprite(0,0, 'player', 1);    
    player.smoothed = false;
    player.scale.set(1);

    player.animations.add('down', [0,1,2], 5, true);
    player.animations.add('left', [3,4,5], 5, true);    
    player.animations.add('right', [6,7,8], 5, true);
    player.animations.add('up', [9,10,11], 5, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.camera.follow(player);
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {    
    game.physics.arcade.collide(player, layer);

    player.body.velocity.set(0);

    if (cursors.left.isDown){
        player.body.velocity.x = -100;
        player.play('left');
    }
    else if (cursors.right.isDown){
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.up.isDown){
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown){
        player.body.velocity.y = 100;
        player.play('down');
    }
    else {
        player.animations.stop();
    }

}

function render() {

}