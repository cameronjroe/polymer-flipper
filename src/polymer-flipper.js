(function () {

    Polymer('polymer-flipper', {

        isReady: false,

        created: function () {
            this.options = {};
        },
        ready: function () {
            console.log('element ready');
        },
        domReady: function () {
            console.log(this.$);
            // this.$.container.querySelector('#inner');
        },
        eventDelegates: {
            mouseenter: 'onMouseenter',
            mouseleave: 'onMouseleave'
        },
        onMouseenter: function (e, a) {
            this.classList.add('foo');
        },
        onMouseleave: function () {
            this.classList.remove('foo');
        },
        mouseoverHandler: function (e, detail, sender) {
            console.log(e, detail, sender);
        }
    });

})();