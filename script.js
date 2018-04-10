/*var element = React.createElement('div', {}, 'Hello world');
ReactDOM.render(element, document.getElementById('app'));

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmow'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h2', {}, 'Harry Potter'),
				React.createElement('p', {}, 'Film o czarodzieju')
			),
			React.createElement('li', {},
				React.createElement('h2', {}, 'Król Lew'),
				React.createElement('p', {}, 'Film opowiadający historia króla Sawanny')
			)
		)
	);
*/


var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'https://www.altpress.com/images/uploads/news/voldemort_harry_potter.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu Sawanny',
    img: 'https://moviesroom.pl/images/0.Aktualizacja_listopad/Dude%C5%82e/kr%C3%B3l_lew.jpg'
  },
  {
  	id: 3,
    title: 'Kac Vegas',
    desc: 'Film o 4 takich co poszli w miasto',
    img: 'http://hojeemdia.com.br/polopoly_fs/1.80236.1457587610!/image/image.jpg_gen/derivatives/landscape_300/image.jpg'
    
  }
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
		);
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));