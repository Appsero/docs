module.exports = {
    title: 'AppSero',
    description: 'AppSero Documentationp',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Developer Guide', link: '/developer-guide/'}
        ],
        sidebar: {
            '/developer-guide/': [
                '',
                ['create-account', 'Creating An Account'],
                ['add-pluign', 'Add a Plugin'],
                ['add-theme', 'Add a Theme'],
                ['sync-license', 'Sync Licenses'],
                ['envato-licensing', 'Licensing for Envato'],
            ]
        }
    },
  }