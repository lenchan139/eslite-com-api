/**
 * To parse the results when the fetcher got one or more data.
 */

import { DetailType, PriceField } from "../index";

const removeAllHtmlTag = (text: string): string => {
  let result = text.replace(/<\/?\w+[^>]*>/gi, "");
  // To remove beginning and end of spaces
  result = result.replace(/^\s+/, "");
  result = result.replace(/\s+$/, "");
  result = result.replace("&nbsp;", "");

  return result;
};

const setItemWithTag = (text: string[], tag: string): number | null => {
  const result = text.filter((value): boolean => value.includes(`${tag}`))[0];

  return result ? Number(result.replace(/\D/gi, "")) : null;
};

const getItemPrice = (htmlCode: string): PriceField => {
  const result = htmlCode.match(/<td valign="top" class="summary">[\w\W]*?<\/td>/gi);

  if (result) {
    const resultWithArray = result[0].split("span ");
    let resultWithPrice = resultWithArray.filter((value): boolean =>
      value.includes('class="price_sale"'),
    );
    resultWithPrice = resultWithPrice.map((value): string => removeAllHtmlTag(value));

    return {
      discount: setItemWithTag(resultWithPrice, "折"),
      currentPrice: setItemWithTag(resultWithPrice, "元"),
    };
  }

  return {
    discount: null,
    currentPrice: null,
  };
};

const getItemImageUrl = (htmlCode: string): string | null => {
  const result = htmlCode.match(/<img [\w\W]*?>/gi);

  if (result) {
    const filter = result[0].match(/src="[\w\W]*?"/gi);

    return filter && filter[0].replace(/src="([^"]*)"/gi, "$1");
  }

  return null;
};

const getItemAuthor = (htmlCode: string): string[] | null => {
  const result = htmlCode.match(
    /<span id="ctl\d*_ContentPlaceHolder1_rptProducts_ctl\d*_LblCharacterName">[\w\W]*?<\/span>/gi,
  );

  if (result) {
    const filter = removeAllHtmlTag(result[0]);

    return filter.split(" /");
  }

  return null;
};

const getItemPublisher = (htmlCode: string): string | null => {
  const result = htmlCode.match(
    /<span id="ctl\d*_ContentPlaceHolder1_rptProducts_ctl\d*_LblManufacturerName">[\w\W]*?<\/span>/gi,
  );

  return result && removeAllHtmlTag(result[0]);
};

const getItemPublicationDate = (htmlCode: string): string | null => {
  const result = htmlCode.match(
    /<span id="ctl\d*_ContentPlaceHolder1_rptProducts_ctl\d*_LblManufacturerDate">[\w\W]*?<\/span>/gi,
  );

  if (result) {
    const filter = result[0].match(/出版日期:\d{4}\/\d{2}\/\d{2}/);

    return filter && filter[0].replace("出版日期:", "");
  }

  return null;
};

const getItemUrl = (htmlCode: string): string | null => {
  const result = htmlCode.match(/http:\/\/www\.eslite\.com\/product\.aspx[^"]*/gi);

  return result && result[0];
};

const getItemTitle = (htmlCode: string): string | null => {
  const result = htmlCode.match(
    /<span id="ctl\d*_ContentPlaceHolder1_rptProducts_ctl\d*_LblName">[\w\W]*?<\/span>/gi,
  );

  return result && removeAllHtmlTag(result[0]);
};

const getItemIntroduction = (htmlCode: string): string | null => {
  const result = htmlCode.match(
    /<span id="ctl\d*_ContentPlaceHolder1_rptProducts_ctl\d*_LblShortDescription">[\w\W]*?<\/span>/gi,
  );

  return result && removeAllHtmlTag(result[0]);
};

const getItem = (htmlCode: string): DetailType => {
  return {
    title: getItemTitle(htmlCode),
    url: getItemUrl(htmlCode),
    author: getItemAuthor(htmlCode),
    publisher: getItemPublisher(htmlCode),
    publicationDate: getItemPublicationDate(htmlCode),
    imageUrl: getItemImageUrl(htmlCode),
    price: getItemPrice(htmlCode),
    introduction: getItemIntroduction(htmlCode),
  };
};

const splitHtmlCode = (htmlCode: string): string[] | null =>
  htmlCode.match(/<table border="0">[\w\W]*? <\/table>/gi);

const getSpecificHtmlCode = (htmlCode: string): string | null => {
  const result: string[] | null = htmlCode.match(
    /<div class="box_list">[\w\W]*?<div class="box_pagination">/gi,
  );

  return result && result[0];
};

export const itemDetailParser = async (htmlCode: string): Promise<string> => {
  const first = ''
  const select: string[] | null = htmlCode.match(
    /<div id="ctl00_ContentPlaceHolder1_Product_info_more1_introduction" class="C_box" style="display:block;">[\w\W]*?<div id="ctl00_ContentPlaceHolder1_Product_info_more1_all_character" class="C_box" style="display:none;">/gi,
  );
  let  rawResult = select && select[0]
  if(!rawResult) rawResult = ''
  const result = rawResult.replace(/<div id="ctl00_ContentPlaceHolder1_Product_info_more1_introduction" class="C_box" style="display:block;">/,'<div>')
  .replace('<h2>內容簡介</h2>','')
  .replace('<!--網站專用:S-->', '')
  .replace('<!--網站專用:E-->', '')
  .replace('<!-- 短片: 開始 -->', '')
  .replace('<!-- 短片: 結束 -->', '')
  .replace(/<!-- 圖片說明: 開始 -->[\w\W]*? <!-- 圖片說明: END -->/gi, '')
  .replace('<a href="#top" class="top_line" title="top"></a>', '')
  .replace('<hr />', '')
  .replace('<!--作者介紹character-->', '')
  .replace('<div id="ctl00_ContentPlaceHolder1_Product_info_more1_all_character" class="C_box" style="display:none;">','')

  return result.trim()
}
export const itemListParser = async (htmlCode: string): Promise<DetailType[]> => {
  // To get specific html code containing data
  const targetHtmlCode: string | null = getSpecificHtmlCode(htmlCode);
  // To split code from string into array by special tag
  const itemListWithCode: string[] | null = targetHtmlCode ? splitHtmlCode(targetHtmlCode) : null;
  if (Array.isArray(itemListWithCode) && itemListWithCode.length > 0) {
    // To build up data we want
    const itemList: DetailType[] = itemListWithCode.map(
      (value: string): DetailType => getItem(value),
    );

    return itemList;
  }

  return [];
};
