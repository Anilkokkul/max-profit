function maximizeEarnings(n) {
  if (n < 4) {
    return 0;
  }

  const timeUnits = [4, 5, 10];
  const earningsPerUnit = [1000, 1500, 3000];

  let profit = 0;
  let arr = [0, 0, 0];

  while (n >= 4) {
    const prof = earningsPerUnit.map((earnings, index) => {
      const temp = n - timeUnits[index];
      return temp >= 0 ? temp * earnings : 0;
    });
    const maxIndex = prof.indexOf(Math.max(...prof));
    profit += prof[maxIndex];
    arr[maxIndex]++;
    n -= timeUnits[maxIndex];
  }
  return { Earnings: `$${profit}`, Solution: arr };
}
function formatSolution(arr) {
  return `T: ${arr[1]}, P: ${arr[0]}, C: ${arr[2]}`;
}

// Test cases
const testCases = [7, 8, 13];
for (let i = 0; i < testCases.length; i++) {
  const n = testCases[i];
  const result = maximizeEarnings(n);
  console.log(`Test Case No ${i + 1}`);
  console.log(`Time Unit: ${n}`);
  console.log(`Earnings: ${result.Earnings}`);
  console.log("Solution:");
  console.log(`1. ${formatSolution(result.Solution)}`);
}
