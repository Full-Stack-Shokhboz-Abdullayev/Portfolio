<template>
	<section
		id="Welcome"
		class="im"
		@dblclick="changeImage"
		data-page="welcome"
	>
		<img src="../assets/images/mountain1.jpg" class="img i6" />
		<img src="../assets/images/mountain2.jpg" class="img i5" />

		<img src="../assets/images/mountain3.jpg" class="img i4" />

		<img src="../assets/images/mountain4.jpg" class="img i3" />

		<img src="../assets/images/mountain5.jpg" class="img i2" />

		<img src="../assets/images/mountain6.jpg" class="img i1" />

		<div class="relate">
			<p
				class="hello"
				:style="{
					transform: animations.helloTextAppear
						? 'translateX(20%)'
						: 'translate(-100%)',
					transition: '0.3s ease-in-out all',
				}"
			>
				Hello, gorgeous visitor!
			</p>
		</div>
		<div class="tip-div">
			<p class="tip">#double click or tap image to change it</p>
		</div>
	</section>
</template>

<script>
export default {
	name: "Im",
	data() {
		return {
			animations: {
				num: 0,
				helloTextAppear: false,
			},
		};
	},
	methods: {
		changeImage() {
			const imgDiv = document.querySelectorAll(".img");

			imgDiv[this.animations.num].classList.add("keyfr");
			if (this.animations.num === 5) {
				imgDiv.forEach((i) => i.classList.remove("keyfr"));
				this.animations.num = -1;
			}
			this.animations.num++;
		},
		//for mounted LifeCycle Hook
		slideImage() {
			const imgDiv = document.querySelectorAll(".img");

			setInterval(() => {
				imgDiv[this.animations.num].classList.add("keyfr");
				if (this.animations.num === 5) {
					imgDiv.forEach((i) => i.classList.remove("keyfr"));
					this.animations.num = -1;
				}
				this.animations.num++;
			}, 10000);
		},
	},
	mounted() {
        this.slideImage();
        
		setTimeout(() => {
            this.animations.helloTextAppear = true;
        }, 1000)
	},
};
</script>

<style lang="css" scoped></style>
