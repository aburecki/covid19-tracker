<template>
    <div>
        <section class="container">
            <div class="columns is-multiline">
                
                    <FaqCard v-for="faq in faqs" :key=faq.question :faq="faq" />      
               
            </div>
        </section>
    </div>
</template>

<script>

import FaqCard from './FaqCard'

    export default {
        name: "Faq Component",
        props: ["faq"],
        components: {
            FaqCard
        },
        created() {
             this.$http.get("http://covid19-news.herokuapp.com/api/covid19/faqs")
                .then(res => {
                    console.log(res.data.data);
                    this.faqs =  res.data.data;
                    console.log(this.faqs);
                })
        },

        data() {
            return {
                faqs:[]
            }
        },
    }
</script>

<style>

</style>