<template>
    <div>
       
        <app-header></app-header>
        <app-settings></app-settings>

        <app-im ref="section1"></app-im>

        <app-about ref="sections2"></app-about>

        <app-skills ref="sections3"></app-skills>

        <app-other-styles :canManage="canManage" ref="sections4"></app-other-styles>

        <app-contact @success="onSuccess" ref="sections5"></app-contact>

        <app-footer></app-footer>
        <transition name="sentAnimation"> 
            <div class="fixed_cover" @click="closeModal"  v-if="contactSuccess && !closed">

        <div class="was-sent" @click.stop="">
            <div class="animation">
                <svg class="checkmark" :class="{'start__checkmark': contactSuccess}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" :class="{'start__circle': contactSuccess}" cx="26" cy="26" r="25" fill="none"/>
                     <path class="checkmark__check" :class="{'start__checkmark__check': contactSuccess}" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
            <div class="words">
                <p>
                    <span>
                        The message was sent successfully! 
                    </span>
                    <span>
                        I'll personally reply you as soon as possible.
                    </span>
                </p>
            </div>
            <button @click="closeModal">
                Ok
            </button>
        </div>
            </div>
        </transition>

        <div class="cover" :class="{coverOpened: clickData1}">
            <div class="cancel" @click="cancel">
                <div class="line_1"></div>
                <div class="line_2"></div>
            </div>
            <div class="error" :class="{occured: wrong}">
                <h4>
                    Wrong password! Try again.
                </h4>
            </div>
            <form @submit.prevent="checkPassword" class="cover__wrapper" :class="{wrapperOpened: clickData2}">
                <h1>
                    Password to manage the Porfolio.
                </h1>
                <div class="cover__wrapper__form">
                    <div class="form-control"> 

                        <input v-model="managerPassword" required type="password" name="" id="">
                    <button type="submit">
                        Ok
                    </button>
                    
                    </div>
                </div>
            </form>
        </div>
        <small @click="showLog">
            <i class="fa fa-info"></i>
            Management
        </small>
    </div>
</template>

<script>
import appHeader from "./components/Header";
import appIm from "./components/Im";
import appSettings from "./components/Settings";
import appAbout from "./components/About";
import appContact from "./components/Contact";
import appSkills from "./components/Skills";
import appOtherStyles from "./components/OtherStyles";
import appFooter from "./components/Footer";
import ScrollHandler from "./components/js-components/handleScrolls";

export default {
    name: "Base",
    data() {
        return {
            rightPassword: 'fullstack2020$',
            managerPassword: '',
            clickData1: false,
            clickData2: false,
            wrong: false,
            canManage: false,
            contactSuccess: false,
            closed: false,
        }
    },
    components: {
        appHeader,
        appIm,
        appSettings,
        appAbout,
        appContact,
        appSkills,
        appOtherStyles,
        appFooter,
    },
    methods: {
        showLog() {
            this.clickData1 = true;
            setTimeout(() => {
                this.clickData2 = true;
            }, 500)
        },
        cancel() {
            this.clickData2 = false;
            this.wrong = false
            setTimeout(() => {
                this.clickData1 = false;
                this.managerPassword = ''
            }, 500)
        },
        checkPassword() {
            if (this.managerPassword === this.rightPassword) {
                this.canManage = true
                this.cancel()
            } else {
                this.wrong = true
                setTimeout(() => this.wrong = false, 1000)
            }
        },
        onSuccess() {
            this.contactSuccess = true
        },
        closeModal() {
            // this.contactSuccess =
            this.closed= true
        }
        
    },
    computed: {},
    mounted() {
        ScrollHandler()
    }
    
}; 
</script>

<style>
.coverOpened {
    opacity: 1 !important;
    pointer-events: all !important;
}
.wrapperOpened {
    pointer-events: all !important;
    opacity: 1 !important;
    transform: scale(1) !important;
} 
.error {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease-in-out all;
}
.error h4 {
    font-size: 24px;
    color: rgb(255, 53, 53);
}
.occured {
    opacity: 1 !important;
    pointer-events: all !important;
}


.sentAnimation-enter {
    opacity: 0;
    pointer-events: none;
}
.sentAnimation-enter-active {
    transition: 0.4s ease-in-out opacity;
}
.sentAnimation-leave-active {
    transition: 0.4s ease-in-out opacity;

opacity: 0;
    pointer-events: none;
}

</style>