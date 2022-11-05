//初期化
enchant();
//ゲーム画面
var game = new Core(360, 800);
//FPS
game.fps = 60;
//背景色
game.rootScene.backgroundColor = "#7D9DF2";
//アセットプリロード
game.preload('enchantjs/images/chara1.png');
game.preload('images/title.png');
game.preload('images/button_master.png');
game.preload('images/button_beginner.png');
game.preload('images/meijin.png');
game.preload('images/meijin_hit.png');
game.preload('images/watermelon.png');
game.preload('images/watermelon-left.png');
game.preload('images/watermelon-right.png');
game.preload('images/explosion.png');
game.preload('images/cutin.png');
game.preload('images/cutin_face.png');
game.preload('images/tapframe.png');
game.preload('images/stageclear.png');
game.preload('se/clear.mp3');
game.preload('se/explosion.mp3');
game.preload('se/tap.mp3');
game.preload('se/start.mp3');
game.preload('se/cutin.mp3');
game.preload('images_hanadan/fukidashi.png');


game.preload('images_hanadan/title-bg.png');
game.preload('images_hanadan/dango.png');
game.preload('images_hanadan/dango-broken.jpg');
game.preload('images_hanadan/dango-shine.png');
game.preload('images_hanadan/fukidashi.png');
game.preload('images_hanadan/fukidashi1.png');
game.preload('images_hanadan/fukidashi2.png');
game.preload('images_hanadan/hands.png');
game.preload('images_hanadan/menu.png');
game.preload('images_hanadan/menu1.png');
game.preload('images_hanadan/menu2.png');
game.preload('images_hanadan/menu3.png');
game.preload('images_hanadan/menu4.png');
game.preload('images_hanadan/menu5.png');
game.preload('images_hanadan/ng.png');
game.preload('images_hanadan/ok.png');
game.preload('images_hanadan/onsen0.png');
game.preload('images_hanadan/onsen1.png');
game.preload('images_hanadan/onsen2.png');
game.preload('images_hanadan/onsen3.png');
game.preload('images_hanadan/onsen4.png');
game.preload('images_hanadan/onsen5.png');
game.preload('images_hanadan/onsen6.png');
game.preload('images_hanadan/onsen7.png');
game.preload('images_hanadan/start.png');


//判定結果
var result = false;



//ゲームスタート
game.start(); // start your game!

//onLoad
game.onload = function () {
    startTitleScene();
};

//タイトル
function startTitleScene() {
    var button_beginner = new Sprite(214, 82);
    button_beginner.image = game.assets["images_hanadan/start.png"];
    button_beginner.x = 200;
    button_beginner.y = 420;
    button_beginner.on('touchstart', function (e) {
        var sound = game.assets['se/start.mp3'].clone();
        sound.play();

        this.tl.scaleTo(0.95, 0.95, 3);
        this.tl.scaleTo(1, 1, 3);
        this.tl.then(function () {
            //シーン遷移
            //startGameScene(8);
            startMenuScene();
        });
    });
    game.rootScene.addChild(button_beginner);
}


