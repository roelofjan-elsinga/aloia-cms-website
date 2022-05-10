---
layout: documentation
title: Rendering content in Blade templates
permalink: /rendering-content-in-templates
---

# Rendering content in Blade templates

Rendering content from flat files onto your web page is easy and doesn't require any special code.

On this page, we're going through every single step you have to take to display your flat files as content on your website.

These are the layers we're going through:

1. [The model](#the-model)
2. [The content](#the-content)
3. [The routes](#the-routes)
4. [The controller](#the-controller)
5. [The view](#the-view)

This will take you through every step of managing and displaying the content to your visitors.

## The model

Let's create a custom content type:

```php
namespace App\Models;

use AloiaCms\Models\Model;

class Lesson extends Model
{
    protected $folder = 'lessons';

    protected $required_fields = [
        'title',
        'description',
        'list_order',
    ];
}
```

We're creating a Lesson model that holds 3 required fields: ``title``, ``description``, and ``list_order``.
We're also adding an optional field: ``image``, but this doesn't need to be added to the model.

## The content

At the heart of Aloia CMS, we have flat files with content that we want to render on our pages.
We've already created our model, so now we can create a file called ``my-content.md`` in your ``storage/app/collections`` folder for it to work with:

{% raw %}
```markdown
---
title: "Lesson 1: Learning how to render content"
description: >-
    In this lesson, we're going to learn how 
    to render markdown content in Blade files.
list_order: 1
---

This is markdown content that will be rendered as HTML 
using the ``body()`` method on the model.
```
{% endraw %}

## The routes

Aloia CMS doesn't put any restrictions on your routes, so you can do routing as you would with any other Laravel application.
Routing is something that will be different for every developer and website and Aloia CMS doesn't want to get in your way.
You're free to do routing as you see fit.

Let's add routes for a basic CRUD functionality in our app:

```php
use App\Http\Controllers\LessonController;

Route::get('/lessons', [LessonController::class, 'index'])
    ->name('lesson.index');
    
Route::post('/lessons', [LessonController::class, 'store'])
    ->name('lesson.store');    

Route::get('/lessons/{slug}', [LessonController::class, 'show'])
    ->name('lesson.show');

Route::put('/lessons/{slug}', [LessonController::class, 'update'])
    ->name('lesson.update');

Route::delete('/lessons/{slug}', [LessonController::class, 'delete'])
    ->name('lesson.delete');
```

If you wanted to, you can also use the ``Route::resource('lessons', LessonController::class)`` method, just like you would for other Laravel controllers.

## The controller

We've created several routes to the LessonController, in which we'll prepare the view to render the lesson on your website.
In this controller, you'll also see how you can ``create``, ``update``, and ``delete`` our model (and content file).

Let's create a basic controller with CRUD functionality:

```php
namespace App\Http\Controllers;

use AloiaCms\Validation\Rules\Unique;
use App\Http\Requests\Request;
use App\Models\Lesson;

class LessonController extends Controller
{

    public function index()
    {
        return view('lessons.show', [
            'lessons' => Lesson::all()
                ->sortBy(fn (Lesson $lesson) => $lesson->get('list_order'))
        ]);
    }

    public function show(string $slug)
    {
        $lesson = Lesson::find($slug);

        if (!$lesson->exists()) {
            abort(404);
        }

        return view('lessons.show', [
            'lesson' => $lesson,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'slug' => ['required', 'string', 'max:255', new Unique(Lesson::class)],
            'title' => 'required|max:255',
            'description' => 'required',
            'list_order' => 'required|integer',
        ]);

        $lesson = Lesson::find($request->get('slug'))
            ->set('title', $request->get('title'))
            ->set('description', $request->get('description'))
            ->set('list_order', $request->get('list_order'))
            ->save();

        return redirect()->route('lessons.show', $lesson->filename());
    }

    public function update(Request $request, string $slug)
    {
        $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'list_order' => 'required|integer',
        ]);

        $lesson = Lesson::find($request->get('slug'))
            ->set('title', $request->get('title'))
            ->set('description', $request->get('description'))
            ->set('list_order', $request->get('list_order'))
            ->save();

        return redirect()->route('lessons.show', $lesson->filename());
    }

    public function delete(string $slug)
    {
        $is_deleted = Lesson::find($slug)->delete();
        
        // Do something if deletion failed.

        return redirect()->route('lessons.index');
    }

}
```

The ``create`` and ``update`` methods look almost identical in this controller, this is because the ``find`` method on the controller automatically creates a new instance of the model if it doesn't already exist.
This makes creating and updating of your model very simple.

## The view

We've now finished the model, the content, the routes, and the controller.
The last step is displaying the content on our website in a Blade template.

Let's create 2 very basic views to demonstrate how you can use Aloia CMS to render the content in blade files:

```php
// lessons/index.blade.php

{% raw %}
<h1>My lessons</h1>

@foreach($lessons as $lesson)

    @if($lesson->get('image') !== null)
        <img src="{{$lesson->get('image')}}" alt="{{$lesson->get('title')}}">
    @endif

    <h3>{{$lesson->get('title')}}</h3>

    <p>
        {{$lesson->get('description')}}
    </p>

    <a href="{{route('lesson.show', $lesson->filename())}}">View this lesson</a>

@endforeach
{% endraw %}
```

In this ``index.blade.php`` template, we're looping over the collection of Lessons and displaying the image (if present), the title, and the description.
We're also adding a link to the detail page, where we can see more of the lesson.

On the detail page of the lesson, we can display the markdown content of our lesson:

```php
// lessons/show.blade.php

{% raw %}
<section>
    <h1>{{$lesson->get('title')}}</h1>
    
    @if($lesson->get('image') !== null)
        <img src="{{$lesson->get('image')}}" alt="{{$lesson->get('title')}}">
    @endif
    
    {!! $lesson->body() !!}
</section>
{% endraw %}
```

As you can see, we're unescaping the content in the ``body()`` method, because this method returns HTML code.
If you rather render the original markdown content of your file, you can use ``$lesson->rawBody()``.

Now you should have a basic understanding of how you can render the markdown files on pages of your website.
These models can be as complex of simple as you want them to be.