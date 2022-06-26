function getStyle(node, property, camel){
  var value;
  
  if(window.getComputedStyle){
    value = document.defaultView.getComputedStyle(node).getPropertyValue(property)
  }else if(node.currentStyle){
    value = node.currentStyle[property] ? node.currentStyle[property] : node.currentStyle[camel]
  }

  if(value == "" || value == "transparent" || value == "rgba(0,0,0,0)"){
    return getStyle(node.parentNode, property, )
  }else{
    return value || ''
  }
}

function loadSupportingFiles(documentHead, url){

  // css
  var _tagLinkStyles = document.createElement('link');
  _tagLinkStyles.setAttribute("href", url);
  _tagLinkStyles.setAttribute("rel", "stylesheet")
  _tagLinkStyles.setAttribute("type", "text/css")

  documentHead.appendChild(_tagLinkStyles);
}
var clientHead = document.querySelector('head')
loadSupportingFiles(clientHead, "http://widget.localhost/client-style.css"); 

function getWidgetParams(){
  // create button
  var button = document.createElement('button')
  button.setAttribute('class','grwp grwp-btn')
  // icon button
  var logoButton = document.createElement('img')
  logoButton.setAttribute('src','http://widget.localhost/growp.svg')
  button.appendChild(logoButton)
  // text button
  var textButton = document.createElement('p')
  textButton.innerHTML = "Precisa de Ajuda?"
  button.appendChild(textButton)
  
  // criar container widget
  var widget = document.createElement('div')
  widget.setAttribute('class','grwp grwp-widget hidden')
  
  // criar iframe wdget
  var iframe = document.createElement('iframe')
  iframe.setAttribute('class', 'grwp grwp-iframe')
  // estilo do container iframe
  iframe.style.width = "300px";
  iframe.style.height = "550px";
  iframe.style.border = "none";
  iframe.style.overflow = "hidden";

  function getBasicStylesFromIframe(container, element){
    function get(property, propertyCamel) {
      return getStyle(container, property, propertyCamel)
    }

    var styles = {
      color: get('color'),
      fontFamily: get('font-family', 'fontFamily'),
      borderColor: get('color'),
      borderSize: "2px",
      borderStyle: "solid",
      margin: "0px"
    }

    return styles
  }

  function applyStyles(document, styles){

    for(var property in styles){
      if(!styles.hasOwnProperty(property)) return

      document.style[property] = styles[property]
    }
  }
  
  function addContentDocumentIframe(){
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var iframeBody = iframeDoc.body;
    var iframeHead = iframeDoc.head;
    iframeBody.setAttribute('id','growp-app')
    iframeBody.innerHTML = ""

    loadSupportingFiles(iframeHead, "http://widget.localhost/server-style.css")

    // Inserir estilos no document do iframe
    var clienteDocument = document.querySelector('body')
    applyStyles(iframeBody, getBasicStylesFromIframe(clienteDocument))

    // inserir HTML no document do iframe
    var title = document.createElement('h1')
    title.textContent = "Darlley"
    iframeBody.appendChild(title)
  }

  // adicionar iframe ao container widget
  widget.appendChild(iframe);

  // EVENTOS

  // criar evento de click no botão
  button.setAttribute('data-growp-btn','')
  button.addEventListener('click', () => {
    button.classList.add('hidden')
    widget.classList.remove('hidden')

    // acessar conteúdo document do iframe
    addContentDocumentIframe()
  })
  // criar evento de click no widget
  widget.addEventListener('click', () => {
    widget.classList.add('hidden')
    button.classList.remove('hidden')
  })

  // adicionar bottão ao document
  document.querySelector('body').insertAdjacentElement('beforeend', button);
  // adicionar widget ao document
  document.querySelector('body').insertAdjacentElement('beforeend', widget);
}
getWidgetParams();