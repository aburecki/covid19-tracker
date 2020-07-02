<template>
    <div id="app">

        <section class="hero is-primary is-small is-bold">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head container">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img src="../src/assets/thediplomat-2020-04-01.png" alt="Logo">
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" class="navbar-menu">
                            <div class="navbar-end">

                                <router-link class="navbar-item" to="/" exact >Home</router-link>

                                <router-link class="navbar-item" to="/chart">Chart</router-link>

                                <router-link class="navbar-item" to="/covid-info">Covid information</router-link>


                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        COVID-19
                    </h1>
                    <h2 class="subtitle">
                        Vue Statistic App in Poland
                    </h2>
                </div>
            </div>

        </section>
        <Stats :statistic="statistic" />
        <router-view></router-view>
        <!-- <ChartComponent /> -->

    </div>
</template>

<script>
    // import Navbar from "./components/Navbar"
    import Stats from "./components/Stats"
    // import ChartComponent from "./components/ChartComponent"

    export default {
        name: "App",
        components: {
            // Navbar,
            Stats,
            // ChartComponent
        },

        data() {
            return {
                statistic: {
                    cases: 0,
                    deaths: 0,
                    recovered: 0,
                    tests: 0
                }
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
</style>