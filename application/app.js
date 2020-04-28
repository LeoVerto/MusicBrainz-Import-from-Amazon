var jquery = {}

jquery = jQuery.noConflict(true)

var mbifaCtrl = '<data-gore-mbifa-bootstrap data-ng-app="goreMbifa" data-ng-controller="mbifaController">'

if (jquery('#rightCol').length) {
  jquery('#rightCol').prepend(mbifaCtrl)
} else if (jquery('.buyingDetailsGrid').length) {
  jquery('.buyingDetailsGrid').prepend('<tr><td>' + mbifaCtrl + '</td></tr>')
} if (jquery('#dmusic_buy_box_group').length) {
  jquery('#dmusic_buy_box_group').prepend(mbifaCtrl)
} else {
  console.error('found no dom element to attach')
}


var goreMbifa = angular.module('goreMbifa', [])
