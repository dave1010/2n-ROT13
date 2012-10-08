<!doctype html>
<html>
<title>2rot13 bookmarklet</title>

<p>
Drag this bookmarklet to your bookmarks toolbar: <a href="javascript:(function(){(function(){var%20az="abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";function%20rot13(text){for(var%20r="",i=0;i<text.length;i++){var%20chr=text.charAt(i);var%20position=az.indexOf(chr);if(position>-1){chr=az.charAt(position+13);}r+=chr;}return%20r;}function%20rot13pos(text,pos){return%20text.slice(0,pos)+rot13(text.slice(pos,pos+1))+text.slice(pos+1);}function%20rot13node(node,times){var%20speed=150;function%20timer(n,i,delay){setTimeout(function(){n.nodeValue=rot13pos(n.nodeValue,i);},i*speed+delay);}for(var%20i%20in%20node.nodeValue){timer(node,i,0);timer(node,i,2*speed);}}Array.prototype.forEach.call(document.querySelectorAll('*'),function(el){var%20node=el.childNodes[0];if(!node||node.nodeType!==3){return;}rot13node(node,2);});}());void%200})();">2rot13</a>

</p>

<p>
	Uses the <a href="http://phoenix.clifford.at/~ak/2rot13.pdf">2ROT13</a> algorithm.
</p>

