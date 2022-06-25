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


// var appendTo = document.querySelector('#stork-widget');
// appendTo.parentNode.insertBefore(div,appendTo)

const $dataScript = document.querySelectorAll('[data-stork-product');
$dataScript.forEach((element, position) => {
  // const params = element.getAttribute('data-stork-product');
  // element.insertAdjacentHTML('beforeend', `<p>Foi ${params}</p>`)
  // element.removeAttribute('data-stork-product');

  const iframe = document.createElement('iframe');
  iframe.contentWindow.document.write('<h2>iframe</h2>');

  element.appendChild(iframe);
  element.removeAttribute('data-stork-product');
})