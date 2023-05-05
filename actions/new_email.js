module.exports = {
    operation: {
      perform: {
        body: { userId: '{{bundle.authData.userId}}' },
        headers: {
          Accept: 'application/json',
          'X-USERNAME': '{{bundle.authData.username}}',
          'X-PASSWORD': '{{bundle.authData.password}}',
        },
        method: 'POST',
        params: {
          username: '{{bundle.authData.username}}',
          password: '{{bundle.authData.password}}',
        },
        url: 'https://6b6d-136-185-200-116.ngrok-free.app/products',
      },
      outputFields: [
        { key: 'id', label: 'id', type: 'integer' },
        { key: 'name', label: 'name', type: 'string' },
      ],
    },
    key: 'new_product',
    noun: 'Product',
    display: {
      label: 'New Product',
      description: 'Trigger when a new product is created for a user',
      hidden: false,
      important: true,
    },
  };
  