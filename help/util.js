//这里可以补充一些常用的工具函数
var util = (function() {
    return {
        isDescendant: function(/*DOMNode*/ node, /*DOMNode*/ ancestor){
            // summary:
            //      Returns true if node is a descendant of ancestor
            // node: DOMNode|String
            //      string id or node reference to test
            // ancestor: DOMNode|String
            //      string id or node reference of potential parent to test against
            //
            // example:
            //      Test is node id="bar" is a descendant of node id="foo"
            //  |   if(dojo.isDescendant("bar", "foo")){ ... }

            try{
                while(node){
                    if(node == ancestor){
                        return true; // Boolean
                    }
                    node = node.parentNode;
                }
            }catch(e){ /* squelch, return false */ }
            return false; // Boolean
        },
        toDom: function(frag) {
            // summary:
            //      instantiates an HTML fragment returning the corresponding DOM.
            // frag: String
            //      the HTML fragment
            // doc: DocumentNode?
            //      optional document to use when creating DOM nodes, defaults to
            //      dojo.doc if not specified.
            // returns:
            //      Document fragment, unless it's a single node in which case it returns the node itself
            // example:
            //      Create a table row:
            //  |   var tr = dojo.toDom("<tr><td>First!</td></tr>");
            var tagWrap = {
                option: ["select"],
                tbody: ["table"],
                thead: ["table"],
                tfoot: ["table"],
                tr: ["table", "tbody"],
                td: ["table", "tbody", "tr"],
                th: ["table", "thead", "tr"],
                legend: ["fieldset"],
                caption: ["table"],
                colgroup: ["table"],
                col: ["table", "colgroup"],
                li: ["ul"]
            },
            reTag = /<\s*([\w\:]+)/,
            masterNode = {}, masterNum = 0;

            // make sure the frag is a string.
            frag += "";

            // find the starting tag, and get node wrapper
            var match = frag.match(reTag),
                tag = match ? match[1].toLowerCase() : "",
                master = document.createElement('div'),
                wrap, i, fc, df;
            if(match && tagWrap[tag]){
                wrap = tagWrap[tag];
                master.innerHTML = wrap.pre + frag + wrap.post;
                for(i = wrap.length; i; --i){
                    master = master.firstChild;
                }
            }else{
                master.innerHTML = frag;
            }

            // one node shortcut => return the node itself
            if(master.childNodes.length == 1){
                return master.removeChild(master.firstChild); // DOMNode
            }

            // return multiple nodes as a document fragment
            df = document.createDocumentFragment();
            while((fc = master.firstChild)){ // intentional assignment
                df.appendChild(fc);
            }
            return df; // DocumentFragment
        },
        escape: function(tx){
            var tx = tx.replace(/&/g, '&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g, '&quot;');
            return tx;
        },

        unescape: function(str) {
            return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '\"');     
        },
        showDate: function(timestamp, showAll){
            var date = this.getDateObj(timestamp),
                year = date.getFullYear(),
                month = date.getMonth()+1,
                day = date.getDate(),
                hours = date.getHours(),
                mins = date.getMinutes(),
                currdate = this.getDateObj(false),
                curMonth = currdate.getMonth() + 1;
            showDate = '';
            // 当年
            if (year == currdate.getFullYear() && !showAll) {
                if (month == curMonth && day == currdate.getDate()) {
                    showDate = this.fix2Length(hours) + ":" + this.fix2Length(mins);
                } else {
                    showDate = this.fix2Length(month) + "-" + this.fix2Length(day) + " " + this.fix2Length(hours) + ":" + this.fix2Length(mins);
                }
            } else {
                showDate = year + "-" + this.fix2Length(month) + "-" + this.fix2Length(day) + " " + this.fix2Length(hours) + ":" + this.fix2Length(mins);
            }
            return showDate;
        },
        getDateObj: function (timestamp){
            timestamp = parseInt(timestamp);
            return timestamp ? new Date(timestamp) : new Date();
        },
        fix2Length: function(str) {
            str = str.toString();
            return str.length < 2 ? '0' + str : str;
        },
        getAvatar: function(url, size) {
            var defaultAvatar = 'http://staticinte.gongzuoquan.com/static/images/normalImg.png';
            var map = {
                200: '200.jpg',
                120: '120.jpg',
                64 : '64.jpg',
                32 : '32.jpg'
            }
            if (url) {
                var suffix = map[size] || '';
                //历史原因，这几种图片没有生成多尺寸图片
                if (/\.(big|small|teamlogo)\./.test(url)) {
                    return url;    
                } else if (/\/normlImg\.png$/.test(url) || /\.gongzuoquan\.com/.test(url)) {
                    return defaultAvatar;
                }
                return url + suffix;
            }
            return defaultAvatar;
        },
        // summary:
        //		This module defines query string processing functions.

        objectToQuery: function( /*Object*/ map) {
            // summary:
            //		takes a name/value mapping object and returns a string representing
            //		a URL-encoded version of that object.
            // example:
            //		this object:
            //
            //	|	{
            //	|		blah: "blah",
            //	|		multi: [
            //	|			"thud",
            //	|			"thonk"
            //	|		]
            //	|	};
            //
            //		yields the following query string:
            //
            //	|	"blah=blah&multi=thud&multi=thonk"

            // FIXME: need to implement encodeAscii!!
            var enc = encodeURIComponent,
                pairs = [],
                backstop = {};
            for (var name in map) {
                var value = map[name];
                if (value != backstop[name]) {
                    var assign = enc(name) + "=";
                    if (_.isArray(value)) {
                        for (var i = 0, l = value.length; i < l; ++i) {
                            pairs.push(assign + enc(value[i]));
                        }
                    } else {
                        pairs.push(assign + enc(value));
                    }
                }
            }
            return pairs.join("&"); // String
        },

        queryToObject: function( /*String*/ str) {
            // summary:
            //		Create an object representing a de-serialized query section of a
            //		URL. Query keys with multiple values are returned in an array.
            //
            // example:
            //		This string:
            //
            //	|		"foo=bar&foo=baz&thinger=%20spaces%20=blah&zonk=blarg&"
            //
            //		results in this object structure:
            //
            //	|		{
            //	|			foo: [ "bar", "baz" ],
            //	|			thinger: " spaces =blah",
            //	|			zonk: "blarg"
            //	|		}
            //
            //		Note that spaces and other urlencoded entities are correctly
            //		handled.

            // FIXME: should we grab the URL string if we're not passed one?
            var dec = decodeURIComponent,
                qp = str.split("&"),
                ret = {},
                name, val;
            for (var i = 0, l = qp.length, item; i < l; ++i) {
                item = qp[i];
                if (item.length) {
                    var s = item.indexOf("=");
                    if (s < 0) {
                        name = dec(item);
                        val = "";
                    } else {
                        name = dec(item.slice(0, s));
                        val = dec(item.slice(s + 1));
                    }
                    if (typeof ret[name] == "string") { // inline'd type check
                        ret[name] = [ret[name]];
                    }

                    if (_.isArray(ret[name])) {
                        ret[name].push(val);
                    } else {
                        ret[name] = val;
                    }
                }
            }
            return ret; // Object
        },

        /*
        * 将时间戳转换为时间字符串
        * t   - 时间戳(默认为当前时间)
        * format - 时间格式(默认'y/m/d h:i:s')
        */
        getTime : function(t, format){
            t = t || new Date().getTime();
            format = format || 'y/m/d h:i:s';
            var date = new Date( Number(t) );
            var fnn = function(n){
                return (n+'').length < 2 ? ('0' + n) : n;
            };
            return format.replace(/[ymdhis]/g, function(key){
                return {
                    y : date.getFullYear(),
                    m : fnn(date.getMonth() + 1),
                    d : fnn(date.getDate()),
                    h : fnn(date.getHours()),
                    i : fnn(date.getMinutes()),
                    s : fnn(date.getSeconds())
                }[key];
            });
        },

        /*
        * 获得不同尺寸的图片地址
        * [url]    - 要处理的URL字符串
        * [size]   - 要在.jpg前面插入的尺寸字符串,默认是"jpg32"
        */
        picSize : function(url, size){
            var headImgDefault = 'http://staticinte.gongzuoquan.com/static/images/normalImg.png';   //默认头像地址
            if(!url){
                return headImgDefault;
            }
            size = size || 'jpg32';
            var arr = url.split('.');
            arr.splice(-1, 0, size);
            return arr.join('.');
        }




    }   //end return
})();
