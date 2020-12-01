export default class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.wait = parseInt(wait, 10);
		this.type();
	}
	txt = "";
	wordIndex = 0;
	isDeleting = false;
	type = () => {
		//current index of word
		const current = this.wordIndex % this.words.length;
		// get full text of current word
		const fullTxt = this.words[current];
		// check if deleting;
		if (this.isDeleting) {
			//Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
			// console.log(fullTxt);
		} else {
			//Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		// Insert txt into element

		this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;
		// Type speed
		let typeSpeed = 250;
		if (this.isDeleting) {
			typeSpeed /= 1.5;
			this.txtElement.classList.remove("cursorAnimation");
		}
		// if word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// Pause at end
			typeSpeed = this.wait;
			// Set delete to true
			this.isDeleting = true;
			this.txtElement.classList.add("cursorAnimation");
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;

			this.wordIndex++;
			//Pause before typing
			typeSpeed = 500;
		}
		setTimeout(() => {
			this.type();
		}, typeSpeed);
	};
}

// function init() {
// 	const typeWriterElement = document.querySelector(".txt-type");
// 	const dataWait = typeWriterElement.getAttribute("data-wait");
// 	const dataWords = JSON.parse(typeWriterElement.getAttribute("data-words"));

// 	new TypeWriter(typeWriterElement, (words = dataWords), (wait = dataWait));
// }

// window.addEventListener("DOMContentLoaded", init);

// init()
