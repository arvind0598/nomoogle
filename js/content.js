let currentTabInfo = {
    "url": window.location.href,
    "title": document.title
}


chrome.runtime.sendMessage(currentTabInfo, function (response) {
    chrome.storage.sync.get({
        strictModeEnabled: false
      }, function(items) { 
        var body = document.getElementsByTagName("BODY")[0];
        if (items.strictModeEnabled) {
            body.innerHTML = `<div>
            <div class='shallNotPass'></div>
            <p class='messageText'> You shall not pass!!</p>
            <p class="extraInfo">We have found ${response.data.length} alertnatives for ${response.title}</p>
            </div>`
        }
        else{
            body.innerHTML += `<div id='stopMessage'>
            <div class='shallNotPass'></div>
            <p class='messageText'> You shall not pass!!</p>
            <p id="closeButton">x</p>
            <p class="extraInfo">We have found ${response.data.length} alertnative for ${response.title}</p>
            </div>`;
    
            document.getElementById('closeButton').onclick = (e)  => {
                document.getElementById('stopMessage').classList.add('hidden');
            }
        }

      });
   
});