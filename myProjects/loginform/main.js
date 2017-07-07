/*global console*/
var mail = document.querySelectorAll('input');
console.log(mail);
mail.forEach(function (item) {
    'use strict';
    item.addEventListener('focus', function () {
        this.classList.add('highlight');
        this.setAttribute('data-hold', this.getAttribute('placeholder'));
        this.setAttribute('placeholder', '');
    });
    item.addEventListener('blur', function () {
        this.classList.remove('highlight');
        this.setAttribute('placeholder', this.getAttribute('data-hold'));
        this.setAttribute('data-hold', '');
    });
    return item;
});