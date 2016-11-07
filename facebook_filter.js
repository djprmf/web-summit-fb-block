(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {                
                
                var nodes = document.querySelectorAll('.userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4');
                for (var ii = 0, nn = nodes.length; ii < nn; ii++)
                {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    if (text && text.indexOf('web') >= 0 && text.indexOf('summit') >= 0 && nodes[ii].style.display != 'none')
                    {
                        nodes[ii].style.display = 'none';
                    }
                }

            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

})();
