export function removeCDATA(str) {
  return str.replace("<![CDATA[ ", "").replace(" ]]>", "");
}
