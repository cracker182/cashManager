<template>
    <nav class="nav">
        <div class="nav-left">
            <a class="nav-item">
                <i class="fa fa-money"></i> &nbsp;
                <h4>Cash Manager</h4>
            </a>
        </div>


        <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
        <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
        <span class="nav-toggle" @click="toggle">
            <span></span>
            <span></span>
            <span></span>
        </span>

        <!-- This "nav-menu" is hidden on mobile -->
        <!-- Add the modifier "is-active" to display it on mobile -->
        <div :class="classes">
            <a class="nav-item">
                Home
            </a>
            <!--<a class="nav-item">
                Documentation
            </a>
            <a class="nav-item">
                Blog
            </a>-->

            <!--<div class="nav-item">
                <div class="field is-grouped">
                    <p class="control">
                        <a class="button">
                            <span class="icon">
                              <i class="fa fa-twitter"></i>
                            </span>
                            <span>Tweet</span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button is-primary">
                            <span class="icon">
                              <i class="fa fa-download"></i>
                            </span>
                            <span>Download</span>
                        </a>
                    </p>
                </div>
            </div>-->
        </div>
    </nav>
</template>

<script>
    export default {

        data () {
            return {
                isClicked: false
            }
        },

        computed: {
            classes() {
                return [
                    'nav-right', 'nav-menu',
                    this.isClicked ? 'is-active' : ''
                ]
            }
        },
        methods: {
            toggle () {
                this.isClicked = !this.isClicked;
            }
        }
    }
</script>