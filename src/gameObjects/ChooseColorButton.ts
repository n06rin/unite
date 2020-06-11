
// You can write more code here

/* START OF COMPILED CODE */

export default class ChooseColorButton extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture) {
		super(scene, x, y, texture || "greenSq68px");

		this.setOrigin(0, 0);

		this.setInteractive();
		
	}
}
