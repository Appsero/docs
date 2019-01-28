module.exports = {
    title: 'AppSero',
    description: 'AppSero Documentationp',
    index:'index.md',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Developer Guide', link: '/developer-guide/'}
        ],
        sidebar: {
            '/developer-guide/': [
                '',
                // ['create-account', 'Creating An Account'],
                ['add-pluign', 'Adding a Plugin'],
                ['add-theme', 'Adding a Theme'],
                ['sync-license', 'Syncing Licenses'],
                ['envato-licensing', 'Licensing for Envato'],
                ['email-digest', 'Email Digest'],
                ['releases', 'Release'],
                ['forword-deactivation', 'Forword Deactivations'],
                ['appsero-client', 'AppSero Client'],
                ['appsero-helper', 'AppSero Helper'],
            ]
        }
    },
  }