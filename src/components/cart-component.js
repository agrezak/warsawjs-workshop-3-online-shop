const Template = `<div class="row cart">
Koszyk: {{$ctrl.cartService.getCartLength()}}
</div>`;

export default class CartComponent {

	constructor() {
		this.controller = CartController;
	}

	template() {
		return Template;
	}

}

class CartController {

	constructor(cartService) {
		this.cartService = cartService;
	}

}
