define(['jquery'],function($){
	return {
		getUser : function(){
			var def = $.Deferred();
			require(['./app/user'],function(user){
				def.resolve(user)
			})
			return def;
		},
		//传统的jsonp使用模式  
		// getUserByJsonp : function(){  
		// 	$.$.ajax({
		// 		url: 'http://www.baidu.com/user',
		// 		dataType: 'jsonp',
		// 		jsonpCallback : 'onloaded'
		// 	})
		// }
		//require 
		getUserByJsonp : function(){  
			require(['./app/user'].function(user){
				console.log(user)
			})
		}
	}
})

// function  onloaded(user){ //全局的方法   定义onloaded({'name' : 'brain', 'sex' : 'male', 'age' : '4'})
// 	console.log(user)
// }