<template>

    <section class="info-tiles my-4 container">
        <div class="tile is-ancestor has-text-centered">
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">
                        <animated-number :value="statistic.cases" :formatValue="format" :duration="1000" />
                    </p>
                    <p class="subtitle">Cases</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">
                        <animated-number :value="statistic.deaths" :formatValue="format" :duration="1000" />
                    </p>
                    <p class="subtitle">Deaths</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">
                        <animated-number :value="statistic.recovered" :formatValue="format" :duration="1000" />
                    </p>
                    <p class="subtitle">Recovered</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">
                        <animated-number :value="statistic.tests" :formatValue="format" :duration="1000" />
                    </p>
                    <p class="subtitle">Tests</p>
                </article>
            </div>
        </div>
    </section>


</template>

<script>
    import AnimatedNumber from "animated-number-vue";

    export default {
        name: "Stats",
        props: ["statistic"],
        components: {
            AnimatedNumber
        },
        methods: {
            format(value) {
                return `${value.toFixed(0)}`;
            }
        }

    }
</script>

<style scoped>
    .level {
        padding-top: 45px;
        padding-bottom: 45px;
    }
</style>