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
  
  

  // criar widget
  var widget = document.createElement('div')
  widget.setAttribute('class','grwp grwp-widget hidden')
  

  // EVENTOS
  // criar evento de click no botão
  button.setAttribute('data-growp-btn','')
  button.addEventListener('click', () => {
    button.classList.add('hidden')
    widget.classList.remove('hidden')
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