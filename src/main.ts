const phi = (1 + Math.sqrt(5))/2;

export function fibonacci(n) {
  const asymp = Math.pow(phi, n) / Math.sqrt(5);

  return Math.round(asymp);
}
