export function simpleArraySum(ar: number[]): number {
  let sum = 0;

  // Döngü ile dizideki tüm elemanları topla
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}

/*
 * 📝 Problem Description:
 * Write a function that calculates the sum of the elements in a given array of integers.
 *
 * 📌 Example Input:
 *   ar = [1, 2, 3, 4, 10, 11]
 *
 * ✅ Expected Output:
 *   31
 *
 * 🎯 Explanation:
 *   1 + 2 + 3 + 4 + 10 + 11 = 31
 *
 * ⏳ Difficulty Level: Easy
 */
