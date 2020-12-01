<template>
    <section id="Projects" class="otherStyles" data-page="styles">
		<div class="wrapper" :class="{'dark': !light, 'light': light}">
            <div class="title_switch__holder ">

            <h3 class="wrapper__title byScroll">
                My Projects
            </h3>
            <p class="wrapper__tip byScroll">
                #you can change color theme and It'll be saved!
            </p>
            <div class="switch byScroll" @click="changeTheme">
                <div class="switch__btn"  :style="{transform: !light ? 'translateX(100%)' : ''}">
                    <i class="fa" :class="{'fa-sun': light, 'fa-moon': !light}" ></i>
                </div>
            </div>
            </div>
            <div class="wrapper__content">
                <a v-for="(project, index) in projects" target="blank" :key="index" :href="project.link" class="byScroll wrapper__content__card">
                    <div class="wrapper__content__card__img">
                        <img :src="project.imgSrc" alt="">
                        <div class="icon">
                            <i class="fal fa-link fa-2x"></i>
                        </div>
                    </div>
                    <div class="wrapper__content__card__body">
                        <h3>
                            {{project.name}}
                        </h3>
                        <p v-html="project.content" style="margin-top: 0.5rem">
                        </p>
                        <em>
                            Open up the project
                        </em>
                    </div>
                </a>
               
            </div>
            <!-- <form class="add_projects">
                <label>
                    <input type="file" style="display: none">

                </label>
            </form> -->

        </div>
	</section>
</template>

<script>
import sample from "../assets/images/todo.png"



export default {
    name: "OtherStyles",
    props: {
        canManage: Boolean,
    },
    data() {
        return {
            light: false,
            projects: [
                {
                    imgSrc: sample,
                    name: "Todo List",
                    content: 
                    `
                        My first Todo List app. <br/> Built using React - Frontend, <br/> Django Rest Framework - Backend.
                    `,
                    link: 'https://shokhboz-to-do-app.herokuapp.com/',
                },
                // {
                //     imgSrc: sample,
                //     name: "Todo List",
                //     content: 
                //     `
                //         My first Todo List app. <br/> Built using React - Frontend, <br/> Django Rest Framework - Backend.
                //     `,
                //     link: 'https://shokhboz-to-do-app.herokuapp.com/',
                // },
               
            ]
        };
    },
    methods: {
        changeTheme() {
            this.light = !this.light;


            localStorage.setItem('light', this.light) 
        },
        
    },
    
    mounted() {
        const val = localStorage.getItem('light')
        if (val !== undefined && val !== null && val) {
            this.light = val === 'false' ? false : true 

            
        }
    }
    

}
</script>

<style>

</style>