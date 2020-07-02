<template>
  <div id="app">
      
      <Navbar />
      <Stats :statistic="statistic" />
      <ChartComponent />

  </div>
</template>

<script>
  
    import Navbar from "./components/Navbar"
    import Stats from "./components/Stats"
    import ChartComponent from "./components/ChartComponent"

    export default {
        name: "App",
        components: {
            Navbar,
            Stats,
            ChartComponent
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
                .then( (res) => {
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
