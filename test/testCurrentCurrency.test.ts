// eslint-disable-next-line require-await
import { convert } from 'current-currency'

test('Test USD to BTC', async () => {
  const res = await convert('USD', 1, 'BTC');
  expect(res).toBeDefined();
})
