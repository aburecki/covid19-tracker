<template>
    <div id="app">

        <nav class="navbar container" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <router-link class="button" to="/" exact>Home</router-link>

                            <router-link class="button" to="/chart">Chart</router-link>

                            <router-link class="button" to="/covid-info">Covid Information</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <section class="hero is-danger is-bold">
         <div class="hero-body ">
                <div class="container has-text-centered">
                    <h1 class="title">
                    Poland COVID-19 Tracker
                    </h1>
                    <h2 class="subtitle">
                    Vue Single Page Application showing actual COVIR-19 statistics in Poland 
                    </h2>
                </div>
            </div>
</section>

        <Stats :statistic="statistic" />
        <router-view></router-view>


    </div>
</template>

<script>
    import Stats from "./components/Stats"

    export default {
        name: "App",
        components: {

            Stats,


        },

        data() {
            return {
                statistic: {
                    cases: 0,
                    deaths: 0,
                    recovered: 0,
                    tests: 0
                },
                faqs: []
            }

        },

        created() {
            this.$http.get("https://corona.lmao.ninja/v2/countries/Poland?yesterday=false&strict=true&query")
                .then((res) => {
                    // console.log(res.data);
                    this.statistic.cases = res.data.cases;
                    this.statistic.deaths = res.data.deaths;
                    this.statistic.recovered = res.data.recovered;
                    this.statistic.tests = res.data.tests;

                })


        }

    }
</script>


<style>
    @import "~bulma/css/bulma.css";
    .navbar {
        border-bottom: 1px solid #e0dfdf;
    }
</style>