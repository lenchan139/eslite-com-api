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
This package will also try fetch full description from detail page but not only fetch from quering page also in book detail page for each quering items. So this package will load and parse content longer than the original one.
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
const esliteComCollectionApi = require('eslite-com-api-long-intro');

const run = async () => {
  const results = await esliteComCollectionApi('橡皮擦計畫');
  console.log(results);
};

run();
```

### Others

```javascript
const esliteComCollectionApi = require('eslite-com-api-long-intro');

esliteComCollectionApi('橡皮擦計畫')
  .then(results => console.log(results));
```

## Demo

### Commands

```shell
# To download the files and install packages.
$ git clone https://github.com/lenchan139/eslite-com-api.git
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
    title: '地球為什麼哭了呢?',
    url: 'http://www.eslite.com/product.aspx?pgid=1003145172825105&kw=9789579125697&pi=1',
    author: [ '好日記' ],
    translator: '陳怡妡',
    illstrator: '好日記 (하루치)',
    publisher: '大穎文化事業股份有限公司',
    publicationDate: '2020/02/12',
    imageUrl: 'http://pic.eslite.com/Upload/Product/202002/m/637170932039851250.jpg',
    price: { discount: 9, currentPrice: 270 },
    introduction: '<div>     短暫便利生活的代價，由地球概括承受 <br/>一則反映環境隱憂的寓言故事 <br/> <br/>那些我們用完即丟的物品、垃圾──現在都到哪裡去了？ <br/>一座乾淨樸實的海島，從島民好奇地將逝世的大鯨魚肚子剖開後，發現了滿滿的垃圾。 <br/>隨著時間流逝，鯨魚的身體因生物分解回歸自然，很多不可分解的垃圾卻永遠在沙灘上。 <br/>就像打開了潘朵拉的盒子，海島的乾淨、動物的生存環境，從此一去不復返。 <br/>從這個名字與地球同音的小女孩「蒂裘」眼中，看見人類為了短暫的便利生活，所付上的昂貴代價…… <br/> <br/>這是一則關於環境與人性的故事，反映海洋與生物此時此刻正面臨的困境。 <br/>本書在視覺呈現上極具吸引力，每幅圖畫帶有鮮明的顏色對比，多樣的構圖及色彩讓讀者在閱讀完本作品後依舊留下深刻的印象。 <br/>除了豐富的視覺呈現，充滿張力的故事結構勾引著讀者們的好奇心，讓人迫不及待地一頁頁翻閱想知道故事的進展。 <br/>人類求新、求變、求快的社會腳步，正大量而快速的製造許多地球不堪負荷的用品，這些短時間無法被分解的垃圾不斷擴張蔓延，從城市移動到鄉村、從陸地堆積到海洋、從人類的居住範圍擴張到動物的生存環境，蔓延到我們無法想像的區域。 <br/>人類短暫享樂過後的代價，卻由動物的生活品質甚至生命來承擔，由所有周圍的島嶼環境一起概括承受。 <br/>本書是大人與小孩都值得一看的繪本作品。作者期望透過本書可以喚起人類對大自然的愛護之心，進一步盡到保護大自然的本分。 <br/> <br/>★本書傳達了有力的信息，以拓寬讀者視野的方式說明了我們的困境！   </div>',
    authorIntro: '<P>好日記 <br/>好日記 (하루치) <br/>您好，我是好日記。 <br/>我習慣帶著菜籃子上市場採購食物，而不吃外賣。讓我們一起創造充滿芬多精且人和小貓咪都可以共存的自然環境吧！就算只是減少一點點的塑膠垃圾也會對我們的自然環境產生幫助，以此為發想，我寫了《地球為什麼哭了呢？》。主角「蒂裘」是想著「地球」所取的名字。 <br/>擁有社群軟體IG帳號「murakhobby_haruchi」也是Web網頁動畫連載的作家，涉獵領域有插畫、動畫導演、紡織設計以及繪本創作。 <br/>陳怡妡 <br/>陳怡妡 <br/>畢業於文化大學韓語系，目前學術進修中，同時以自由譯者、韓語教師的身分活動。希望透過文字傳達更多的訊息給世界上需要安慰的朋友們，讓語言幫彼此建立起橋樑，也成為互相了解彼此的開端。譯有《無論何時，媽媽永遠在這裡》、《媽媽藥》、《是兔子嗎？》、《現在是幾點呢？》等。 <br/></P>',
    boundType: '精裝',
    awards: '安東尼布朗圖畫書大賽第8屆獲獎繪本！'
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
