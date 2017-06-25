// estamos chamando o gulp da pasta node_modules e adicionando ele a uma variável gulp
var gulp = require('gulp');

gulp.task('teste', function(){
	console.log('funciono');
});

// alterantiva que também funcionaria
//	require('gulp').task('teste', function(){
//		console.log('funciono!')
//	});

// para testar basta digitar gulp test no console
// -----------------------------------------------

// definindo o nome da tarefa - 'sass'
gulp.task('sass', function(){
	// gulp.src define onde está a sua base de arquivos sass
	gulp.src('./assets/sass/*.scss')
		// estamos passando o parametro compass:true, para o pipe sass.
		.pipe(sass({compass:true}))
		// mostra algum erro que aconteceu na hora de escreever o sass
		.on('error', function(err) {
			console.log(err.message);
		})
		// local onde deverá ser salvo o arquivo final.
		.pipe(gulp.dest('./dist/css'));
});