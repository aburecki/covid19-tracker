<template>
    <div class="column is-4">
        <div class="card is-shady">
            <div class="card-image">
                <figure class="image is-5by2">
                    <img src="../assets/covid19_160114.jpg"
                        alt="Placeholder image" class="modal-button" data-target="modal-image2">
                </figure>
            </div>
            <div class="card-content">
                <div class="content">
                    <h4>{{ faq.question }} </h4>
                    <div v-show="showSection">
                        <p>{{ faq.answer }}</p>
                    </div>
                    <button class="button is-primary mt-4 is-light" v-on:click="toggle"> Show
                        {{ showSection ? 'less' : "more" }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ["faq"],

        methods: {
            toggle() {
                this.showSection = !this.showSection
            },

        },
        data() {
            return {
                showSection: false,
                showing: {
                    isExpanded: "less",
                    isNarrow: "more"
                },

            }
        },

    }
</script>

<style>

</style>