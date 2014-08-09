enchant();

window.onload = function() {
    var Rectangle = enchant.Class.create({
        initialize: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        right: {
            get: function() {
                return this.x + this.width;
            }
        },
        bottom: {
            get: function() {
                return this.y + this.height;
            }
        }
    });

    var game = new Game(320, 320);
    game.fps = 24;
    game.preload('bg.png','chara.png','star.png');
    game.onload = function() {
        var starr = new Array();
        background = new Sprite(320, 320);
        background.image = game.assets['bg.png'];
        game.rootScene.addChild(background);
        for (var i = 0; i < 20; i++) {
            starr[i] =  new Sprite(24, 24);
            starr[i].image = game.assets['star.png'];
            starr[i].x = Math.floor(296/19 * i);
            starr[i].y = Math.floor(Math.random()*520) - 200;
            starr[i].vy = Math.floor(Math.random()*5) + 5;
            starr[i].scale(1-0.05*starr[i].vy, 1-0.05*starr[i].vy);
            game.rootScene.addChild(starr[i]);
        };
        var chara = new Sprite(32, 32);
        background.x = 0;
        background.y = 0;
        background.frame = 0;
        chara.image = game.assets['chara.png'];
        chara.x = 32;
        chara.y = 32;
        chara.frame = 0;
        chara.addEventListener('enterframe', function(e) {
            if (game.input.left) {
                this.x -= 4;
                if(this.x < 0) this.x = 0;
                this.frame = (this.x / 4) % 2 + 4;
            }
            if (game.input.right) {
                this.x += 4;
                if(this.x > 288) this.x = 288;
                this.frame = (this.x / 4) % 2 + 6;
            }
            if (game.input.up) {
                this.y -= 4;
                if(this.y < 0) this.y = 0;
                this.frame = (this.y / 4) % 2;
            }
            if (game.input.down) {
                this.y += 4;
                if(this.y > 288) this.y = 288;
                this.frame = (this.y / 4) % 2 + 2;
            }

            for (var i = 0; i < 20; i++) {
                starr[i].y += starr[i].vy;
                if(starr[i].y < -200)
                    starr[i].y = 410;
                if(starr[i].y > 410)
                    starr[i].y = -200;
            };
        });
        var stage = new Group();

        stage.addChild(chara);

        var pad = new Pad();
        pad.x = 0;
        pad.y = 224;
        game.rootScene.addChild(stage);
        game.rootScene.addChild(pad);
    };
    game.start();
};
