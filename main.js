/////////////////////////////////////////
//
// SKETCH PRINCIPAL
//
/////////////////////////////////////////

let x, y; // posicion circulo

//_____________________

function setup() {
	createCanvas(300, 300).parent("contenedor__sketch--0");
	windowResized(); // responsive

	textSize(15);
}

//_____________________

function draw() {
	
	// fondo con cambio de color
	background(frameCount % 255, 200, 100);
	
	// circulo random
	if (frameCount % 60 == 0) {
		x = 20 + random(width - 20);
		y = 20 + random(height - 20);
		fill(200, random(200, 255), random(100, 200));
	}
	circle(x, y, 190);

	// prueba de uso erase
	erase()
	circle(50,250,50);
	noErase()

	// valores r,g,b,a del mouse en sketch principal
	push();
	fill(0);
	text("SK: " + get(mouseX, mouseY), 10, 20);
	pop();
}

//_____________________

function windowResized() {
	setTimeout(() => {
		const cont = document.getElementById("contenedor");
		const canv = document.getElementById("defaultCanvas0");
		const contPx = window.getComputedStyle(cont);
		canv.style.width = contPx.width;
		canv.style.height = contPx.height;
	}, 0);
}


/////////////////////////////////////////
//
// INTERFAZ EXTERNA (UI)
//
/////////////////////////////////////////

// declarar instancia secundaria
const interfaz = (p) => {

	let vis = true; // flag visibilidad

	//_____________________

	p.setup = () => {
		p.createCanvas(300, 300).parent("contenedor__sketch--1");
		p.windowResized();

		p.textSize(15);
	}

	//_____________________

	p.draw = () => {

		// fondo transparente
		p.clear();

		// cuadrado parpadeando
		let r, g, b;
		if (p.frameCount % 120 == 0) {
			vis = !vis
			r = random(140, 180);
			g = random(100, 160);
			b = random(90, 250);
		}
		if (vis) {
			p.fill(r, g, b);
			p.rect(100, 100, 100, 100);
		}
		
		// prueba de uso erase
		p.erase()
		p.circle(120, 180,20);
		p.noErase()

		// valores r,g,b,a del mouse en interfaz
		p.push();
		p.fill(0);
		p.text("UI: " + p.get(p.mouseX, p.mouseY), 10, 40);
		p.pop();
	}

	//_____________________

	p.windowResized = () => {
		setTimeout(() => {
			const cont = document.getElementById("contenedor");
			const canv = document.getElementById("defaultCanvas1");
			const contPx = window.getComputedStyle(cont);
			canv.style.width = contPx.width;
  		canv.style.height = contPx.height;
		}, 0);
	}
}

// ejecutar instancia secundario
new p5(interfaz); 
