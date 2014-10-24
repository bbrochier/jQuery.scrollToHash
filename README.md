jQuery.scrollToHash
===================

Work in progress !!!!!
Customizable Scroll to hash jQuery plugin

##Usage
```
	$('.trigger').scrollToHash();
```

##1. Options
All of the options below are available to customize scrollToHash.

| Variable | Default | Type | Description |
| :----- | :----- | :----- | :----- |
| scrollSpeed | 1000 | int | Speed in ms of the scroll |
| scrollOffset | 0 | int | Distance in px where to stop scroll before or after the target |
| urlRewrite | true | boolean | Rewrite of URL with #target |

##2. Default

```
	$('.trigger').scrollToHash({
        scrollSpeed     : 1000,
        scrollOffset 	: 0,
        urlRewrite	    : true
    });
```

##Todos

- [x] offset management
- [x] scroll speed
- [ ] callback
- [ ] target si pas de #
- [ ] url rewrite true/false


##Sources
- CSS Tricks : [http://css-tricks.com/snippets/jquery/smooth-scrolling/](http://css-tricks.com/snippets/jquery/smooth-scrolling/)
- jQuery Boilerplate : [http://jqueryboilerplate.com/](http://jqueryboilerplate.com)
