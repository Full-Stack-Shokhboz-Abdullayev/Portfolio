<template>
    <section id="Skills" class="skills px-3" data-page="skills">
        <div class="skill-title">
            <h2><span>Here's the listed skills</span></h2>
        </div>
        <div class="skill-tip tip" @click="clickChangeTip">
            <transition-group class="tip-words" tag="div" name="title">
                <h3 v-if="changed" key="title">
                    {{ tipWords[tipWordIndex].title }}
                </h3>
                <p v-if="changed" key="words">
                    {{ tipWords[tipWordIndex].content }}
                </p>
            </transition-group>
            <!-- <small class="small-tip"> #change with click </small> -->
        </div>
        <div class="skills-container">
            <div class="static-frontend skills-group">
                <div class="title">
                    <h3>Static Front-End</h3>
                </div>
                <div class="langs-frames">
                    <p id="html">
                        <a href="#">
                            HTML
                            <i class="fa fa-html5"></i>
                        </a>
                    </p>
                    <p id="css">
                        <a href="#">
                            CSS
                            <img
                                src="../assets/images/css3.svg"
                                class="d-inline"
                                alt=""
                            />
                        </a>
                    </p>
                    <p id="sass">
                        <a href="#">
                            SASS
                            <img
                                src="../assets/images/Sass.svg"
                                class="d-inline"
                                alt=""
                            />
                        </a>
                    </p>
                </div>
            </div>
            <div class="dynamic-frontend skills-group">
                <div class="title">
                    <h3>Dynamic Front-End</h3>
                </div>
                <div class="langs-frames">
                    <p id="js">
                        <a href="#">
                            JavaScript
                            <img
                                src="../assets/images/javascript.svg"
                                class="d-inline"
                                alt=""
                            />
                        </a>
                    </p>
                   
                    <p id="vue">
                        <a href="#">
                            Vue Js
                            <img src="../assets/images/vue_js.svg" />
                        </a>
                    </p>

                    <p id="gsap">
                        <a href="#">
                            GSAP
                            <img src="../assets/images/gsap.svg" />
                        </a>
                    </p>
                </div>
            </div>
            <div class="backend skills-group">
                <div class="title">
                    <h3>Back-end</h3>
                </div>
                <div class="langs-frames">
                    <p id="python">
                        <a href="#">
                            Python
                            <img src="../assets/images/python.svg" alt="" />
                        </a>
                    </p>
                    <p id="django">
                        <a href="#">
                            Django
                            <img src="../assets/images/Django.svg" alt="" />
                        </a>
                    </p>
                </div>
            </div>
            <div class="server skills-group">
                <div class="title">
                    <h3>Service Platforms</h3>
                </div>
                <div class="langs-frames">
                    <p id="heroku">
                        <a href="#">
                            Heroku
                            <img src="../assets/images/heroku.svg" alt="" />
                        </a>
                    </p>
                   
                    <p id="netlify">
                        <a href="#">
                            Netlify
                            <img src="../assets/images/netlify.svg" alt="" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            changed: true,
            tipWordIndex: 0,
            tipWords: [
                {
                    title: "HTML",
                    content: `
					Hyper Text Markup Language
					All texts or contents are written in HTML for the browser. 
					Even this...
					`,
                },
                {
                    title: "CSS",
                    content: `
					Cascading Style Sheets. This language adds clothes, skins to the web site.
					All the beauties are made with CSS. Animations, under the hood, added with CSS.
					Cool! Isn't it?
					`,
                },
                {
                    title: "SASS",
                    content: `
						SASS is a pre-processor for CSS.
						Shortly,
						SASS does all CSS work but with easy and funny way to build what you need faster.
						SASS is more like a programming language with its Conditions,
						Loops and Functions!
						
					`,
                },
                {
                    title: "JavaScript",
                    content: `JavaScript is a large language 
					used in almost every web site. The heart of the web.
					Usable for the front-end, as well as the back-end.
					King of animations. 
                    Adds dynamic funtions to your site. 
					`,
                },
                
                {
                    title: "Vue Js",
                    content: `It's a JavaScript front-end framework.
                    Vue Js is a more fun way to use a power of JavaScript. 
                    The work of Vue Js is to add reload-off functions and AJAX to the web site.
					Vue Js is best at doing those jobs. Portfolio was also built with Vue Js.
					`,
                },
                {
                    title: "GSAP",
					content: `GSAP is not like React Js or Vue Js, 
					actually it's animation library. 
					It seems interesting what is full name of GSAP.
					It's a Green Sock Animation Platform. 
					Some animations inside of Portfolio made using GSAP
					Got it!?   
					`,
                },
                {
                    title: "Python",
                    content: `High level, Object Oriented Programming Language.
						Python makes everything easy and fast. My first programming language.
						Almost every big topic is done with Python. Base language for Django and Flask web frameworks.

							`,
                },
            ],
        };
    },
    computed: {},
    methods: {
        changeTip() {
            setInterval(() => {
                if (this.tipWordIndex < this.tipWords.length - 1) {
                    this.tipWordIndex++;
                } else {
                    this.tipWordIndex = 0;
                }
                setTimeout(() => {
                    this.changed = !this.changed;
                }, 500);
                this.changed = !this.changed;
            }, 15000);
        },
        clickChangeTip() {
            if (this.tipWordIndex < this.tipWords.length - 1) {
                this.tipWordIndex++;
            } else {
                this.tipWordIndex = 0;
            }
            setTimeout(() => {
                this.changed = !this.changed;
            }, 500);
            this.changed = !this.changed;
        },
    },
    mounted() {
        this.changeTip();
    },
};
</script>

<style scoped>
.title-enter {
    opacity: 0;
    transform: translateX(5%);
}
.title-enter-active {
    transition: 0.4s ease-in-out all;
}

.title-leave-active {
    transform: translateX(-5%);

    transition: 0.4s ease-in-out opacity;
    opacity: 0;
}

</style>
