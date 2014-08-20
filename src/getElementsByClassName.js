// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Helper function which recursively stores the elements which have
// the given "className" class
var getElementsArray = function(nodes, className) {
	if (!nodes || nodes.length <= 0) {
		return [];
	} else {
		// for each node element, store it if it contains the className,
		// search in all its child nodes (and their child nodes, so on)
		// for the node elements that contain the className and store them
		// into the same array.
		var classElemsArray = [];
		var len = nodes.length;
		for (var i=0; i < len; i++) {
			var node = nodes[i];
			if (node.nodeName !== "#text" && node.classList.contains(className)) {
				classElemsArray.push(node);
			}
			classElemsArray = classElemsArray.concat(getElementsArray(node.childNodes, className));
		}
		return classElemsArray;
	}
};

// Main function which gives the array of elements with the given className
var getElementsByClassName = function(className){
	var body = document.body;
	var result = [];
	if (body != null) {
		if (body.classList.contains(className)) {
			result.push(body);
		}
		var childNodes = body.childNodes;
		var result = result.concat(getElementsArray(childNodes, className));
	}
	return result;
};


