(function(hello) {
	hello.init({
		spotify: {
			name: 'Spotify',
			base: 'https://api.spotify.com/v1/',
			oauth: {
				version: 2,
				auth: 'https://accounts.spotify.com/authorize',
				grant: 'https://accounts.spotify.com/api/token',
				response_type: 'code'
			},
			oauth_proxy: null,
			disable_proxy: true,
			scope: {
				email: 'user-read-email',
				follow: 'user-follow-modify'
			},

			refresh: false,
			login: function(p) {
				// Spotify takes in a space separated string of scopes instead of hello.js's comma separated string
				p.qs.scope = p.qs.scope.replace(/,/g, ' ');
			},

			logout: function(callback, options) {
				throw 'Spotify logout is not configured';
			}
		}
	});
})(hello);
