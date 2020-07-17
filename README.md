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
    title: '圖書騎兵隊',
    url: 'http://www.eslite.com/product.aspx?pgid=1003128672740491&kw=9789861898971&pi=1',
    author: [ '海瑟漢森' ],
    translator: '陳郁婷',
    illstrator: '大衛司摩 (David Small)',
    publisher: '格林文化事業股份有限公司',
    publicationDate: '2019/01/31',
    imageUrl: 'http://pic.eslite.com/Upload/Product/201901/m/636833111432561250.jpg',
    price: { discount: 79, currentPrice: 221 },
    introduction: '<div>     ◎真實歷史改編，講述1930年代一群勇敢的圖書館員不畏艱辛、不取分文，只為上山送書給貧困人家，讓他們能讀書識字的感人故事。 <br>◎凱迪克金獎得主大衛司摩和克里斯多福大獎得主海瑟漢森感人之作。 <br>◎榮獲克里斯多福獎、美國五大湖區最佳圖書獎、安妮里茲德故事獎……等15項兒童文學獎肯定。 <br> <br>從小生活在高山上的阿凱，完全無法理解為什麼姊姊阿蕾喜歡看書，那一堆鬼畫符的符號，阿凱看了就頭痛。但是有一位圖書館員，不怕天氣糟，不怕路途遠，總會在固定的時間帶著書到阿凱的家。阿凱很清楚那不是一段輕鬆的路，但究竟是什麼讓那位圖書館員堅持騎馬上山只為了送書來呢？ <br> <br>本書改編自美國1930年代的真實歷史，在經濟大蕭條時期，有一群女圖書館員不畏風雨，每個月都會騎馬上山送書，讓居民們不用因為交通的困難，就放棄學習新知的心。她們的薪水微薄，每個月只領台幣405元的工資。送書的路途更是辛苦，她們平均要騎160公里以上的距離才能到目的地，要花上一個禮拜才能到達。雖然艱辛，但是她們對這份工作感到很驕傲，因為她們成功把外面世界的訊息，帶進山裡，更讓許多原本討厭讀書的孩子，變成終生的愛書人。 <br> <br>透過這個感人的故事，讓孩子了解，每讀完一本書，就是在心裡種下一顆種子，跟著孩子一起成長、茁壯，並隨時提供支持與能量，幫助孩子飛得遠，更飛得穩。   </div>',
    authorIntro: '<p><strong>■作者簡介</strong></p><p><strong>海瑟漢森（</strong><strong>Heather Henson）</strong><br>出生於美國肯塔基州，從小生活在家族經營的劇院裡。畢業後曾任兒童書籍編輯。在紐約生活多年後，她回到家鄉，把重心放在寫作上面。海瑟的作品多關注在歷史上未被歌頌的英雄，並讚美他們的成就。也因此催生了這本講述1930年代有一群圖書館員為阿帕拉契山無數家庭提供書籍，幫助他們提升識字率、及學習新知的勇敢故事。</p><p><strong><strong>■繪者簡介</strong></strong></p><p><strong><strong></strong>大衛司摩</strong><strong>（David Small）</strong><br>美國知名童書作家、畫家，曾獲凱迪克大獎、克里斯多福獎、EB懷特文學獎。年少時多次在夏天前往印地安納州鄉下與祖父母同住，使他對動物及鄉村生活有一份特殊的感情和喜愛，對日後的創作也有影響。大衛在耶魯大學取得藝術碩士後，在大學教繪畫長達十四年之久，後來由於校方刪減經費而失業，從此開始創作。大衛擅長以水彩、鉛筆及粉蠟筆作畫，畫風柔和雋永，獨具特色。在格林出版的作品有《小恩的秘密花園》。</p>',
    boundType: '精裝'
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
