jQuery.scrollToHash
===================

Work in progress !!!!!
Customizable Scroll to hash jQuery plugin

#Todos

- [x] offset management
- [x] scroll duration
- [x] easing
- [x] callback
- [ ] target si pas de #
- [ ] url rewrite true/false


#How to use

##1. Load jQuery and scrollToHash
To use scrollToHash, you’ll need to make sure both the scrollToHash and jQuery scripts are included.

```
	<script src="vendors/jquery-1.10.2.min.js"></script>
	<script src="vendors/scrollToHash/scrolltohash.js"></script>
```

##2. Call the plugin

###HTML
#### Option 1: The trigger element is a link

```
	<a href="#targetId" class="trigger">Go to targetId</a>
```

#### Option 2: The trigger element is ``not`` a link

```
	<button data-target="#targetId" class="trigger">Go to targetId</a>
```
***Note:** The target can also be set in the plugin's options.*

###Javascript
```
	$(document).ready(function() {
		$('.trigger').scrollToHash();
	});
```



#Customizing


##1. Options
All of the options below are available to customize scrollToHash.

| Variable | Default | Type | Description | Exemple |
| :----- | :----- | :----- | :----- | :----- |
| easing | "swing" | string | Scroll effect (see "4. Easing")| 
| scrollDuration | 1000 | int | Duration (in ms) of the scroll |
| scrollOffset | 0 | int | Distance (in px) where to stop scroll before or after the target | -15 
| target | null | string | # to target if the trigger has no "href" nor "data-target" | "#my-id"
| urlRewrite | true | boolean | Rewrite of URL with #target |

##2. Callbacks
| Variable | Default | Type | Description | Exemple |
| :----- | :----- | :----- | :----- | :----- |
| beforeScroll | false | function | Executed before the scroll starts | 
| afterScroll | false | function | Executed after the scroll reachs target | function() { console.log("done"); }


##3. Defaults

```
	$('.trigger').scrollToHash({
        scrollDuration	: 1000,
        scrollOffset 	: 0,
        urlRewrite	    : true,
        target			: false,
        easing			: "swing",
        
        //Callbacks
        beforeScroll    : false,
        afterScroll     : false
    });
```


##4. Easing (optional)
Add effects to the scroll using the external [jquery easing plugin](http://gsgd.co.uk/sandbox/jquery/easing/)

### Load Easing
Be sure to load easing after jquery and before scrollToHash

```
	<script src="vendors/jquery-1.10.2.min.js"></script>
	<script src="vendors/scrollToHash/jquery.easing.1.3.js"></script>
	<script src="vendors/scrollToHash/scrolltohash.js"></script>
```

### Choose an effect
You can preview easing effects using the [easing cheatsheet](http://easings.net/)

### Set the option

```
	$('.trigger').scrollToHash({
        easing	: "easeOutQuint"
    });
```


#Sources
- CSS Tricks : [http://css-tricks.com/snippets/jquery/smooth-scrolling/](http://css-tricks.com/snippets/jquery/smooth-scrolling/)
- jQuery Boilerplate : [http://jqueryboilerplate.com/](http://jqueryboilerplate.com)
- jQuery Easing : [http://gsgd.co.uk/sandbox/jquery/easing/](http://gsgd.co.uk/sandbox/jquery/easing/)
- Easing cheatsheet : [http://easings.net/](http://easings.net/)
