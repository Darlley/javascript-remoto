var Stork = (function(window, undefined){
  var Stork = {};

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