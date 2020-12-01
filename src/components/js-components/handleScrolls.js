import logoLight from "../../assets/images/logoLight.svg"
import logoDark from "../../assets/images/logo4.svg"


export default function() {
	const img = document.querySelector(".logo img");
	const sections = document.querySelectorAll("section");

	const header = document.querySelector("header");
	const text = document.querySelector(".hello");

	let mainOptions = {
		rootMargin: "-10% 0px 0px 0px",
	};
	const mainObserver = new IntersectionObserver(watchMain, mainOptions);

	mainObserver.observe(sections[0]);

	function watchMain(entries) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				header.classList.add("headerFixed");
				// img.src = "/img/logo4.cb63175c.svg";
				img.src = logoDark;
			} else {
				header.classList.remove("headerFixed");
				// img.src = "../../assets/images/logoLight.svg";
				img.src = logoLight;
			}
		});
	}

	const bubble = document.querySelector(".bubble");
	const gradients = [
		`	rgba(96, 112, 121, 0.6)
		`,
		`linear-gradient(
			to right,
			#24243e,
			#302b63,
			#0f0c29
		)`,

		`linear-gradient(
			to right,
			#240b36,
			#c31432
		)`,

		`linear-gradient(to right, #414345, #555555)`,
		`rgb(65, 80, 95)`,
		
	];

	const secondaryOptions = {
		threshold: 0.5,
		rootMargin: `0px 0px 0px 0px`,
	};
	const secondaryObserver = new IntersectionObserver(
		watchSections,
		secondaryOptions
	);
	const links = document.querySelectorAll(".links");

	//about page animations
	const myImg = document.querySelector(".myImg");
	const typewriter = document.querySelector(".typewriter");
	const aboutWords = document.querySelector(".aboutWords");
	const aboutArr = [myImg, typewriter, aboutWords];
	const lazyAnimations = [
		"top-bottom-animate",
		"top-bottom-animate",
		"right-left-animate",
	];
	let timeOut = 0;

	let element;
	function setBubble() {
		let coords = element.getBoundingClientRect();
		bubble.style.setProperty("left", `${coords.left}px`);
		bubble.style.setProperty("top", `${coords.top}px`);
		bubble.style.setProperty("height", `${coords.height}px`);
		bubble.style.setProperty("width", `${coords.width}px`);
	}
	window.onresize = setBubble;

	function watchSections(entries) {
		entries.forEach((entry) => {
			const data = entry.target.getAttribute("data-page");
			const activeLink = document.querySelector(
				`[data-pageLinks=${data}]`
			);
			element = activeLink;
			const gradientIndex = activeLink.getAttribute(`data-index`);
			let coords = activeLink.getBoundingClientRect();
			const target = entry.target.id.toLowerCase();

			if (entry.isIntersecting) {
				bubble.style.setProperty("left", `${coords.left}px`);
				bubble.style.setProperty("top", `${coords.top}px`);
				bubble.style.setProperty("height", `${coords.height}px`);
				bubble.style.setProperty("width", `${coords.width}px`);
				bubble.style.background = gradients[gradientIndex];
				links.forEach((link) => link.classList.remove("textfix"));
				activeLink.classList.add("textfix");

				if (target === "about") {
					aboutArr.forEach((i, index) => {
						setTimeout(() => {
							i.classList.add(lazyAnimations[index]);
						}, timeOut);
						timeOut += 250;
					});
				} else if (target === "skills") {
					let skills = [
						document.querySelectorAll(".static-frontend .langs-frames p"),
						document.querySelectorAll(".dynamic-frontend .langs-frames p"),
						document.querySelectorAll(".backend .langs-frames p"),
						document.querySelectorAll(".server .langs-frames p"),
					];
					let langsFrames = document.querySelectorAll(
						".langs-frames"
					);
					langsFrames = [...langsFrames].reverse();
					skills =  [ ...skills ].reverse()
					const titles = document.querySelectorAll('.skills-group .title')
					const mainTitle = document.querySelector('.skill-title')
					const tip = document.querySelector('.skill-tip')
					console.log(tip);
					let step =  4 * 3;
					let step2 = langsFrames.length - 1;
					// let step3 = titles.length - 1;

				
					langsFrames.forEach((l) => {
						setTimeout(() => {
							l.classList.add("langs-frames-active");
						}, 250 * step2);
						step2--;
					});
					skills.forEach((sk) => {
						sk.forEach((s) => {
							setTimeout(() => {
								s.classList.add("skills-active");
							}, 150 * step);
							step--;
						});
					});
					titles.forEach((t, index) => {
						setTimeout(() => {
							t.classList.add("langs-frames-title-active");
						}, 270 * (index + 1));
					})
					mainTitle.classList.add('skill-title-active')
					tip.classList.add('skill-tip-active')
				} 
				
			}
		});
	}
	sections.forEach((i) => {
		secondaryObserver.observe(i);
	});

	const textOptions = {
		rootMargin: "0% 0% -90% 0%",
	};

	const textObserver = new IntersectionObserver(watchText, textOptions);

	function watchText(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				header.classList.add("darken-header");
			} else {
				header.classList.remove("darken-header");
			}
		});
	}
	textObserver.observe(text);
	const cardObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('shown')
			} else {
				entry.target.classList.remove('shown')
			}
		})
	}, {
		threshold: 0.3,
		rootMargin: "0px 0px -10% 0px"
	})
	document.querySelectorAll('.byScroll').forEach((item) => {
		cardObserver.observe(item)
	})




	
	
	return true

}

// window.addEventListener('load', onload)
