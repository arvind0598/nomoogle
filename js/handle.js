chrome.tabs.query({
  'active': true,
  'lastFocusedWindow': true,
}, function (tabs) {
  chrome.runtime.sendMessage(tabs[0], function (response) {
    if (response) {
      renderTitle(response.title);
      renderAlternatives(response.data);
    }
  });
});

const ALTERNATIVES_DIV = document.getElementById('alternatives');
const MESSAGE_DIV = document.getElementById('message');

const openLink = (url) => chrome.tabs.create({ url });

const createAlternativeElement = (alternative) => {
  const logoElement = document.createElement('img');
  logoElement.src = alternative.logoUrl;
  logoElement.alt = '';
  const logoWrapperElement = document.createElement('div');
  logoWrapperElement.classList.add('alt-logo');
  logoWrapperElement.appendChild(logoElement);
  
  const nameElement = document.createElement('p');
  nameElement.textContent = alternative.name;
  const nameWrapperElement = document.createElement('div');
  nameWrapperElement.classList.add('alt-title');
  nameWrapperElement.appendChild(nameElement);

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('alternative');
  wrapperElement.onclick = () => openLink(alternative.url);
  wrapperElement.appendChild(logoWrapperElement);
  wrapperElement.appendChild(nameWrapperElement);

  return wrapperElement;
}

const renderAlternatives = (alternatives) => alternatives
  .map(createAlternativeElement)
  .map((alternativeElement) => ALTERNATIVES_DIV.appendChild(alternativeElement));
 
const renderTitle = (title) => {
  const currentTextElement = document.createElement('div');
  currentTextElement.classList.add('current-text');
  currentTextElement.textContent = 'Current Site:';

  const siteNameElement = document.createElement('div');
  siteNameElement.classList.add('site-name');
  siteNameElement.textContent = title;

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('current-site');
  wrapperElement.appendChild(currentTextElement);
  wrapperElement.appendChild(siteNameElement);

  MESSAGE_DIV.innerHTML = wrapperElement.outerHTML;
};