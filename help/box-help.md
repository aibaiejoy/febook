# 百度框调起相关功能
添加卡片
	var card_1 = function(){	
		var invoke = Bdbox.invoke("5.3.5");
	    invoke.cmd('card.add', [{
		    'mdsign': '92150802adf85e575665b94e543e91ee',
		    'resource_id': '14520',
		    'tn': 'wisexmlnew',
		    'csrc': 'ext_server_news',
		    'pfid': 'a012',
		    'resource_name': 'sports',
		    'query': 'worldcup',
			'word': '世界杯',
		    'type': '2',
		    'card_id': '012_worldcup',
		    'dsp': 'iphone'
		}], function(data){
	        //alert(JSON.stringify(data));
	    });
	}

