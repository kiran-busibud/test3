const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('triggers', () => {
  test('new recipe', async () => {
    const adHocResult = await appTester(
      async (z, bundle) => {
        const response = await z.request(
          'https://example.com/some/setup/method',
          {
            params: {
              numItems: bundle.inputData.someValue,
            },
          }
        );

        return {
          someHash: z.hash('md5', 'mySecret'),
          data: response.data,
        };
      },
      {
        authData: { token: 'some-api-key' },
        inputData: {
          someValue: 3,
        },
      }
    );

    expect(adHocResult.someHash).toEqual('a5beb6624e092adf7be31176c3079e64');
    expect(adHocResult.data).toEqual({ whatever: true });

  });
});