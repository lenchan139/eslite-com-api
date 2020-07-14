# Unofficial Eslite-com Collection API

[![NPM version](https://img.shields.io/npm/v/@flowereatfish/eslite-com-api.svg)](https://www.npmjs.com/package/@flowereatfish/eslite-com-api)
[![Travis-CI status](https://travis-ci.com/FlowerEatFish/eslite-com-api.svg?branch=master)](https://travis-ci.com/FlowerEatFish/eslite-com-api/builds)
[![AppVeyor status](https://ci.appveyor.com/api/projects/status/en1g8nuvmx87hwtq/branch/master?svg=true)](https://ci.appveyor.com/project/FlowerEatFish/eslite-com-api/history)
[![Codecov status](https://codecov.io/gh/FlowerEatFish/eslite-com-api/branch/master/graph/badge.svg)](https://codecov.io/gh/FlowerEatFish/eslite-com-api/commits)
[![Dependencies status](https://david-dm.org/FlowerEatFish/eslite-com-api/status.svg)](https://david-dm.org/FlowerEatFish/eslite-com-api)
[![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

非官方誠品網路書店 API

- [Unofficial Eslite-com Collection API](#unofficial-eslite-com-collection-api)
  - [Requirements](#requirements)
  - [Installations](#installations)
  - [Usage](#usage)
    - [Node.js version 8 or higher (with full Async/Await support)](#nodejs-version-8-or-higher-with-full-asyncawait-support)
    - [Others](#others)
  - [Demo](#demo)
    - [Commands](#commands)
    - [Results](#results)
  - [API documentation](#api-documentation)
    - [Input parameters](#input-parameters)
    - [Output results](#output-results)

## Difference with eslite-com-api
This package will also try fetch full introdction from detail page but not only fetch from quering page. So this package will load and parse content longer than the original one.
If you don't need full introduction, we suggest you should use the [eslite-com-api](https://github.com/FlowerEatFish/eslite-com-api)

## Requirements

- This construct uses [Axios.js](https://github.com/axios/axios), so you need to care about Cross-Origin Requests (CORS).

## Installations

- NPM

```shell
npm install @flowereatfish/eslite-com-api --save
```

- Yarn

```shell
yarn add @flowereatfish/eslite-com-api
```

## Usage

### Node.js version 8 or higher (with full Async/Await support)

```javascript
const esliteComCollectionApi = require('@flowereatfish/eslite-com-api');

const run = async () => {
  const results = await esliteComCollectionApi('橡皮擦計畫');
  console.log(results);
};

run();
```

### Others

```javascript
const esliteComCollectionApi = require('@flowereatfish/eslite-com-api');

esliteComCollectionApi('橡皮擦計畫')
  .then(results => console.log(results));
```

## Demo

### Commands

```shell
# To download the files and install packages.
$ git clone https://github.com/FlowerEatFish/eslite-com-api.git
$ cd eslite-com-api
$ yarn install # npm install

# To run a demo.
$ yarn start # npm start
```

### Results

```shell
>>> You search data using keyword "春夏秋冬，日日食光。生活美學家的鑄鐵鍋料理手帖".

[
  {
    title: '春夏秋冬, 日日食光: 生活美學家的鑄鐵鍋料理手帖',
    url: 'http://www.eslite.com/product.aspx?pgid=1001130572489683&kw=%e6%98%a5%e5%a4%8f%e7%a7%8b%e5%86%ac+%e6%97%a5%e6%97%a5%e9%a3%9f%e5%85%89+%e7%94%9f%e6%b4%bb%e7%be%8e%e5%ad%b8%e5%ae%b6%e7%9a%84%e9%91%84%e9%90%b5%e9%8d%8b%e6%96%99%e7%90%86%e6%89%8b%e5%b8%96&pi=1',
    author: [ '渡邊有子著' ],
    publisher: '臉譜出版社',
    publicationDate: '2016/02/27',
    imageUrl: 'http://pic.eslite.com/Upload/Product/201602/m/635912082484381250.jpg',
    price: { discount: 9, currentPrice: 324 },
    introduction: '<div>     <b>今天在廚房也要用心過生活—— <br><br></b>料理界的松浦彌太郎， <br>教你品味四季的本質， <br>追求食材的深層風味， <br>記憶節氣帶來的美好。 <br> <b><br>Instragm超過六萬粉絲追蹤的生活美學料理家——渡邊有子 <br><br></b>崇尚自然、注重優雅品味的料理生活家渡邊有子， <br>在日本已分享了許多對於簡單生活的想法和實行秘訣， <br>尤其在飲食方面，更提出許多同時注重美味、美感和健康的料理，因此廣受大眾歡迎。 <br>在出版過許多料理食譜書後，她認為， <br>使用春、夏、秋、冬的當令食材，搭配鑄鐵鍋，最能引出食材的天然風味。 <br> <b><br>時蔬之美，湯之美，肉鮮之美，盡在鑄鐵鍋裡 <br><br></b>當令食材有自己獨特的鮮味，不用加太多調味料，不用複雜的烹飪方法，就能嚐到不加工、不騙人的好滋味。 <br> <br>在春天，從雪下挖出的第一批紅蘿蔔，經歷過嚴寒冬季，比一般紅蘿蔔更鮮甜。用新鮮月桂葉、百里香葉提香，和新採高麗菜、小番茄、洋蔥、扁豆煮成蔬菜湯，吃一口宛如新生。 <br><br>在夏天，從海裡撈起的新鮮透抽，清掉內臟，塞入新採的洋蔥、黃椒及櫛瓜，配著檸檬吃，比大口吃肉還棒。 <br><br>在秋天，把豐盈好吃的澱粉類蔬菜拿來淋上橄欖油和醋，烤一烤，滿口的馬鈴薯、地瓜、紅蘿蔔、蓮藕，飽滿鬆軟的口感最迷人。 <br><br>在冬天，使用新鮮的大白菜，和豬五花片，依序塞滿鍋裡，煮時不需再加水，一層層相互交疊的大白菜和豬肉片，混合了蔬菜的香氣以及濃郁肉汁，直接端到餐桌上與親友一起享用吧。 <br> <b><br>渡邊有子愛用的法國「傳家之鍋」——STAUB鑄鐵鍋 <br><br></b>來自法國亞爾薩斯地區的STAUB鑄鐵鍋，為廚師專業研製，講究細節構造， <br>厚實的鑄鐵材質可均勻傳熱，迅速鎖住食材原味， <br>只要善用書中的烹調方法，就可以利用鑄鐵鍋高度保溫、不失水的特性， <br>短時間完成美味料理。 <br> <br><b>鑄鐵鍋說不完的好處—— <br><br></b>快速燉煮：利用鑄鐵鍋不易散熱的特性，煮滾後離火，利用餘熱慢慢燜軟食物，不怕肉質太老或者煮到形狀軟爛醜怪，只會熟得剛剛好。 <br><br>無水清蒸：蓋上厚重的鍋蓋後，鍋內就是密閉空間，讓食材本身的水氣不斷循環，煮熟食物，不需加水，不怕焦，就能嘗到不流失的美味。 <br><br>低油香煎：逼出肉本身的油脂，整塊肉會一起煎熟，不會燒焦，受熱不均勻，再也不需要辛勤翻面怕黏鍋。 <br><br>大火香烤：利用鑄鐵鍋均勻受熱的特性，就算使用烤箱大火，鍋裡食物也不會燒焦，會一起熟得剛剛好，還會充分吸收各種配料的香氣。 <br> <b><br>將廚房裡的Stuab鑄鐵鍋拿起來使用吧！ <br><br></b>用簡單的料理方法尋找食材本味， <br>料理中的每一分味覺記憶，都源自大自然四季的風景： <br> <br><b>春</b> <br>春天的食材口感輕盈，只要引出原味，就能感受大自然的新芽萌生。 <br>屬於你的春之味：春紅蘿蔔泥、葡萄乾醃紫色高麗菜、香料煮馬加魚、檸檬蒸海鮮西芹、巴薩米克醋煮白洋蔥、蘆筍燉飯…… <br> <br><b>夏</b> <br>夏天的食材色彩鮮豔，蔬菜、肉食、海鮮和香料的結合，喚醒因溽暑及疲憊而消退的食欲。 <br>開心夏之味：章魚馬鈴薯咖哩、香蒸小番茄、透抽鑲夏季蔬菜、雞肉炒紅椒、白雞冷麵、青椒鑲香料飯、義式水煮魚…… <br> <br><b>秋 </b><br>秋天的上好食材，在善於吸收香料風味的根莖薯類，濃郁的澱粉口感，暖胃又有飽足感。 <br>和親友共享的秋之味：鮭魚醬、小羊肉燜茄子、醋味烤根菜、白酒與肉桂火上鍋、烘烤風味糖煮無花果、地瓜奶油飯…… <br> <b><br>冬</b> <br>冬天可以善用燉煮保住食材風味。綿密鬆軟的蔬菜，肉脂的豐盈口感，帶出湯汁醇厚的鮮味。 <br>全家團聚的冬之味：烤全雞、牛筋肉燉根菜、紅酒醋煮白花菜、烤高麗菜捲、鷹嘴豆泥與雞肝醬、奶油燜韭菜、洋蔥舒芙蕾…… <br><br>   </div>'
  }
]
```

```shell
>>> You search data using keyword "disease".

[ {...}, {...}, ... ] # Array.prototype.length <= 10
```

```shell
>>> You search data using keyword "blablablablablablablablablablablabla".

null
```

## API documentation

### Input parameters

```js
import EsliteComCollectionApi from 'eslite-com-collection-api'; // Here uses development mode as an example

const result = EsliteComCollectionApi(
  keyword, // string. Necessary.
           // If you set it as null, it will get an error.
  page, // number. Positive integer. Default: 1.
        // Every page only shows maximum 10 results.
)
```

### Output results

```js
// If you get one or more result(s), it will return an "array".
result = [
  {
    title: string | null,
    author: string[] | null,
    publisher: string | null,
    publicationDate: string | null,
    imageUrl: string | null,
    introduction: string | null,
    price: {
      discount: number | null,
      currentPrice: number | null,
    },
    url: string | null,
  },
  { ... }, { ... }, ...
];

// If you have not got any result, it will return a "null".
result = null;
```
