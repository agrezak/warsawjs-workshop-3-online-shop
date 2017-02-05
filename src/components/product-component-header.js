const Template = `<section>
	<header>
		<div class="row">
			<div class="small-2 column">
				<img src="http://placehold.it/100x100" alt="Logo">
			</div>
			<div class="small-8 column">
				<h1>Sklep internetowy</h1>
			</div>
			<div class="small-2 column">
				<p>Lorem</p>
			</div>
		</div>
	</header>
</section>
<cart-component></cart-component>`;

export default class ProductComponentHeader {

	constructor() {

	}

	template() {
		return Template;
	}

}
