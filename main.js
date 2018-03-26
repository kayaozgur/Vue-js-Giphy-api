var app = new Vue({

    el: '#app',
    data: {
        liste: []
    },

    created() {
        const url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
        fetch(url).then((res) => { return res.json() })
        .then((res) => { this.liste = res.data})


    }



})