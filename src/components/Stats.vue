<template>


    <nav class="level container">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading is-medium">Cases</p>
                <p class="title">
                    <animated-number :value="statistic.cases" :formatValue="format"  :duration="1000" />
                </p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Deaths</p>
                <p class="title">
                    <animated-number :value="statistic.deaths" :formatValue="format"  :duration="1000" />
                </p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Recovered</p>
                <p class="title">
                     <animated-number :value="statistic.recovered" :formatValue="format"  :duration="1000" />
                </p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Tests</p>
                <p class="title">
                    <animated-number :value="statistic.tests" :formatValue="format"  :duration="1000" />
                </p>
            </div>
        </div>
    </nav>



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