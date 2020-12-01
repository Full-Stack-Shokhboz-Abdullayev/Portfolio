<template>
    <footer class="bottomFooter">
        <ul class="links">
            <li class="linkedin">
                <a href="https://www.linkedin.com/in/shokhboz-abdullayev-8545b01b9">
                    <i class="fa fa-linkedin-square fa-2x">

                    </i>
                </a>
            </li>
            <li class="facebook">
                <a href="https://www.facebook.com/shokhboz.abdullayev.7">
                    <i class="fa fa-facebook-square fa-2x">

                    </i>
                </a>
            </li>
            <li class="instagram">
                <a href="https://www.instagram.com/just__a__developer/">
                    <img src="../assets/images/instagram.svg" alt="">
                </a>
            </li>
            <li class="github">
                <a href="https://github.com/Full-Stack-Shokhboz-Abdullayev">
                    <i class="fa fa-github fa-2x">

                    </i>
                </a>
            </li>
        </ul>
        <ul class='links geo'>
            <li>
                <i class="fa fa-map-marker"></i>
                <a href="https://earth.google.com/web/data=Mj8KPQo7CiExemxZR3hHaERSSE9aQ056RXk5SWN0YmFDaFVfM21JeVoSFgoUMEMwNUZFREI4ODE2REVCNDE0NDA">
                Uzbekistan, Sirdarya
                
                </a>
            </li>
            <li>
                <i class="fa fa-phone-alt"></i>
                <a href="tel:+998994718546">+998994718546</a>
            </li>
            <li>
                <i class="fa fa-skype"></i>
                <a href="skype:live:.cid.dc18fbea403ebed5?chat">

                    live:.cid.dc18fbea403ebed5
                </a>
            </li>
        </ul>
        <div class="copyright">
            <p>

                <i class="fa fa-copyright"></i> Copyright 
                {{year}} All rights reserved.
            </p>
            <p class="first-child">
                Made with <i class="fa fa-heart-circle"></i> by Shokhboz Abdullayev.
            </p>
        </div>
    </footer>
  
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        year() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>

