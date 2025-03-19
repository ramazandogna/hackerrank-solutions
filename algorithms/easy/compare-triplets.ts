export function compareTriplets(a: number[], b: number[]): number[] {
  let alice: number = 0;
  let bob: number = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
}

/*
 * 📝 Problem Description:
 * Compare two triplets representing ratings for Alice and Bob's challenges.
 * Award points based on comparison: if a[i] > b[i], Alice gets a point; if a[i] < b[i], Bob gets a point.
 * If a[i] = b[i], neither gets a point.
 *
 * 📌 Example Input:
 *   a = [5, 6, 7]
 *   b = [3, 6, 10]
 *
 * ✅ Expected Output:
 *   [1, 1]
 *
 * 🎯 Explanation:
 *   a[0] > b[0], so Alice gets 1 point
 *   a[1] = b[1], so no points
 *   a[2] < b[2], so Bob gets 1 point
 *   Final score: Alice 1, Bob 1
 *
 * ⏳ Difficulty Level: Easy
 */
