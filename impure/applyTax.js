let globalTax = 5

export function applyTax(price) {
  return price + price * (globalTax / 100)
}
