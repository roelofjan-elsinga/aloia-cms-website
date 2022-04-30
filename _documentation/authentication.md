---
layout: documentation
title: Authentication
permalink: /authentication
---

# Authentication

Laravel offers a very easy-to-use authentication mechanism.
If you want to, you can use Aloia CMS as an authentication layer with Laravel.

All you have to do to set up Laravel to use flat files as the User Authentication layer is register the ``AloiaCmsUserProvider`` in your ``AuthServiceProvider``:

```php
namespace App\Providers;

use AloiaCms\Auth\AloiaCmsUserProvider;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Auth::provider('aloiacms', function ($app, array $config) {
            return new AloiaCmsUserProvider(
                $app['hash'],
                $config['model'],
            );
        });
    }
}
```

Now we need to update your ``config/auth.php`` to set the user model:

```php
'providers' => [
    'users' => [
        'driver' => 'aloiacms',
        'model' => \AloiaCms\Auth\User::class
    ],
],
```

## Registering users

If you're using the [Laravel UI](https://github.com/laravel/ui) scaffolding for your authentication layer, you'll have to update the ``RegisterController`` slightly.

### Validation rules

Firstly, we'll need to update the validation rules for registering from:

```php
protected function validator(array $data)
{
    return Validator::make($data, [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);
}
```

To a customer validation rule for the unique password on a ``User`` model:

```php
protected function validator(array $data)
{
    return Validator::make($data, [
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'email', 'max:255', new \AloiaCms\Validation\Rules\Unique(\AloiaCms\Auth\User::class)],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);
}
```

This validation rule will make sure that the email is unique for the User model in Aloia CMS.

### Registering the user

Secondly, we'll need to actually create the user in the ``RegisterController``:

```php
protected function create(array $data)
{
    return User::find($data['email'])
        ->set('name', $data['name'])
        ->set('email', $data['email'])
        ->set('password', Hash::make($data['password']))
        ->save();
}
```

After these changes, you'll be able to test your Authentication scaffolding and you should see a new user record show up in ``storage/app/collections/users``.

You're now logged in and you can use any Laravel authentication methods you've used in the past. 
The only difference is that your users are registered in markdown files on your filesystem, rather than a database.