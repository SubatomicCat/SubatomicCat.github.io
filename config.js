// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: '',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon',
	greetingEvening: 'Good evening',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '9837d335ebf777040da9563372f53b48', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-27.589',
	defaultLongitude: '-48.527',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'CasaOS',
			icon: 'cloud',
			link: 'http://192.168.0.202',
		},
		{
			id: '2',
			name: 'Rumble',
			icon: 'play-circle',
			link: 'https://rumble.com/GGreenwald/',
		},
		{
			id: '3',
			name: 'qBittorrent',
			icon: 'arrow-up-down',
			link: 'http://192.168.0.202/8080',
		},
		{
			id: '4',
			name: 'Nitter',
			icon: 'twitter',
			link: 'https://notabird.site/ggreenwald',
		},
		{
			id: '5',
			name: 'Last.fm',
			icon: 'list-music',
			link: 'https://www.last.fm/user/Arturo_Cardoni',
		},
		{
			id: '6',
			name: 'Freeleech',
			icon: 'arrow-big-down',
			link: 'https://www.torrentleech.org/torrents/browse/index/facets/tags%3AFREELEECH_added%3A%255BNOW%252FMINUTE-20MINUTES%2520TO%2520NOW%252FMINUTE%252B1MINUTE%255D',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'skull',
			id: '1',
			links: [
				{
					name: 'TPB',
					link: 'https://thepiratebay.org/index.html',
				},
				{
					name: 'YTS',
					link: 'https://yts.mx',
				},
				{
					name: 'Fmovies',
					link: 'https://fmovies.to/home',
				},
				{
					name: 'Libgen',
					link: 'https://libgen.is/',
				},
			],
		},
		{
			icon: 'archive',
			id: '2',
			links: [
				{
					name: 'Proton',
					link: 'https://account.proton.me/',
				},
				{
					name: 'Tutanota',
					link: 'https://mail.tutanota.com/login',
				},
				{
					name: 'Pixelfed',
					link: 'https://pixelfed.social/',
				},
				{
					name: 'Piped',
					link: 'https://piped.video',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
