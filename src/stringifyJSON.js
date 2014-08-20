// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// 
// TODO:
// 2nd arg : either array : keys to be exported from the object
//					function : 
// 3rd arg : either string : use string character for indentation
//					number : use that many spaces (upto 10) for indentation
var stringifyJSON = function(obj) {
  console.log(typeof obj + " : " + obj);
  switch(typeof obj) {
    case 'number':
	case 'boolean':
		return String(obj);
	case 'string':
		return '"' + obj + '"';
	case 'object':
		switch (Object.prototype.toString.call(obj)) {
			case "[object Array]":
				if (obj.length === 0) {
					return "[]";
				}
				return "[" + _.map(obj, stringifyJSON) + "]";
			case "[object Date]": 
				break;
			case "[object Object]":
				var str = [];
				_.each(obj, function(value, key){
					var valStr = stringifyJSON(value);
					if (valStr && key !== 'undefined') {
						str.push(stringifyJSON(key) + ":" + valStr);
					}
				});
				return "{" + str + "}";
			default: 
			    return 'null';
		}
	case 'undefined':
	case 'null':
		return 'null';
	case 'function':
		if (obj === undefined) {
			return null;
		}
		// do something if it is a defined function
		break;
	default:
	    return 'null';
	}
};
