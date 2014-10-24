jQuery.scrollToHash
===================

Work in progress !!!!!
Customizable Scroll to hash jQuery plugin

##Usage
```
	$('a').scrollToHash();
```

##1. Options
All of the options below are available to customize scrollToHash.

| Variable | Default | Type | Description |
| :----- | :----- | :----- | :----- |
| scrollSpeed | 1000 | int | Speed in ms of the scroll |
| offsetTop | 0 | int | Distance in px where to stop scroll above the target |
| offsetBottom | 0 | int | Distance in px where to stop scroll underneath the target |

##2. Default

```
	$('').scrollToHash({
        scrollSpeed 	: 1000,
        offsetTop 		: 0,
        offsetBottom 	: 0
    });
```

##Todos

- [ ] offset management
- [x] scroll speed
- [ ] callback
- [ ] target si pas de #


##Sources
Scroll to hash smoothly : [http://css-tricks.com/snippets/jquery/smooth-scrolling/](http://css-tricks.com/snippets/jquery/smooth-scrolling/)
