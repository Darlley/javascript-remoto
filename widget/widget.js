function loadSupportingFiles(){

  // css
  var _tagLinkStyles = document.createElement('link');
  _tagLinkStyles.setAttribute("href", "http://widget.localhost/growp.css");
  _tagLinkStyles.setAttribute("rel", "stylesheet")
  _tagLinkStyles.setAttribute("type", "text/css")

  document.querySelector('head').insertAdjacentElement('beforeend', _tagLinkStyles);
}
loadSupportingFiles(); 

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
  iframe.style.width = "300px";
  iframe.style.height = "550px";
  iframe.style.border = "none";
  iframe.style.overflow = "hidden";
  iframe.style.backgroundColor = "#006bff";

  function addContentDocumentIframe(){
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var iframeBody = iframeDoc.body;
    
    iframeBody.innerHTML = "<h1>Darlley</h1>"
  }

  // adicionar iframe ao container widget
  widget.appendChild(iframe);

  // EVENTOS

  // criar evento de click no botão
  button.setAttribute('data-growp-btn','')
  button.addEventListener('click', () => {
    button.classList.add('hidden')
    widget.classList.remove('hidden')

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