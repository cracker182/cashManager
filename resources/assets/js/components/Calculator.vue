<template>
    <div class="columns">
        <div class="column is-narrow">
            <div class="box" style="width: 200px;">
                <p class="is-5">Kassenbestand:</p>
                <p><span>{{ cashamount }}</span> €</p>
            </div>
        </div>
        <div class="column">
            <div class="box">
                <div class="columns">
                    <div class="column">
                        <b-field grouped>
                            <p class="control" style="width: 60px">
                                <button class="button">100er</button>
                            </p>
                            <b-input type="number" v-model="hundred"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="hundred--"><i class="fa fa-minus"></i></button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="hundred++"><i class="fa fa-plus"></i></button>
                            </p>
                        </b-field>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <b-field grouped>
                            <p class="control" style="width: 60px;">
                                <button class="button">50er</button>
                            </p>
                            <b-input type="number" v-model="fifty"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="fifty--"><i class="fa fa-minus"></i></button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="fifty++"><i class="fa fa-plus"></i></button>
                            </p>
                        </b-field>
                    </div>
                </div>


                <b-field label="20er">
                    <b-input type="tel" v-model="twenty"></b-input>
                </b-field>
                <b-field label="10er">
                    <b-input type="tel" v-model="ten"></b-input>
                </b-field>
                <b-field label="5er">
                    <b-input type="tel" v-model="five"></b-input>
                </b-field>
                <b-field label="2€">
                    <b-input type="tel" v-model="two"></b-input>
                </b-field>
                <b-field label="1€">
                    <b-input type="tel" v-model="one"></b-input>
                </b-field>
                <b-field label="0,50€">
                    <b-input type="tel" v-model="fiftycent"></b-input>
                </b-field>
                <b-field label="0,20€">
                    <b-input type="tel" v-model="twentycent"></b-input>
                </b-field>
                <b-field label="0,10€">
                    <b-input type="tel" v-model="tencent"></b-input>
                </b-field>
                <b-field label="0,05€">
                    <b-input type="tel" v-model="fivecent"></b-input>
                </b-field>
                <b-field label="0,02€">
                    <b-input type="tel" v-model="twocent"></b-input>
                </b-field>
                <b-field label="0,01€">
                    <b-input type="tel" v-model="onecent"></b-input>
                </b-field>
            </div>

        </div>
    </div>


</template>
<script>
    export default {
        data () {
            return {
                hundred: 0,
                fifty: 0,
                twenty: 0,
                ten: 0,
                five: 0,
                two: 0,
                one: 0,
                fiftycent: 0,
                twentycent: 0,
                tencent: 0,
                fivecent: 0,
                twocent: 0,
                onecent: 0

            }
        },

        computed: {
            cashamount: function () {
                return (this.hundred * 100) +
                    (this.fifty * 50) +
                    (this.twenty * 20) +
                    (this.ten * 10) +
                    (this.five * 5) +
                    (this.two * 2) +
                    (this.one * 1) +
                    (this.fiftycent * 0.5) +
                    (this.twentycent * 0.2) +
                    (this.tencent * 0.1) +
                    (this.fivecent * 0.05) +
                    (this.twocent * 0.02) +
                    (this.onecent * 0.01)



            }
        }
    }
</script>