function startMenuScene() {
    var menuScene = new Scene();
    menuScene.backgroundColor = "#7D9DF2";
    game.replaceScene(menuScene);

    var menu = new Sprite(338, 107);
    menu.image = game.assets["images_hanadan/menu.png"];
    menu.x = 150;
    menu.y = 20;
    menuScene.addChild(menu);

    var menu1 = new Sprite(221, 74);
    menu1.image = game.assets["images_hanadan/menu1.png"];
    menu1.x = 150;
    menu1.y = 127;
    menu1.on('touchstart', function (e) {
        var sound = game.assets['se/start.mp3'].clone();
        sound.play();

        this.tl.scaleTo(0.95, 0.95, 3);
        this.tl.scaleTo(1, 1, 3);
        this.tl.then(function () {
            //シーン遷移
            startGameScene(10);
        });
    });
    menuScene.addChild(menu1);

    var menu2 = new Sprite(221, 74);
    menu2.image = game.assets["images_hanadan/menu2.png"];
    menu2.x = 150;
    menu2.y = 201;
    menu2.on('touchstart', function (e) {
        var sound = game.assets['se/start.mp3'].clone();
        sound.play();

        this.tl.scaleTo(0.95, 0.95, 3);
        this.tl.scaleTo(1, 1, 3);
        this.tl.then(function () {
            //シーン遷移
            startGameScene(20);
        });
    });
    menuScene.addChild(menu2);

    var menu3 = new Sprite(221, 74);
    menu3.image = game.assets["images_hanadan/menu3.png"];
    menu3.x = 150;
    menu3.y = 275;
    menu3.on('touchstart', function (e) {
        var sound = game.assets['se/start.mp3'].clone();
        sound.play();

        this.tl.scaleTo(0.95, 0.95, 3);
        this.tl.scaleTo(1, 1, 3);
        this.tl.then(function () {
            //シーン遷移
            startGameScene(30);
        });
    });
    menuScene.addChild(menu3);

    var menu4 = new Sprite(221, 74);
    menu4.image = game.assets["images_hanadan/menu4.png"];
    menu4.x = 150;
    menu4.y = 349;
    menu4.on('touchstart', function (e) {
        var sound = game.assets['se/start.mp3'].clone();
        sound.play();

        this.tl.scaleTo(0.95, 0.95, 3);
        this.tl.scaleTo(1, 1, 3);
        this.tl.then(function () {
            //シーン遷移
            startGameScene(40);
        });
    });
    menuScene.addChild(menu4);

    var menu5 = new Sprite(250, 74);
    menu5.image = game.assets["images_hanadan/menu5.png"];
    menu5.x = 150;
    menu5.y = 423;
    menu5.on('touchstart', function (e) {
        var sound = game.assets['se/start.mp3'].clone();
        sound.play();

        this.tl.scaleTo(0.95, 0.95, 3);
        this.tl.scaleTo(1, 1, 3);
        this.tl.then(function () {
            //シーン遷移
            startGameScene(50);
        });
    });
    menuScene.addChild(menu5);
}

//ゲームシーン
function startGameScene(tap) {
    var tapCount = 0;
    //シーン作成
    var gameScene = new Scene();
    gameScene.backgroundColor = "#7D9DF2";

    gameScene.on('touchstart', function (e) {
        var sound = game.assets['se/tap.mp3'].clone();
        sound.play();

        taptext.remove();

        tapCount++;
        label.text = tapCount + "回";
        indicator.width = (indicator_back.width / tap) * tapCount;
        console.log(indicator.width);
        if (indicator.width == indicator_back.width) {
            gameScene.clearEventListener('touchstart');
            gameScene.clearEventListener('touchend');
            gameScene.tl.clear();
            cutin(gameScene, meijin, dango, heading, heading2, tap, tapCount, hands);
        }
        dango.tl.moveBy(0, 10, 1);
    });
    gameScene.on('touchend', function (e) {
        dango.tl.moveBy(0, -10, 1);
    });

    //10秒まち
    gameScene.tl.delay(600);
    gameScene.tl.then(function () {
        tapCount = 0;
        indicator.width = (indicator_back.width / tap) * tapCount;
        label.text = tapCount + "回";
        cutin(gameScene, meijin, dango, heading, heading2, tap, tapCount, hands);
    });
    //    gameScene.tl.loop();

    //ワールド
    var world = new PhysicsWorld(0, 500);
    gameScene.onenterframe = function () {
        world.step(game.fps);
    }
    game.replaceScene(gameScene);


    //インジケーター
    var indicator_panel = new Sprite(600, 40);
    indicator_panel.backgroundColor = "#444444";
    indicator_panel.borderStyle = "solid";
    indicator_panel.borderColor = "white";
    indicator_panel.x = 20;
    indicator_panel.y = 20;
    gameScene.addChild(indicator_panel);

    var indicator_back = new Sprite(596, 36);
    indicator_back.backgroundColor = "#ffffff";
    indicator_back.x = 22;
    indicator_back.y = 22;
    gameScene.addChild(indicator_back);

    var indicator = new Sprite(596, 36);
    indicator.backgroundColor = "#ffff00";
    indicator.x = 22;
    indicator.y = 22;
    gameScene.addChild(indicator);


    //インジケーターのラベル
    var label = new Label();
    label.width = 110;
    label.textAlign = "right";
    label.color = "#444444";
    label.text = "0tap/sec";
    label.font = "20px osaka";
    label.x = 20;
    label.y = 30;
    gameScene.addChild(label);


    var heading = new Label();
    heading.width = 510;
    heading.color = "#000000";
    heading.text = "連打しよう！";
    heading.font = "50px osaka";
    heading.x = 120;
    heading.y = 100;
    gameScene.addChild(heading);


    var heading2 = new Label();
    heading2.width = 610;
    heading2.color = "#000000";
    heading2.text = "10秒間で" + tap + "回叩いたら成功！！";
    heading2.font = "40px osaka";
    heading2.x = 50;
    heading2.y = 240;
    gameScene.addChild(heading2);


    //プレイヤー
    var meijin = new Sprite(431, 531);
    meijin.image = game.assets["images/meijin.png"];
    meijin.x = 100;
    meijin.y = 60;
    // gameScene.addChild(meijin);

    //泥団子
    var dango = new Sprite(462, 462);
    dango.image = game.assets["images_hanadan/dango.png"];
    dango.x = 83;
    dango.y = 353;
    // dango.tl.scaleTo(0.5, 0.5, 1);
    gameScene.addChild(dango);


    //手
    var hands = new Sprite(360, 235);
    hands.image = game.assets["images_hanadan/hands.png"];
    hands.x = 153;
    hands.y = 353;
    gameScene.addChild(hands);
    hands.tl.moveBy(0, 200, 40);
    hands.tl.moveBy(0, -200, 40);
    hands.tl.loop();


    //tap!!
    var taptext = new Sprite(640, 250);
    taptext.image = game.assets["images/tapframe.png"];
    taptext.x = 0;
    taptext.y = 300;
    taptext.frame = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    gameScene.addChild(taptext);


}

