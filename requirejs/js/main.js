function getUrlParam(name) {
    var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)", "i");
    var r = (window.location.search || window.location.hash).match(reg);

    if (r != null) {
    	return unescape(r[2])
    	console.log(unescape(r[2]));
    };
    return null;
}

console.log(navigator.language)

requirejs.config({
	urlArgs : "_=" + new Date().getTime(),
	baseUrl : 'js',
	paths : {
		'jquery' : [
			'lib/require/jquery-2.1.4'
		],
		"backbone" : "lib/backbone",
		"underscore" : "lib/underscore",
		"modernizr" : 'lib/modernizr',
		'text' : 'lib/text',
		'css' : 'lib/require/css',
		'i18n' : 'lib/require/i18n'
	},
	shim : {
		"modernizr" : {  //不支持AMD的模块名
			deps : ["jquery"], //依懒的模块
			exports : "Modernizr", //  全局变量作为模块对象
			init : function($){  // 初始化函数，返回的对象代替exports作为模块对象
				return $;
			}
		},
		"jquery-ui" : ['css!../src/css/jquery-ui.css','css!../src/css/jquery-ui.theme.css']
	},
	waitSeconds : 10,
	config : {
		text : {
			onXhr : function(xhr, url){
				xhr.setRequestHeader('X-Requsted-Width', 'new XMLHttpRequest')
			}
		},
		i18n:{
	        "locale": getUrlParam("LANG") || navigator.language || "zh_cn"
	    }
	    ,'locale':getUrlParam("LANG") || navigator.language || "zh_cn"
	},
	map:{

	}
})

//去掉空格
// require(['helper'],function(helper){
// 	var str = helper.trim(' test ');
// 	console.log(str);
// });

//获取用户信息
require(['jquery','./app/api','modernizr','backbone','i18n!nls/messages'],function($, api,modernizr,backbone,i18n){
	console.log(modernizr);
	console.log(backbone);
	$('#button').click(function(){
		api.getUser().then(function(user){
			console.log(user)
		});
		//跨域请求
		//api.getUserByJsonp();
		api.loadUser();
		$('#button').after('<button>'+i18n.edit+'</button>')
	})
})


//加载的jquery2.1.5的版本
// require(['./app/api2'],function(api){
// 	$('#button').click(function(){
// 		api.getUser().then(function(user){
// 			console.log(user)
// 		})
// 	})
// })

