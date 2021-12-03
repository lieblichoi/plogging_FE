const getCookie = (name) => {
  let value = ';' + document.cookie;
  let parts = value.split(';' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};
// 쿠키에 저장
const setCookie = (name, value, exp = 1) => {
  // 날짜 객체
  let date = new Date();
  // setTime 유효기간 설정
  date.setTime(date.getTime() + exp * 1 * 60 * 60 * 1000);
  // 백틱 안에 name, value, exp(만료일) 넣어서 toUTCString으로 문자로 넘겨주기
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};
// 쿠키 삭제
const deleteCookie = (name) => {
  // 만료일을 과거로 설정, 쿠기 삭제
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};
const getsCookie = (name) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
// 내보내기 - 외부 사용
export { getCookie, setCookie, deleteCookie, getsCookie };
