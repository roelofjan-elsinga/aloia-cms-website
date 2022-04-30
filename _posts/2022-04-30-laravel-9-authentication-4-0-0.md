---
title:  "Aloia CMS 4.0.0: Laravel 9, PHP 8, Authentication, and more!"
date:   2022-04-30 12:00:00 +0200
permalink: /articles/laravel-9-authentication-4-0-0
summary: |
    Aloia CMS 4.0.0 is a big one! 
    Laravel 9.x and PHP 8.x support, dropping Laravel 6.x & 7.x and PHP 7.x support, and code for smoother integration in Laravel.
    This version removes a lot of the bloat of the earlier versions and adds an easy-to-use integration with the Laravel Authentication layer.
---

The 4.0.0 release has a very specific theme: Do what we do well and remove everything else!
In earlier versions, we've had support for uploading files, managing images, and code that was very specific for use in my personal projects.
Uploading files and managing images are outside the scope of this headless flat file CMS, so I've removed them.
Remove the bloat and do what we do best!

Version 4.0.0 brings a lot of changes that could be considered as breaking changes, which is why I've tagged this as a major version.
These are the biggest changes:

## Additions
- Added Laravel 9 support
- Added UserProvider for flawless integration of User Authentication with Aloia CMS and Laravel
- Added an authentication block in the config file
- Added Unique validation rule to test for unique models in Laravel validation

### Using the Aloia CMS to authenticate your users

If you've built systems with Laravel before, you know how nice the authentication layer is.
I didn't want to reinvent the wheel, so I've added a UserProvider for Aloia CMS.

You can include this by following the steps in: [Authentication]({% link _documentation/authentication.md %})

### Validation rules

As part of the Laravel Authentication integration, I've added a new form validation rule: Unique.
If you've used Laravel before, you'll recognize the "unique:tablename" validation rule. 
This rule validates if the field is unique in the specified table name.
Example: ``["email" => "unique:users"]`` validates whether the email field is unique in the users table.
This validation is used during registration and will fail if you use the Aloia CMS authentication integration, because there is no database.

That's why you can replace that rule like so: 
```php
["email" => new \AloiaCms\Validation\Rules\Unique(\AloiaCms\Auth\User::class)]
```
This will check that the User model is unique for the email key.

## Updates
Migrated testing from Travis to Github Actions

## Removals
- Removed unused config options: aloiacms.pages, aloiacms.articles, aloiacms.permissions, aloiacms.uploaded_files
- Removed PHP 7.x support
- Removed Laravel 6, 7 support
- Removed composer git hooks
- Removed the FileFinder class as this only worked on Linux *
- Removed the Media class, as this is something outside of the scope of managing content *
- Removed the Permissions Command *
- Removed error-prone code from the Article model **

## Conclusion
Overall, this release removes a lot of infrequently used code and adds nice features that make using Aloia CMS for your projects even easier.
The addition of the user authentication in this release is very much a "scratch your own itch" feature, but it can help your development experience better as well.
There is no more need for a database.
