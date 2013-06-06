# jQuery IIDE

Immediate–Invoked–Data–Expressions (IIDE) for jQuery Methods &amp; Plugins

Inspired by this [blogpost](http://toddmotto.com/iide-immediate-invoked-data-expressions-data-init-and-using-html5-to-call-your-javascript/jquery/) by [@toddmotto](http://twitter.com/toddmotto) I wrote this simple jQuery plugin to invoke any `jQuery.fn` or `jQuery.plugin` method via HTML5 data attributes.
The goal is to make it more comfortable to init plugins right on its corresponding DOM element.

Read more about the theory here: [IIDE, Immediate-Invoked-Data-Expressions, data-init and using HTML5 to call your JavaScript/jQuery](http://toddmotto.com/iide-immediate-invoked-data-expressions-data-init-and-using-html5-to-call-your-javascript/jquery/).
I'm also write a blog post soon about this, be patient.


## Example

```html
<div 
    data-init="animate" 
    data-options='[
    { 
        "right": 800,
        "top": 0
    }, 5000 ]'>
</div>
```

Check out the [examples](https://github.com/ixisio/jquery-iide/blob/master/example/example.html) for more details.




