var app = new Vue({

    el: '#app',
    data: {
        inputText: '',
        liste: [],
        isLoading: true
    },

    methods: {
        ara(e) {
            e.preventDefault();
            this.liste = [];
            this.isLoading = true;
            const url = `http://api.giphy.com/v1/gifs/search?q=${this.inputText}&api_key=dc6zaTOxFJmzC`;
            fetch(url).then((res) => { return res.json() })
                .then((res) => { this.liste = res.data })
            this.isLoading = false;
            this.inputText='';
        }
    },

    created() {
        const url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
        fetch(url).then((res) => { return res.json() })
            .then((res) => { this.liste = res.data })
        this.isLoading = false;


    }



})