<template>
<div class="column is-4">
  <div class="card is-shady">
                        <div class="card-image">
                            <figure class="image is-5by2">
                                <img src="https://ec.europa.eu/programmes/erasmus-plus/sites/erasmusplus2/files/styles/erasmus__rewamp_overview/public/covid19-cdc-unsplash.jpg?itok=e02GjCQm" alt="Placeholder image"
                                    class="modal-button" data-target="modal-image2">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <h4>{{ faq.question }} </h4>
                                <p>{{ faq.answer }}</p>
                            </div>
                        </div>
                    </div>
                     </div>
</template>

<script>
export default {
    name: "Card",
    props: ["faq"]
}
</script>

<style>

</style>