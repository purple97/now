require.config({
	paths:{
		"jquery":"./plugins/jquery/1.8.3/jquery.min"
	}
})

require(['jquery'],function ($) {
	$ && console.log("jquery require ok");
})