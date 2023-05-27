const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
            // console.log(id)
            console.log('main js update cart')
        },
        removeFromCart(id) {
            // this.cart.pop(id)
            // console.log(id)
            console.log('remove')
            console.log('cart', this.cart)

            let index = this.cart.indexOf(id)

            if (index !== -1 ){

                this.cart.splice(index, 1)
            }
        }
    },

})
