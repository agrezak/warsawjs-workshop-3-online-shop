import shopModule from './modules/app.module';
import ProductComponentHeader from './components/product-component-header';
import ProductComponentList from './components/product-component-list';
import ProductComponent from './components/product-component';
import CartComponent from './components/cart-component';
import ProductComponentFooter from './components/product-component-footer';
import HTTPService from './services/http-service';
import ProductsService from './services/products-service';
import StorageService from './services/storage-service';
import CartService from './services/cart-service';

const shop = shopModule();

shop.component('productComponentHeader', new ProductComponentHeader());
shop.component('productComponentList', new ProductComponentList());
shop.component('productComponent', new ProductComponent());
shop.component('cartComponent', new CartComponent());
shop.component('productComponentFooter', new ProductComponentFooter());

shop.factory('httpService', HTTPService);
shop.factory('storageService', StorageService);

shop.service('cartService', CartService);
shop.service('productsService', ProductsService);

angular.bootstrap(window.document, ['shop']);
