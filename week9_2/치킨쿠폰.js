function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    let serviceChicken = Math.floor(coupon / 10);
    answer += serviceChicken;
    coupon = (coupon % 10) + serviceChicken;
  }

  return answer;
}
