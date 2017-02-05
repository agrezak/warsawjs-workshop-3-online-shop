const Template = `<div class="single-product">
	<h2>{{$ctrl.productData.name}}</h2>
	<img ng-src={{$ctrl.productData.image}} alt="{{$ctrl.productData.name}}">
	<p>{{$ctrl.productData.description}}</p>
	<button ng-click="$ctrl.addProductToCart()" class="button">Do koszyka</button>
	<input type="number">
</div>`;

export default class ProductComponent {

	constructor() {
		this.bindings = {
			productData : "="
		};
		this.controller = ProductController;
	}

	template() {
		return Template;
	}

}

class ProductController {

	constructor(cartService) {
		this.cartService = cartService;
	}

	addProductToCart() {
		this.cartService.addToCart(this.productData);
	}

}
