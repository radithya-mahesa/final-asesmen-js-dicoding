function fibonacci(n) {
  const number = [0, 1];

  for (let i = 2; i <= n; i++) {
    number.push(number[i - 1] + number[i - 2]);
  }

  return number.slice(0, n + 1);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
