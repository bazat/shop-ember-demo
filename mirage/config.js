export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

	this.get('/products', ({ db }) => {
		return {
			data: db.products.map(attrs => (
			{type: 'products', id: attrs.id, attributes: attrs }
			))
		};
	});

	this.post('/products', function({ db }, request) {
		let attrs = JSON.parse(request.requestBody);
		let attributes = db.products.insert(attrs);
		return {
			data: {
				type: 'products',
				id: attributes.id,
				attributs: attributes
			}
		};
	});

	this.patch('/products/:id', function({ db }, request) {
		let attrs = JSON.parse(request.requestBody);
		let attributes = db.products.update(attrs.data.id, attrs.data.attributes);
		return {
			data: {
				type: "products",
				id: attributes.id,
				attributes: attributes
			}
		};
	});

	this.del('/products/:id', ({ db }, request) => {
		let id = request.params.id;
		db.products.remove(id);
	});


	this.get('/orders', ({ db }) => {
		return {
			data: db.orders.map(attrs => (
			{type: 'orders', id: attrs.id, attributes: attrs }
			))
		};
	});

	this.post('/orders', function({ db }, request) {
		let attrs = JSON.parse(request.requestBody);
		let attributes = db.orders.insert(attrs);
		return {
			data: {
				type: 'orders',
				id: attributes.id,
				attributs: attributes
			}
		};
	});

	this.patch('/orders/:id', function({ db }, request) {
		let attrs = JSON.parse(request.requestBody);
		let attributes = db.orders.update(attrs.data.id, attrs.data.attributes);
		return {
			data: {
				type: "orders",
				id: attributes.id,
				attributes: attributes
			}
		};
	});

	this.del('/orders/:id', ({ db }, request) => {
		let id = request.params.id;
		db.orders.remove(id);
	});
}
