export function removeCDATA(str) {
  return str.replace("<![CDATA[ ", "").replace(" ]]>", "");
}
export function getTime(str) {
  let date = new Date(str);
  let x = (Date.now() - date.getTime()) / 1000 / 60 / 60;
  if (x < 1) {
    return parseInt(x * 60) + " phút trước";
  } else {
    return parseInt(x) + " giờ trước";
  }
}
