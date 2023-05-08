module.exports = {
  type: 'session',
  test: {
    headers: {
      'X-USERNAME': '{{bundle.authData.username}}',
      'X-PASSWORD': '{{bundle.authData.password}}',
    },
    params: {
      password: '{{bundle.authData.password}}',
      username: '{{bundle.authData.username}}',
    },
    url: 'https://0a25-136-185-200-116.ngrok-free.app/',
  },
  fields: [
    { computed: false, key: 'username', required: true, label: 'username' },
    {
      computed: false,
      key: 'password',
      required: true,
      label: 'password',
      type: 'password',
    },
  ],
  sessionConfig: {
    perform: {
      body: {
        username: '{{bundle.authData.username}}',
        password: '{{bundle.authData.password}}',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      method: 'POST',
      url: 'https://0a25-136-185-200-116.ngrok-free.app/sessiontoken',
    },
  },
  connectionLabel: '{{bundle.authData.username}}',
};
