chrome.webRequest.onHeadersReceived.addListener(
  function(info) {
    console.log("onHeadersReceived : " + info.timeStamp);
    var headers = info.responseHeaders;
    headers.forEach(function(header){
        switch(header.name.toLowerCase()) {
            case 'content-type':
                if (header.value.substring(0, 'application/vnd.ohtv'.length) === 'application/vnd.ohtv')
                    header.value = 'text/html';
                break;
        }
    });
    return {responseHeaders: headers};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "responseHeaders"]
);
