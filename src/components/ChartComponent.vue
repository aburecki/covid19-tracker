<template>
    <section class="hero is-fullheight is-light is-bold">

        <!-- <div id="chart" class=""> -->
            <apexchart type="area" height="100%" :options="chartOptions" :series="series"></apexchart>
        <!-- </div> -->

    </section>
</template>

<script>
    import moment from 'moment'

    export default {

        name: "ChartComponent",
        created() {


            this.$http.get("https://api.covid19api.com/total/dayone/country/poland/status/deaths")
                .then((res) => {
                    // console.log(res.data)

                    this.api_data = res.data;
                    console.log(this.api_data.length);

                    this.api_data.forEach((obj) => {

                        this.cases.push(obj.Cases)
                        this.date.push(moment(obj.Date).format("MM-DD"))

                    });

                    this.cases.splice(112, 1, 1396)


                    

                    let total = 0;

                    for(let i = 0, length = this.cases.length; i < length; i++) {

                        if (i === 0) {

                            this.day.push(0)
                            this.day.push(this.cases[i])
                            // console.log(this.day)

                        } else if (i === length - 1) {

                            total = this.cases[i + 1] - this.cases[i];
                            this.day.push(total)
                            this.day.splice(length, 1)

                        } else {

                            total = this.cases[i + 1] - this.cases[i];
                            // console.log(total)
                            this.day.push(total)
                        }

                    }



                    this.chartOptions = {
                        xaxis: {
                            categories: this.date
                        }
                    }
                    this.series = [{
                        data: this.cases
                    },{
                        data: this.day
                    }]



                })



        },

        data: function () {
            return {
                api_data: null,
                cases: [],
                day: [],
                date: [],
                chartOptions: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: [],
                        labels: {
                            show: false,
                        }
                    },
                },
                series: [{
                        name: 'Total deaths',
                        data: []
                    },
                    {
                        name: 'Deaths by day',
                        data: []
                    }
                ],
                noData: {
                    text: 'Loading...'
                }
            }
        },
    };
</script>

<style>
    .chart {
        width: 70%;
        margin: 0 auto;
    }
</style>