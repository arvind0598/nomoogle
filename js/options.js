document.getElementById('enableRedirects').onclick = (e) => { 
  document.getElementById('enableStrictMode').checked = false;
    chrome.storage.sync.set({
        redirectEnabled: e.currentTarget.checked,
        strictModeEnabled: false
      });    
}

document.getElementById('enableStrictMode').onclick = (e) => {   
  document.getElementById('enableRedirects').checked =false;     
    chrome.storage.sync.set({
        redirectEnabled: false,
        strictModeEnabled: e.currentTarget.checked
      });    
}

document.addEventListener('DOMContentLoaded',()=>{
    chrome.storage.sync.get({
        redirectEnabled: false,
        strictModeEnabled: false
      }, function(items) {          
        document.getElementById('enableRedirects').checked = items.redirectEnabled;
        document.getElementById('enableStrictMode').checked = items.strictModeEnabled;
      });
});