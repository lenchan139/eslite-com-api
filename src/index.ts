/**
 * Main control for this library.
 */

import { EsliteComCollectionFunction, DetailType } from "../index";
import { collectionFetch, FetchResult, detailFetch } from './eslite-com-fetch';
import { itemListParser, itemDetailParser } from './item-list-parser';

const esliteComCollection: EsliteComCollectionFunction = async (
  keyword: string,
  page = 1,
): Promise<DetailType[] | null> => {
  const htmlCodeAfterFetch: FetchResult = await collectionFetch(keyword, page);
  // To check whether data is got
  if (htmlCodeAfterFetch.data && !htmlCodeAfterFetch.data.includes('<div class="box_noResult">')) {
    const itemList = await itemListParser(htmlCodeAfterFetch.data);
    if (itemList.length > 0) {
      // To do here if the HTML code contains one or more result(s)
      for (const i in itemList) {
        const item = itemList[i];
        const url: string = item.url ?? "";
        if (item && item != null) {
          const detailHtmlCodeFetch: FetchResult = await detailFetch(url);
          if (
            detailHtmlCodeFetch &&
            detailHtmlCodeFetch.data &&
            detailHtmlCodeFetch.data.includes(
              `<div id="ctl00_ContentPlaceHolder1_Product_info_more1_introduction"`,
            )
          ) {
            const detail = await itemDetailParser(detailHtmlCodeFetch.data)
            item.introduction = detail.introduction;
            if (item.author != null) {

            item.author[0] = detail.author;
            item.translator = detail.translator;
            }
            itemList[i] = item;
          }
        }
      }
      return itemList;
    }
    // To do here if no result is got from the HTML code
    return null;
  }
  // To do here if html code is empty (no result is got from the HTML code)
  return null;
};

export default esliteComCollection;