function breakWaterMelon(gameScene) {
    //PhyBoxSprite(幅, 高さ, 動作モード, 密度, 摩擦力, 反発力, フラグ)

    //割れたスイカ
    var phyBall = new PhyCircleSprite(116, enchant.box2d.DYNAMIC_SPRITE, 10.0, 1.0, 0, true);
    phyBall.image = game.assets["images/watermelon-left.png"];
    phyBall.position = { x: 390, y: 490 };
    phyBall.angle = -10;
    gameScene.addChild(phyBall); // シーンに追加

    var phyBall2 = new PhyCircleSprite(116, enchant.box2d.DYNAMIC_SPRITE, 10.0, 1.0, 0, true);
    phyBall2.image = game.assets["images/watermelon-right.png"];
    phyBall2.position = { x: 410, y: 490 };
    phyBall2.angle = 10;
    gameScene.addChild(phyBall2); // シーンに追加

    //床
    var phyFloor = new PhyBoxSprite(400, 5, enchant.box2d.STATIC_SPRITE, 10, 1.0, 0, false);
    phyFloor.x = 20;
    phyFloor.y = 630;
    //    phyFloor.backgroundColor = "red";
    phyFloor.angle = -5;
    gameScene.addChild(phyFloor);

    var phyFloor3 = new PhyBoxSprite(400, 5, enchant.box2d.STATIC_SPRITE, 10, 1.0, 0, false);
    phyFloor3.x = 20;
    phyFloor3.y = 630;
    //    phyFloor3.backgroundColor = "red";
    phyFloor3.angle = 5;
    gameScene.addChild(phyFloor3);

    //床
    var phyFloorR = new PhyBoxSprite(400, 5, enchant.box2d.STATIC_SPRITE, 10, 1.0, 0, false);
    phyFloorR.x = 400;
    phyFloorR.y = 630;
    //    phyFloorR.backgroundColor = "red";
    phyFloorR.angle = 5;
    gameScene.addChild(phyFloorR);

    //床
    var phyFloorR = new PhyBoxSprite(400, 5, enchant.box2d.STATIC_SPRITE, 10, 1.0, 0, false);
    phyFloorR.x = 400;
    phyFloorR.y = 630;
    //    phyFloorR.backgroundColor = "red";
    phyFloorR.angle = -5;
    gameScene.addChild(phyFloorR);

}

