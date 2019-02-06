# Syncing Licenses From WordPress Store:

- **To Sync Licenses From WordPress Store Follow the Following Steps:**
    - [Creating API Key](#creating-api-key)
    - [Install AppSero Helper](#install-appsero-helper)
    - [Enable Licensing](#enable-licensing)
    - [Map the Plugin/Theme](#connect-the-plugin-theme)
    - [Sync Licenses](#sync-licenses)

## Creating API Key

To create <code>API Key</code> go to the API Key page under right top navigation menu.

![API Key](../images/api-key/1.png)

Then click on <code>Create API Key</code> button.

![Create API Key](../images/api-key/2.png)

> API Key have been created. Use this API Key to connect your WordPress Site by AppSero Helper Plugin

## Install AppSero Helper

Appsero Helper provides a connection between AppSero and WordPress store.

Go to your store WordPress site and install <code>AppSero Helper</code> plugin. To install `appsero-helper` upload the `appsero-helper` plugin to your `/wp-content/plugins/` directory. Or go to the plugin page and search `AppSero Helper` and install and activate the plugin. When installation will be completed it will ask for a `API Key` to connect with AppSero.
 
 ![Activate AppSero Helper](../images/api-key/activate-wordpress.png)
 
 Copy `API Key` from AppSero. If don't have any `API Key` then [create new API Key](/). Copy the Key and paste it to API Key input box then click on `Connect` button.
 
 ::: tip
 After completing installation if it doesn't redirect to `AppSero Helper` page then go to `Settings > Appsero Helper`. And connect the Helper.
 :::

> Your Website is now connected with AppSero.

## Enable licensing

To sync license with your WordPress site at first enable licensing for the plugin/theme as well as select license source. If enabled licensing at the time of creating the project then don’t need to do anything. If not then go to <code>Settings</code> page and select <code>Your Site</code> as hosted site of the plugin/theme. Select the plugin is used for billing. There are two option one is <code>Easy Digital Downloads</code> another one is <code>WooCommerce</code>.  

To sync with <code>EDD Software Licensing</code> select <code>Easy Digital Downloads</code> as your billing plugin and <code>EDD Software Licensing</code> as license manager. 

![General Settings](../images/settings/1.png)

To sync with <code> WooCommerce API Manager</code> select <code>WooCommerce</code> as billing plugin and <code>Woo API Manager</code> as license manager. 
               
To sync with <code>WooCommerce Software Add-on</code> select <code>WooCommerce</code> as billing plugin and <code>Woo Software Add-on</code> as license manager. 

![General Settings](../images/settings/2.png)

And finally, click on **<code>Update Settings</code>** button.

> Licensing have been enabled for the Plugin/Theme


## Connect the Plugin/Theme

To connect Plugin/Theme go to <code>Integrations</code> Page. On <code>Connect Project With Store</code> box select the store from the select field. 
Select the project from the store’s available projects. Map project variations if the Plugin/Theme has multiple variations. 

![Connect Project With Store](../images/api-key/3.png)

And click on **<code>Update Connection</code>**

> Well done, Plugin/Theme has been mapped with store's Plugin/Theme.


## Sync licenses

To sync license with your WordPress store go to <code>Licenses</code> page and click on <code>Sync With Store</code> link under dropdown menu.

![API Key](../images/license-syncing.png)

> Syncing will be started and you will get an email when syncing will be completed. 

