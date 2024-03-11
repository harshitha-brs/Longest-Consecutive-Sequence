var longestConsecutive = function(nums) {
  let set = new Set();
  for (let ele of nums) {
    set.add(ele);
  }
  let maxCount = 0;
  for (let ele of nums) {
    if (!set.has(ele - 1)) {
      let count = 0;
      while (set.has(ele)) {
        ele++;
        count++;
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
};

document.getElementById("submit").addEventListener("click", function() {
  const input = document.getElementById("intervalsInput").value;
  const nums = JSON.parse(input);
  const longestSequence = longestConsecutive(nums);
  document.getElementById("output").innerText =
    "Length of Longest Consecutive Sequence: " + longestSequence;
});