function gameClear(gameScene, meijin, item, hands) {
    //スイカ割り
    item.remove();
    hands.remove();

    //    breakWaterMelon(gameScene);

    //ここでOK画像を表示する


    gameScene.tl.delay(200);
    gameScene.tl.then(function () {
        //game.replaceScene(game.rootScene);

        startResultScene();
    })



    //プレイヤー
    meijin.image = game.assets["images/meijin_hit.png"];

    gameScene.touchEnabled = false;
    // var explosion = new Sprite(640, 480);
    // explosion.image = game.assets["images/explosion.png"];
    // explosion.tl.scaleTo(0.8, 0.8, 0);
    // explosion.rotation = -90;
    // explosion.x = 90;
    // explosion.y = 250;
    // gameScene.addChild(explosion);
    // var sound = game.assets['se/explosion.mp3'].clone();
    // sound.play();
    // explosion.frame = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, null];
    // explosion.addEventListener(Event.ANIMATION_END, function () {
    //     this.remove();

    //     var clear = new Sprite(640, 250);
    //     clear.image = game.assets["images/stageclear.png"];
    //     clear.x = 640;
    //     clear.y = 300;
    //     gameScene.addChild(clear);
    //     clear.tl.delay(90);
    //     clear.tl.then(function () {
    //         var sound = game.assets['se/clear.mp3'].clone();
    //         sound.play();
    //     });
    //     clear.tl.moveTo(0, 340, 7);
    // });

    //    game.stop();


}

function cutin(gameScene, meijin, item, heading, heading2, tap, tapcount, hands) {

    var sound = game.assets['se/cutin.mp3'].clone();
    sound.play();

    heading.text = "結果発表！！"

    if (tap <= tapcount) {
        heading2.text = "キレイにできたね♥"
        result = true;
    } else {
        heading2.text = "残念！失敗作！"
        result = false;
    }

    var cutinGroup = new Group();
    cutinGroup.x = 640;
    cutinGroup.y = 0;
    gameScene.addChild(cutinGroup);
    cutinGroup.tl.moveTo(0, 0, 6);
    cutinGroup.tl.delay(60);
    cutinGroup.tl.then(function () {
        cutinGroup.remove();
        gameClear(gameScene, meijin, item, hands);
    });

    var back = new Sprite(640, 240);
    back.image = game.assets["images/cutin.png"];
    back.frame = [0, 1, 2, 3];
    back.tl.scaleTo(1.2, 1.288, 0);
    back.rotation = -10;
    back.x = 0;
    back.y = 239;
    cutinGroup.addChild(back);

    var face = new Sprite(640, 518);
    face.image = game.assets["images/cutin_face.png"];
    face.tl.scaleTo(0.6, 0.6, 0);
    face.rotation = -10;
    face.x = 0;
    face.y = 100;
    cutinGroup.addChild(face);



    var clear = new Sprite(360, 359);
    if (result == true) {
        clear.image = game.assets["images_hanadan/ok.png"];
    } else {
        clear.image = game.assets["images_hanadan/ng.png"];
    }

    clear.x = 140;
    clear.y = 300;
    clear.tl.scaleTo(0, 0, 1);
    gameScene.addChild(clear);


    clear.tl.delay(60);
    clear.tl.then(function () {
        var sound = game.assets['se/clear.mp3'].clone();
        sound.play();
    });
    clear.tl.scaleTo(1, 1, 60);
}


function startResultScene() {

    var resultScene = new Scene();
    resultScene.backgroundColor = "#7D9DF2";
    game.replaceScene(resultScene);



    var onsen = new Sprite(200, 480);
    onsen.image = game.assets["images_hanadan/onsen3.png"];
    // onsen.rotation = -10;
    onsen.x = 400;
    onsen.y = 300;
    resultScene.addChild(onsen);




    var heading = new Label();
    heading.width = 510;
    heading.color = "#000000";
    heading.text = "結果発表！";
    heading.font = "50px osaka";
    heading.x = 120;
    heading.y = 100;
    resultScene.addChild(heading);




    //todo ここは画像にしてもらう
    //吹き出しと文字を合体。OKNG2パターン作る
    var fukidashi = new Sprite(241, 166);
    fukidashi.image = game.assets["images_hanadan/fukidashi.png"];
    fukidashi.x = 241;
    fukidashi.y = 168;
    resultScene.addChild(fukidashi);
    if (result == true) {

    }


    //戻るボタン
    var back = new Label();
    back.width = 510;
    back.color = "#000000";
    back.text = "スタートに戻る";
    back.font = "40px osaka";
    back.x = 50;
    back.y = 600;
    back.on('touchstart', function (e) {
        game.replaceScene(game.rootScene);
    });
    resultScene.addChild(back);




}