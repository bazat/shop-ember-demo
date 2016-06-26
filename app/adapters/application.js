import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
	host: config.RestApiUrl,
	shouldBackgroundReloadAll: function() {
		return true;
	},
	shouldBackgroundReloadRecord: function() {
		return true;
	},
	shouldReloadAll: function() {
		return true;
	},
	shouldReloadRecord: function() {
		return true;
	}
});