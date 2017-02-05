const Template = `
<div class="row">
<product-component class="small-3 column" product-data="product" ng-repeat="product in $ctrl.products"></product-component>
</div>`;

export default class ProductComponentList {

	constructor() {
		this.controller = ProductListController;
	}

	template() {
		return Template;
	}

}

class ProductListController {

	constructor(productsService, storageService) {
		productsService.fetchProducts().then( response => {
			this.products = response.data;
		});
	}

	$onInit() {
		this.products = [];
	}

}
