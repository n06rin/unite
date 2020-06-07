import Phaser from 'phaser';

export default class GameOverModal extends Phaser.GameObjects.DOMElement {
	
	constructor(scene, x, y, onRestartButtonClick) {
		super(scene, x, y);
		this.createFromHTML(`
			<div style='
				width: ${this.scene.cameras.main.width}px;
				height: ${this.scene.cameras.main.height}px;
				background-color: rgba(255, 255, 255, .9);
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;

				color: black;
				text-transform: uppercase;
				text-align: center;
				font-size: 56px;
			'>
				<div class='absoluteRecord'>рекорд<br/><span class='value'>6940</span></div>
				<div
					class='currentRecord'
					style='
						font-weight: 100;
						font-size: 140px;
				'>
					<span
						class='value'
						style='font-weight: 400;'
					>
						1650
					</span>
					<br/>
					очков
				</div>
				<button
					style='
						width: 260px;
						height: 260px;
						border: none;
						background: none;
						outline: none;
						padding: 40px;
					'
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%">
						<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/><path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</button>
			</div>
		`)

		this.node.querySelector('button').addEventListener('click', onRestartButtonClick);
	}

	setAbsoluteRecord(value) {
		this.node.querySelector('.absoluteRecord .value').innerText = value;
	}

	setScore(value) {
		this.node.querySelector('.currentRecord .value').innerText = value;
	}

	hideFarAway() {
		this.x = 3000;
	}

	show(score, absoluteRecord) {
		this.setAbsoluteRecord(absoluteRecord);
		this.setScore(score);
		this.x = 0;
	}
}
