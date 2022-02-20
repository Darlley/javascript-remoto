function loadSupportingFiles(){
  // carregar arquvios de apoio necessarios (p. 68)

  // (p. 71)
  var _tagScriptJquery = document.createElement('script');
  _tagScriptJquery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  _tagScriptJquery.async = true;

  document.querySelectorAll('script')[0].insertAdjacentElement('beforebegin', _tagScriptJquery);

  // "Diversas bibliotecas comumente utilizadas, conhecidas como carregadores de scripts, farão esse trabalho por você" (p. 75)
  // LABjs, RequireJS e yepnope
}
loadSupportingFiles(); 

function getWidgetParams(){
  // extrair parâmetros como ID do produto ou até identificação do provedor (p. 69) ~

  console.log('parametros')

  var elem;
  var src;

  var scripts = document.querySelectorAll('script');
  scripts.forEach(item => {
    elem = item;
    src = elem.src;

    
    if(src && /widget\.localhost\/widget\.js/.test(src)){
      console.log(item, elem, src)
      return src;
    }
  })

  return null;

}
getWidgetParams();

function getRatingData(params, callback){
  // Obter dados do produto (nome, URL, avaliação) a partir do servidor (p. 69) 
}
function drawWidget(){
  // Utilizar os dados recebidos do servidor e apresentar o widget (p. 69)
}

/*
  *
  */

// loadSupportingFiles(function(){
//   var params = getWidgetParams();

//   getRatingData(params, function(){
//     drawWidget()
//   });

// });

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