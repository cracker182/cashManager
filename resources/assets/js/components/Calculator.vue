<template>
    <div class="div" style="margin-top: 50px">
        <navigation :cashamount="cashamount"></navigation>
        <div class="box">
            <div class="columns"  v-for="money in items">
                <div class="column">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" disabled :value="money.name">
                        </p>
                        <p class="control is-expanded-desktop">
                            <input class="input" type="tel" v-model="money.multiplier">
                        </p>
                        <p class="control">
                            <input class="input" type="text" disabled :value="money.multiplier*money.value">
                        </p>
                        <p class="control">
                            <a class="button"  @click="money.multiplier--">
                                <b-icon icon="remove"></b-icon>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button"  @click="money.multiplier++">
                                <b-icon icon="add"></b-icon>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    const items= [
        {
            name: "100",
            value: 100,
            multiplier: 0
        },
        {
            name: "50",
            value: 50,
            multiplier: 0
        },
        {
            name: "20",
            value: 20,
            multiplier: 0
        },
        {
            name: "10",
            value: 10,
            multiplier: 0
        },
        {
            name: "5",
            value: 5,
            multiplier: 0
        },
        {
            name: "2",
            value: 2,
            multiplier: 0
        },
        {
            name: "1",
            value: 1,
            multiplier: 0
        },
        {
            name: "0,50",
            value: 0.5,
            multiplier: 0
        },
        {
            name: "0,20",
            value: 0.2,
            multiplier: 0
        },
        {
            name: "0,10",
            value: 0.1,
            multiplier: 0
        },
        {
            name: "0,05",
            value: 0.05,
            multiplier: 0
        },
        {
            name: "0,02",
            value: 0.02,
            multiplier: 0
        },
        {
            name: "0,01",
            value: 0.01,
            multiplier: 0
        }
        ];

    export default {
        data () {
            return {items}

        },

        computed: {
            cashamount() {
                let sum = 0;

                $.each(this.items, function (k, v) {
                    sum += (v.value * v.multiplier)
                });

                return sum;

            },
        }
    }
</script>
