;(function () {

    var vSortable = {};
    var Sortable = typeof require === 'function'
        ? require('sortablejs')
        : window.Sortable

    if (!Sortable) {
        throw new Error('[vue-sortable] cannot locate Sortable.js.')
    }

    // exposed global options
    vSortable.config = {}

    vSortable.install = function (Vue) {
        Vue.directive('sortable', function (el,binding) {
            var options = binding.value || {};
            var sortable = new Sortable(el,options)
        })
    };

    if (typeof exports == "object") {
        module.exports = vSortable
    } else if (typeof define == "function" && define.amd) {
        define([], function () {
            return vSortable
        })
    } else if (window.Vue) {
        window.vSortable = vSortable
        Vue.use(vSortable)
    }

})()