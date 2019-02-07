module.exports = {
    title: 'AppSero',
    description: 'AppSero User Guide',
    index:'index.md',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'User Guide', link: '/user-guide/'},
            {text: 'Developer Guide', link: '/developer-guide/'},
        ],
        sidebar: {
            '/user-guide/': [
                '',
                // ['create-account', 'Creating An Account'],
                ['add-pluign', 'Adding a Plugin'],
                ['add-theme', 'Adding a Theme'],
                ['sync-license', 'Syncing Licenses'],
                ['envato-licensing', 'Licensing for Envato'],
                ['email-digest', 'Email Digest'],
                ['releases', 'Release'],
                ['forword-deactivation', 'Forword Deactivations'],
                ['appsero-helper', 'AppSero Helper'],
            ],

            '/developer-guide/': [
                '',
                ['appsero-client', 'AppSero Client'],
                ['wporg-project', 'Wp.org Project'],
                ['envato-project', 'Envato Project'],
                ['your-store-project', 'Your Store Project'],
            ]
        }
    },
  };