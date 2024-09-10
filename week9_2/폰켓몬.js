function solution(nums) {
  const Pokemon = new Set(nums);

  const max = nums.length / 2;

  return Math.min(Pokemon.size, max);
}
