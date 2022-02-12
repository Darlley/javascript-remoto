var Stork = (function(window, undefined){
  var Stork = {};

  function loadSupportingFiles(callback){
    // carregar arquvios de apoio necessarios (p. 68)
  }
  function getWidgetParams(){
    // extrair parâmetros como ID do produto ou até identificação do provedor (p. 69) 
  }
  function getRatingData(params, callback){
    // Obter dados do produto (nome, URL, avaliação) a partir do servidor (p. 69) 
  }
  function drawWidget(){
    // Utilizar os dados recebidos do servidor e apresentar o widget (p. 69)
  }

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