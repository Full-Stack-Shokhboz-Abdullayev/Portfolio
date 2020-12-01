<template>
    <section id="Contact" data-page="contact" class="contactMe">
      
        <!-- <div class="content"> -->
            <transition name="c_error" >

                <div class="error-div" v-if="errorOccured">
                    <p class="contact-error">
                        An error occured while sending message!
                    </p>
                </div>
            </transition>
            <transition name="thanks">
                <div key="thanks" class="middle_thanks" v-if="success">
                    <h2>
                        Thanks for attention.
                    </h2>
                </div>


                <div class="t" key="form" v-else-if="!success">

                    <div class="content__title byScroll" key="1">
                         <h3>
                        Get in touch
                         </h3>
                    </div>


                    <form @submit.prevent="sendMail" key="2" v-if="!success" class="content__form byScroll">
                       <div class="short-3">
                            <label>
                            <h4>
                                Name
                            </h4>
                            <input placeholder="John Doe" required v-model="userName" type="text">
                        </label>
                        <label>
                            <h4>
                                Your email
                            </h4>
                            <input placeholder="johndoe@mail.com" required v-model="email" type="email">
                        </label>
                        <label>
                            <h4>
                                Phone number
                            </h4>
                            <input maxlength="14" placeholder="+18143519507" required v-model="phone" type="tel">
                        </label>
                       </div>

                        <div class="long-2">
                            <label>
                            <h4>
                                Skype ID (optional)
                            </h4>
                            <input placeholder="live.cid....." v-model="skypeId" type="text">
                        </label>
                        <label>
                            <h4>
                                What about the message?
                            </h4>
                            <textarea required name="" id="" cols="20" rows="6" v-model="message"></textarea>
                        </label>
                        </div>
                        <button class="submit" type="submit">Submit</button>
                    </form>
                </div>
            </transition>

    </section>
  
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_6kYNFVWPh0uY81YVt9RDB");
export default {
    name: 'Contact',
    data() {
        return {
            email: '',
            message: '',
            encodedMessage:'',
            phone: '',
            userName: '',
            id: 'template_7r9i9al',
            skypeId: '',
            // token: '1446179514:AAE5G3u5GClLkCcaawiLFhsuUyrfJIdMDBQ',
            success: false,
            errorOccured: false,

        }
    },
    props: [
        // 'contactSuccess'
    ],
    methods: {
        sendMail() {
            let templateParams = {
                to: 'shokhboz11abdullayev@gmail.com',
                email: this.email,
                phone: this.phone,
                skype_id: this.skypeId !== '' ? this.skypeId : "'Didn't put.",
                message: this.message,
                user_name: this.userName,
            }

            emailjs.send('default_service', this.id, templateParams)
                .then( (response) => {
                    console.log('Contact message was sent. Please, wait until you get response. Thanks!', response.status, response.text);
                    this.success = true
                    this.$emit("success", this.succes)
                }, (error) => {
                    this.errorOccured = true
                    setTimeout(() => this.errorOccured = false, 4000)
                    // this.$emit("error", this.error)
                    console.log('FAILED...', error);
            });
            // this.fetchAsync('https://api.telegram.org/bot1446179514:AAE5G3u5GClLkCcaawiLFhsuUyrfJIdMDBQ/getUpdates')
            // .then(res => res.result)
            // .then(res => res[0])
            // .then(res => this.chat_id = res.message.chat.id).then(() => {
            //     this.sendTelegram(`https://api.telegram.org/bot1446179514:AAE5G3u5GClLkCcaawiLFhsuUyrfJIdMDBQ/sendMessage/?chat_id=`)
            // })
            
            
            // this.fetchAsync("ht")

        },
        // async fetchAsync (url) {
        //     let response = await fetch(url);
        //     let data = await response.json();
        //     return data;
        // },
        // async sendTelegram (url) {
        //     let response = await fetch(url, {
        //         method: 'POST',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
                
        //     });
        //     let data = await response.json();
        //     return data;
        // },
        
    }
}
</script>

<style>
.c_error-enter {
    transform: translateX(100%);
}
.c_error-enter-active {
    transition: all 0.3s ease-in-out;

}
.c_error-leave {
    }
.c_error-leave-active {
    transition: all 0.3s ease-in-out;
    transform: translateX(100%);

}

.thanks-enter {
    opacity: 0;
    pointer-events: none;
}
.thanks-enter-active {
    transition: all 0.5s ease-in-out all;
}
.thanks-leave-active {
    transition: all 0.5s ease-in-out all;
 opacity: 0;
    pointer-events: none;
}
</style>