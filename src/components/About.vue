<template>
    <section id="About" class="aboutMe" data-page="about">
        <!-- <div class="together"> -->
        <div class="myImg top-animate-start mediaFault">
            <img src="../assets/images/me2.jpg" alt="Shokhboz Abdullayev" />
        </div>
        <div class="typewriter bottom-animate-start">
            <h1>
                <span class="primary-txt">Shokhboz Abdullayev The</span>
                <span ref="txtType" class="txt-type" data-wait="3000" :data-words="words"></span>
            </h1>
        </div>
        <!-- </div> -->
        <div class="aboutWords right-animate-start">
            <h3>Shortly about me</h3>
            <br />

            <p>
                Hello! My name is Shokhboz Abdullayev - Excited man by
                making full-stack apps, working with others and having fun
                with this passions. So, first thing's first, I'm a junior full
                stack developer with a year of experience. Self improver.
                Lover of JavaScript and Python programming languages using
                them on personal
                <a
                    class="link pr"
                    href="#Projects"
                >projects</a>. Interested
                in Automation, Web Scraping. Graduated Student of Udacity -
                Full Stack Development. Worked in a small Start Up team as a
                backend developer for a year. And the last thing - I'm sure
                that I'm suitable for your next business project!
            </p>
            <br />
            <a class="link ct" href="#Contact">Let's work together</a>
        </div>
    </section>
</template>

<script>
import TypeWriter from "./js-components/typeWriter";
export default {
    name: "About",
    data() {
        return {
            words: '["Developer", "Designer", "Interpreneur"]',
        };
    },
    methods: {
        init() {
            const typeWriterElement = this.$refs.txtType;
            const dataWait = typeWriterElement.getAttribute("data-wait");
            const dataWords = JSON.parse(
                typeWriterElement.getAttribute("data-words")
            );

            new TypeWriter(typeWriterElement, dataWords, dataWait);
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style>
</style>