/////////////////////////////////////////
//
// SKETCH PRINCIPAL
//
/////////////////////////////////////////

const idPrincipal = "defaultCanvas0";

let x, y; // posicion circulo
let dejavu; // font

//_____________________

function preload() {
	dejavu = loadFont("./fonts/DejaVuSansMono.ttf");
}

//_____________________

function setup() {
	let lienzo = createCanvas(300, 300)
	lienzo.parent("contenedor__sketch--0");
	lienzo.id(idPrincipal);
	windowResized();

	textSize(15);
	textFont(dejavu);
}

//_____________________

function draw() {
	
	// fondo con cambio de color
	background(255, 90, 160);
	
	// circulo random
	if (frameCount % 60 == 0) {
		x = 20 + random(width - 20);
		y = 20 + random(height - 20);
		fill(200, random(200, 255), random(100, 200));
	}
	circle(x, y, 190);

	// prueba de uso erase
	erase()
	rect(90, 190, 40, 110);
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
		const canv = document.getElementById(idPrincipal);
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

	const idInterfaz = "defaultCanvas1";

	let r, g, b;
	let xy = [
		50, 50,
		250, 50,
		250, 250,
		50, 250
	]

	//_____________________

	p.setup = () => {
		let lienzo = p.createCanvas(300, 300)
		lienzo.parent("contenedor__sketch--1");
		lienzo.id(idInterfaz);
		p.windowResized();

		p.textSize(15);
		p.textFont(dejavu);
	}

	//_____________________

	p.draw = () => {

		// fondo transparente
		p.clear();

		// cuadrado parpadeando
		if (p.frameCount % 60 == 0) {
			r = random(60, 120);
			g = random(100, 150);
			b = random(240, 255);
			xy = [
				random(50, 100),  random(50, 100),
				random(200, 250), random(50, 100),
				random(200, 250), random(200, 250),
				random(50, 100),  random(200, 250)
		 ];

		}
		if (true) {
			p.fill(r, g, b);
			p.beginShape();
			p.vertex(xy[0], xy[1]);
			p.vertex(xy[2], xy[3]);
			p.vertex(xy[4], xy[5]);
			p.vertex(xy[6], xy[7]);
			p.endShape(CLOSE);
		}
		
		// prueba de uso erase
		p.erase()
		p.rect(120, 178, 20, 40);
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
			const canv = document.getElementById(idInterfaz);
			const contPx = window.getComputedStyle(cont);
			canv.style.width = contPx.width;
  		canv.style.height = contPx.height;
		}, 0);
	}
}

// ejecutar instancia secundaria
new p5(interfaz); 
