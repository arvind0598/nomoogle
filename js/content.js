const currentTabInfo = {
  url: window.location.href,
  title: document.title,
};

const DEFAULT_ITEMS = {
  strictModeEnabled: false,
};

const getMessage = (numberOfAlternatives, currentTitle, isStrictModeEnabled) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.id = 'stopMessage';

  if (!isStrictModeEnabled) {
    const closeButtonElement = document.createElement('button');
    closeButtonElement.textContent = 'x';
    closeButtonElement.onclick = () => document.getElementById('stopMessage').classList.add('hidden');
    wrapperElement.appendChild(closeButtonElement);
  }

  const messageElement = document.createElement('p');
  messageElement.textContent = `We found some alternatives for ${currentTitle}`;
  wrapperElement.appendChild(messageElement);

  const extraInfoElement = document.createElement('p');
  extraInfoElement.textContent = `Click the extension icon for ${numberOfAlternatives} alternatives.`;
  wrapperElement.appendChild(extraInfoElement);

  return wrapperElement;
}

const handleResponse = (response) => {
  chrome.storage.sync.get(DEFAULT_ITEMS, (items) => {
    const bodyContent = getMessage(response.data.length, response.title, items.strictModeEnabled);
    if (!items.strictModeEnabled) {
      document.body.appendChild(bodyContent);
    }
    else {
      document.body.innerHTML = bodyContent.outerHTML;
    }
  });
};

chrome.runtime.sendMessage(currentTabInfo, handleResponse);
