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
                        <b-field grouped="true">
                            <p class="control">
                                <button class="button">100er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="hundred"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="hundred--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="hundred++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">50er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="fifty"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="fifty--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="fifty++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">20er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="twenty"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="twenty--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="twenty++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">10er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="ten"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="ten--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="ten++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">5er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="five"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="five--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="five++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">2er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="two"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="two--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="two++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">1er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="one"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="one--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="one++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">0,50er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="fiftycent"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="fiftycent--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="fiftycent++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">0,20er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="twentycent"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="twentycent--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="twentycent++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">0,10er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="tencent"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="tencent--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="tencent++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">0,05er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="fivecent"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="fivecent--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="fivecent++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">0,02er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="twocent"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="twocent--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="twocent++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <b-field grouped="true" >
                            <p class="control">
                                <button class="button">0,01er</button>
                            </p>
                            <b-input type="tel" expanded="true" v-model="onecent"></b-input>
                            <p class="control">
                                <button class="button is-warning" @click="onecent--">
                                    <b-icon icon="remove"></b-icon>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success" @click="onecent++">
                                    <b-icon icon="add"></b-icon>
                                </button>
                            </p>
                        </b-field>
                    </div>
                </div>
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
