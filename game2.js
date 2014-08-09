enchant();

    var core = new Core(320, 320);
    core.fps = 24;
    core.preload('chara.png');
    core.onload = function() {

        var chara = new Sprite(32, 32);
        chara.x = 32;
        chara.y = 32;
        chara.frame = 1;
        chara.image = core.assets['chara.png'];
        chara.addEventListener('enterframe', function(e) {
            if (core.input.left) {
                this.x -= 4;
                this.frame = (this.x / 4) % 2 + 5;
                if(this.x < 0) this.x = 0;
            }
            if (core.input.right) {
                this.x += 4;
                this.frame = (this.x / 4) % 2 + 7;
                if(this.x > 320) this.x = 320;
            }
            if (core.input.up) {
                this.y -= 4;
                this.frame = (this.y / 4) % 2 + 1;
                if(this.y < 0) this.y = 0;
            }
            if (core.input.down) {
                this.y += 4;
                this.frame = (this.y / 4) % 2 + 3;
                if(this.y > 320) this.y = 320;
            }
        });

        var pad = new Pad();
        pad.x = 0;
        pad.y = 224;
        core.rootScene.addChild(chara);
        core.rootScene.addChild(pad);
        core.rootScene.backgroundColor = 'rgb(182, 255, 255)';
    };
    core.start();
};
