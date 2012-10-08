/*
Yes, this actually applies ROT13 multiple times.
*/

var twonROT13 = (function() {

    var az = "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";

    function rot13(text) {
        for (var r = "", i = 0; i < text.length; i++) {
            var chr = text.charAt(i);
            var position = az.indexOf(chr);
            if (position > -1) {
                chr = az.charAt(position + 13);
            }
            r += chr;
        }
        return r;
    }

    function rot13pos(text, pos) {
        return text.slice(0, pos) + rot13(text.slice(pos, pos + 1)) + text.slice(pos + 1);
    }

    function rot13node(node, key) {
        var speed = 100;
        key = key || 'nodeValue';

        function timer(n, i, delay) {
            setTimeout(function() {
                n[key] = rot13pos(n[key], i);
            }, i*speed + delay);
        }
    
        for (var i in node[key]) {
            timer(node, i, 0);
            timer(node, i, 2*speed);
            timer(node, i, 3*speed);
            timer(node, i, 4*speed);
        } 
    }

    function go() {
        Array.prototype.forEach.call(document.querySelectorAll('*'), function(el) {
            var node = el.childNodes[0];
            if (!node || node.nodeType !== 3) {
                return;
            }
            rot13node(node);
        });
    };

    return {
        decode: rot13,
        encode: rot13,
        codeNode: rot13node,
        go: go
    }

}());

