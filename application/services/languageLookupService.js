﻿goreMbifa.factory('languageLookupService', function () {
  var navLocale = jquery('header').attr('class').split(' ')[1]
  return navLocale.substr(-2)
});
