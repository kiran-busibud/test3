const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

zapier.tools.env.inject();

describe('triggers', () => {
  test('new recipe', async () => {
    const bundle = {
      inputData: {
        style: 'mediterranean',
      },
    };

    const results = await appTester(
      App.triggers.recipe.operation.perform,
      bundle
    );
    expect(results.length).toBeGreaterThan(1);

    const firstRecipe = results[0];
    expect(firstRecipe.id).toBe(1);
    expect(firstRecipe.name).toBe('Baked Falafel');
  });
});