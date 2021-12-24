window.addEventListener('load', () => {
	return;

	/** @type {HTMLCanvasElement} */
	const canvas = document.querySelector('canvas.background');

	/** @type {CanvasRenderingContext2D} */
	const context = canvas.getContext('2d');

	canvas.width = canvas.width * 3;
	canvas.height = canvas.height * 3;

	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.style.opacity = 1;
	canvas.style.filter = 'brightness(15%)';

	/** @type {string} */
	const color1 = '#ffffff';
	/** @type {string} */
	const color2 = '#000000';

	/** @type {number} */
	const thickness = 8;

	/** @type {number} */
	const yCount = 5;

	/** @type {number} */
	let offset = 0;

	/** @type {Date} */
	let lastUpdate = Date.now();

	/** @returns {void} */
	function renderStripes(
		/** @type {number} */ y,
		/** @type {number} */ height,
		/** @type {number} */ offset,
		/** @type {number} */ count
	) {
		for(/** @type {number} */ let i = -2; i < count + 2; i++) {
			context.beginPath();

			context.strokeStyle = i % 2 ? color1 : color2;
			context.lineWidth = thickness;

			context.moveTo(offset + (i * thickness + thickness / 2), y);
			context.lineTo(offset + (i * thickness + thickness / 2), y + height);

			context.stroke();
		}
	}

	/** @returns {void} */
	function render() {
		if(Date.now() - lastUpdate.valueOf() > 15) {
			lastUpdate = Date.now();

			/** @type {number} */
			const xCount = canvas.width / thickness;

			/** @type {number} */
			const height = canvas.height / yCount;

			for(/** @type {number} */ let i = 0; i < yCount; i++) {
				/** @type {number} */
				const localOffset = i % 2 === 0 ? offset : -offset;

				renderStripes(height * i, height * (i + 1), localOffset, xCount);
			}

			offset += 0.10;
			if(offset > thickness * 2) offset = 0;
		}

		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);
});
