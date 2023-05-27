app.component('review-form', {
    template: 
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">

    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
    </select>

    <input class="button" type="submit" value="Submit">
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null

            console.log(productReview)
        }
    }
})