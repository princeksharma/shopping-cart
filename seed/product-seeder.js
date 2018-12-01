var mongoose = require('mongoose');
var Product = require('../models/product');


mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47',
    title: 'GTA V',
    description: 'Awesome Game!!!!!',
    price: 64
  }),
  new Product({
    imagePath: 'http://www.game-debate.com/pic.php?g_id=20321&game=The%20Last%20Of%20Us:%20Part%20II',
    title: 'The Last of us 2',
    description: 'hey!!!!!',
    price: 90
  }),
  new Product({
    imagePath: 'https://www.gamingdragons.co.il/images/game_img/playerunknown_bg.jpg',
    title: 'PUBG',
    description: 'Best Survival Game!!!!!',
    price: 50
  }),
  new Product({
    imagePath: 'https://images.g2a.com/newlayout/470x470/1x1x0/df6fe117b077/597b56acae653a44c75c3e02',
    title: 'The Witcher III',
    description: 'Awesome Game!!!!!',
    price: 80
  }),
  new Product({
    imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/601430/header.jpg?t=1518636696',
    title: 'The Evil Within II',
    description: 'Awesome Game!!!!!',
    price: 64
  }),
  new Product({
    imagePath: 'https://emertainmentmonthly.com/wp-content/uploads/sites/45/2017/05/outlast2-1.png',
    title: 'Outlast II',
    description: 'Awesome Game!!!!!',
    price: 74
  })

]


var done =0;
for(var i=0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if(done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
