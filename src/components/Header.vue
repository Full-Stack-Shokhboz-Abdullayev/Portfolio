<template>
	<header class="topHeader">
		<div>
			<nav class="navbar">
				<div class="logo">
					<img src="../assets/images/logo4.svg" alt="" />
				</div>
				<ul class="linkContainerTop" ref="linkContainer">
					<li
						class="links"
						data-pageLinks="welcome"
						data-index="0"
						id="first"
					>
						<a href="#Welcome">Welcome!</a>
					</li>
					<li class="links" data-pageLinks="about" data-index="1">
						<a href="#About">About</a>
					</li>
					<li class="links" data-pageLinks="skills" data-index="2">
						<a href="#Skills">Skills</a>
					</li>
					<li class="links" data-pageLinks="styles" data-index="3">
						<a href="#Projects">Projects</a>
					</li>
					<li class="links" data-pageLinks="contact" data-index="4">
						<a href="#Contact">Contact</a>
					</li>
					<div class="bubble"></div>
				</ul>
				<div class="burger-centralize">
					<div class="burger" ref="burger" @click="toggleMenu">
						<div class="line1 gs"></div>
						<div class="line2"></div>
						<div class="line3 gs"></div>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	methods: {
		toggleMenu() {
			this.$refs.burger.classList.toggle("burger-clicked");
			this.$refs.linkContainer.classList.toggle("linkContainerActive");
		

		},
	},
};
</script>

<style>
.logo {
	display: flex;
	align-items: center;
	padding-right: 10px;
}
.logo img {
	height: 65px;
}

</style>
