var Stork = (function(window, undefined){
  var Stork = {};

  console.log(window, undefined)

  function loadSupportingFiles(callback){}
  function getWidgetParams(){}
  function getRatingData(params, callback){}
  function drawWidget(){}

  /*
   *
   */

  loadSupportingFiles(function(){
    var params = getWidgetParams();

    getRatingData(params, function(){
      drawWidget()
    });

  });

  return Stork;

})(window)

/*
function loadScript(url, callback){
  var script = document.createElement('script');
  script.async = true;
  script.src = url;

  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);

  script.onload = script.onreadstatechange = function() {
    var rdyState = script.readState;
    if(!rdyState || /complete|loaded/.test(script.readyState)){
      callback();
      script.onload = null;
      script.onreadystatechange = null;
    }
  };

}

loadScript('http://camerastork.com/widget/dom.js', function(){
  Stork.dom.get('#some-id');
});
Stork.dom.get('#some-id');

function getQueryParameters(query){
  var args = query.split
}

*/