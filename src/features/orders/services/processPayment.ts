const PAYMENT_DELAY = 1200

export async function processPayment() {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, PAYMENT_DELAY)
  })
}
