import request from "../request";

export function getGoodsPriceInfo() {
  return request.get({ url: "/home/goodprice" });
}
