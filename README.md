# shop-ember-demo
Shop demo based on EmberJS &amp; REST API of Ruby on Rails

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### REST API Integration

Add URL of REST API Instance to config

config/environment.js
<code>
var ENV = {\
	...
    RestApiUrl: 'http://localhost:3000',
    ...
};
</code>

=====================================================================
=====================================================================
=====================================================================

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

