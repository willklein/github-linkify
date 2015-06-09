'use strict';

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'github.io' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  var repo;
  var url = tab.url;
  var parts = url.split('/');
  var domain = parts[2];
  var domainParts = domain.split('.');
  var subdomain = domainParts[0];

  if (parts.length > 3) {
    repo = parts[3];
  }

  chrome.tabs.update(tab.id, {
    url: 'https://github.com/' + subdomain + (repo ? '/' + repo : '')
  });
});
