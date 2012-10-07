(function() {

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

    function rot13node(node, times) {
        var speed = 150;

        function timer(n, i, delay) {
            setTimeout(function() {
                n.nodeValue = rot13pos(n.nodeValue, i);
            }, i*speed + delay);
        }
    
        for (var i in node.nodeValue) {
            timer(node, i, 0);
            timer(node, i, 2*speed);
        }
        
    }

    Array.prototype.forEach.call(document.querySelectorAll('*'), function(el) {
        var node = el.childNodes[0];
        if (!node || node.nodeType !== 3) {
            return;
        }
        rot13node(node, 2);
    });


}());


//void 0

