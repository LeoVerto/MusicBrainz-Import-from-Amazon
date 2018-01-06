var jquery = {};

jquery = jQuery.noConflict(true);

if (jquery('#rightCol').length) {
    jquery('#rightCol').prepend(
        '<data-gore-mbifa-bootstrap data-ng-app="goreMbifa" data-ng-controller="mbifaController">'
    );
} else if (jquery('.buyingDetailsGrid').length) {
    jquery('.buyingDetailsGrid').prepend(
        '<tr><td><data-gore-mbifa-bootstrap data-ng-app="goreMbifa" data-ng-controller="mbifaController"></td></tr>'
    );
} else if (jquery('#dmusic_buy_box_group').length) {
    jquery('#dmusic_buy_box_group').prepend(
        '<data-gore-mbifa-bootstrap data-ng-app="goreMbifa" data-ng-controller="mbifaController">'
    );
}

var goreMbifa = angular.module('goreMbifa', []);
