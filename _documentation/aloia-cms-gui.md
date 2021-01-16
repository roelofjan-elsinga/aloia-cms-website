---
layout: documentation
title: Aloia CMS Dashboard
permalink: /aloia-cms-gui
---

# Aloia CMS Dashboard

The Aloia CMS Dashboard is a separate package for Aloia CMS and is completely optional.
This dashboard gives you a good base to start from. 
From this base you can add pages and forms for new content types.

## Requirements
The requirements for this dashboard are the same as the [requirements for the CMS Core]({% link _documentation/requirements.md %}).

## Installation
You can include this package through Composer using:

```bash
composer require roelofjan-elsinga/aloia-cms-gui
```

and if you want to customize any of the default settings used by this package, you can publish the configuration:

```bash
php artisan vendor:publish --provider="AloiaCms\\GUI\\ServiceProvider"
```

This will create a ``aloiacmsgui.php`` in your config folder.

## Publishing the assets

If you've executed the previous command, to publish the ServiceProvider, you've published the required assets already.
If you don't want to publish the ServiceProvider, you can also publish the assets by itself by running:

```bash
php artisan aloiacmsgui:publish:assets
```

This places the assets for the dashboard in ``public/vendor/aloiacmsgui``.

## Publishing the secret key
In order to create JWT tokens for authentication, your application needs to use a secret key. 
First of, add a new entry to your config/app.php file:

```php
return [
    // ... 
    
    'secret' => env('APP_SECRET'),
    
    // ... 
];
```

Now, you can generate the APP_SECRET key using the following command:

```bash
php artisan aloiacmsgui:secret:generate
```

This will create an entry in your .env file: APP_SECRET=[your-token].

To regenerate this key, you can re-run the command.

## Creating a user

You can create a user by running:

```bash
php artisan aloiacmsgui:create:account \
  --username=yourusername \
  --password=yourpassword
```

After this, you'll be able to log in using the credentials.

## Get to your dashboard
Your dashboard is located at ``/cms/login`` by default. 
You can change the prefix in ``config/aloiacmsgui.php`` under ``path``.

## Editors

By default, two editors are included in this package: CKEditor for HTML pages, and InscrybMDE for Markdown pages.

You can customize which editors you want to use for HTML and Markdown pages by overwriting the views.

## Testing

You can run the included tests by running ``./vendor/bin/phpunit`` in your terminal.