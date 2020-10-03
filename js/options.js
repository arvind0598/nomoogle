const enableRedirectsElement = document.getElementById('enableRedirects');
const enableStrictModeElement = document.getElementById('enableStrictMode');

const getStorageData = (redirectEnabled, strictModeEnabled) => ({
  redirectEnabled,
  strictModeEnabled,
});

enableRedirectsElement.onclick = (e) => {
  enableStrictModeElement.checked = false;
  const data = getStorageData(e.currentTarget.checked, false);
  chrome.storage.sync.set(data);
};

enableStrictModeElement.onclick = (e) => {
  enableRedirectsElement.checked = false;
  const data = getStorageData(false, e.currentTarget.checked);
  chrome.storage.sync.set(data);
};

const setCheckedFromItems = (items) => {
  enableRedirectsElement.checked = items.redirectEnabled;
  enableStrictModeElement.checked = items.strictModeEnabled;
};

document.addEventListener('DOMContentLoaded', () => {
  const defaultStorageData = getStorageData(false, false);
  chrome.storage.sync.get(defaultStorageData, setCheckedFromItems);
});