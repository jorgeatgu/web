
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_dribbble}","click",function(sym,e){window.open("http://dribbble.com/jorgeATGU","dribbble");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_behance}","click",function(sym,e){window.open("http://www.behance.net/jorgeatgu","behance");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter}","click",function(sym,e){window.open("https://twitter.com/jorgeATGU","twitter");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkedin}","click",function(sym,e){window.open("http://lnkd.in/xAManm","linkedin");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_flickr}","click",function(sym,e){window.open("http://www.flickr.com/people/61749588@N05","flickr");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-37678916");