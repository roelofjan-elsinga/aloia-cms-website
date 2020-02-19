---
layout: documentation
title: Installation
permalink: /installation
---

# Installation

You can install this package through composer using:

```bash
composer require roelofjan-elsinga/aloia-cms
```

Afterwards, you may want to publish the configuration file. The defaults are sensible, 
but if you want to adjust any of the file locations, permission, etc. you can do so.

```bash
php artisan vendor:publish --provider="AloiaCms\\AloiaCmsServiceProvider"
```

The service provider is **automatically discovered**, so you won't need to include it in your ``config/app.php`` file.