const getImageUrl = (name) => {
	return new URL(`/src/assets/movie/${name}`, import.meta.url).href;
};

const data = [
	{
		id: 1,
		imgUrl: getImageUrl('scary_movie.jpg'),
		title: '노량',
		year: 2023,
		category: '액션',
		like: 0,
	},
	{
		id: 2,
		imgUrl: getImageUrl('aquaman_and_the_lost_kingdom.webp'),
		title: '아쿠아맨과 로스트 킹덤',
		year: 2023,
		category: '액션, 판타지, 어드벤처',
		like: 0,
	},
	{
		id: 3,
		imgUrl: getImageUrl('garfield_movie.jpg'),
		title: '데드폴 & 엑스맨',
		year: 2024,
		category: '액션',
		like: 0,
	},
	{
		id: 4,
		imgUrl: getImageUrl('Shrek.webp'),
		title: '3일의 휴가',
		year: 2024,
		category: '판타지, 드라마',
		like: 0,
	},
];

// export { data };
export default data;
