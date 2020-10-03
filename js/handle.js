chrome.tabs.query({
    'active': true,
    'lastFocusedWindow': true,
}, function (tabs) {
    chrome.runtime.sendMessage(tabs[0], function (response) {
        if (response) {
            renderTitle(response.title);
            renderData(response.data);
        }
    });
});


function openLink(url) {
    chrome.tabs.create({
        url: url
    });
}

function renderData(data) {

    var template = document.getElementById('handlebars-alternative').innerHTML;

    var context = {
        data: data
    };

    var templateScript = Handlebars.compile(template);

    var html = templateScript(context);

    document.getElementsByClassName("alternatives")[0].innerHTML += html;
}

function renderTitle(data) {

    var template = document.getElementById('handlebars-title').innerHTML;

    var context = {
        title: data
    };

    var templateScript = Handlebars.compile(template);

    var html = templateScript(context);

    document.getElementsByClassName("message")[0].innerHTML = html;
}