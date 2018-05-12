// Written by John R. Thurlby May 2018

// Data structure that will store the superheroes data
var heroesArray = [
	{
		name: 'DeadPool', 
		photo: 'https://m.media-amazon.com/images/S/aplus-media/vc/0ffc3cff-5aba-4444-9ee9-7f696f889701._SL300__.png',
		abilities: 'Deadpool is an extraordinary hand-to-hand combatant and is skilled in multiple unarmed combat techniques. He is a master of assassination techniques, is an excellent marksman, and is highly skilled with bladed weapons (frequently carrying two swords strapped to his back). He is fluent in Japanese, German, Spanish, amongst other languages.',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'Iron Man',
		photo: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fb/Marvel-avengers-infinity-war-iron-man-sixth-scale-figure-hot-toys-silo-903421.png/revision/latest?cb=20180318221316',
		abilities: 'Tony has a genius level intellect that allows him to invent a wide range of sophisticated devices, specializing in advanced weapons and armor. He possesses a keen business mind.',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
	{
		name: 'Captain America',
		photo: 'https://img.cinemablend.com/cb/a/5/9/f/0/d/a59f0d975a8c9df01044c1dcd89d1cb3f0937bdf087818f9596769eb856a5527.jpg',
		abilities: 'Captain America had mastered the martial arts of American-style boxing and judo, and had combined these disciplines with his own unique hand-to-hand style of combat. He had also shown skill and knowledge of a number of other martial arts. He engaged in a daily regimen of rigorous exercise (including aerobics, weight lifting, gymnastics, and simulated combat) to keep himself in peak condition. Captain America was one of the finest human combatants Earth had ever known.',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
	},
	{
		name: 'Ant Man',
		photo: 'http://media.comicbook.com/2015/12/ant-man-growing-163739.jpg',
		abilities: 'He has advanced training and expertise in electronics, having earned an electronics technician certificate, plus additional advanced electronics training he received while in prison. At times, Lang even made his own modifications to the Ant-Man equipment, such as installing the Pym gas dispenser in his helmet rather than leaving it on his belt, or mounting an electric disruptor into his helmet for offensive purposes.',
		scores: [
			'5',
			'1',
			'2',
			'1',
			'3',
			'4',
			'1',
			'3',
			'3',
			'4'
		]
	},
	{
		name: 'Black Panther',
		photo: 'https://cdn.vox-cdn.com/thumbor/kEhoOSWc0loZ1bVZb83-S1ZR_3A=/0x0:691x1024/1200x800/filters:focal(291x457:401x567)/cdn.vox-cdn.com/uploads/chorus_image/image/55171519/BlackPantherPoster.0.jpg',
		abilities: "T'Challa is a brilliant tactician, strategist, scientist, tracker and a master of all forms of unarmed combat whose unique hybrid fighting style incorporates acrobatics and aspects of animal mimicry. T'Challa being a royal descendent of a warrior race is also a master of armed combat, able to use a variety of weapons but prefers unarmed combat. He is a master planner who always thinks several steps ahead and will go to extreme measures to achieve his goals and protect the kingdom of Wakanda.",
		scores: [
			'1',
			'1',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'1'
		]
	},
	{
		name: 'SpiderMan',
		photo: 'https://pmcvariety.files.wordpress.com/2017/03/spider-man-homecoming.png?w=1000&h=563&crop=1',
		abilities: 'Peter is an accomplished scientist, inventor and photographer.',
		scores: [
			'1',
			'1',
			'5',
			'1',
			'3',
			'2',
			'5',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'AquaMan',
		photo: 'https://www.dailydot.com/wp-content/uploads/2018/03/aquaman-1024x512.jpg',
		abilities: "Aquaman has an advanced strategic sense and had natural leadership qualities, having led Atlantis and it's army multiple times, as well as the Justice League and the Others. He has also come up with effective attack strategies against JL opponents such as Darkseid and the Cheetah and even managed to end an alien invasion on his own when he tricked the Hunters/Gatherers in revealing their plans to the entire world, after uniting all of Earth's underwater Kingdoms.",
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
	},
	{
		name: 'SuperMan',
		photo: 'https://cdn.movieweb.com/img.news.tops/NEHlYyLvWH6wLN_2_b/Justice-League-Movie-Superman-Comic-Book-Adaption.jpg',
		abilities: 'Superman possesses the powers of flight, superhuman strength, x-ray vision, heat vision, cold breath, super-speed, enhanced hearing, and nigh-invulnerability. While Superman is immensely strong both in terms of muscle power and ability to take physical punishment, he is not all-powerful.',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
	},
	{
		name: 'BatMan',
		photo: 'https://metvcdn.metv.com/6WTri-1443540141-47-show-940X370_0003_batman.png',
		abilities: 'Unlike most superheroes, Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will.',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'The Hulk',
		photo: 'https://cdn.vox-cdn.com/thumbor/wgMcgj6LStdjW-qlLkaHUBsdQzY=/0x0:2048x858/1200x800/filters:focal(834x251:1160x577)/cdn.vox-cdn.com/uploads/chorus_image/image/57442421/hulk_agnarok.0.jpg',
		abilities: "Dr. Bruce Banner is a genius in nuclear physics, possessing a mind so brilliant that it cannot be measured on any known intelligence test. When Banner is the Hulk, Banner's consciousness is buried within the Hulk's, and can influence the Hulk's behavior only to a very limited extent.",
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
	}
];

// export the heroes array for use by other modules
module.exports = heroesArray;