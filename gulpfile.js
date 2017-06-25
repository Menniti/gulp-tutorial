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


// -------------------------------------------

var imagemin = require('gulp-imagemin');
// o modulo changed verifica a pasta de de source e destino e avalia se alguma imagem precisa ser otimizada
var changed = require('gulp-changed');

// nome da task - 'jpg'
gulp.task('jpg', function(){
	// definindo as pastar de arquivos a serem processados 
	gulp.src('./assets/img/**/*.jpg')
		// faz a verificacao se alguma imagem deverá ser otimizada
		.pipe(changed('./dist/img'))
		// estamos passando o parametro progressive:true para otimizacao do jpg
		.pipe(imagemin({
			progressive: true
		}))
		// informamos ao gulp, em qual local deverá ser colocado as imagens otimizadas
		.pipe(gulp.dest('/.dist/img'));
});

// livereload - browser Sync e Watch Task

// opcao 1 - criando um host
// Host pelo Browser Sync
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
	browserSync.init('./dist/css/**', {
		server: {
			baseDir: './',
			index: './views/index.html'
		}
	});
});

// opcao2 - passando um proxy de connecctividade com backend
// proxy pelo Browser Sync
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
	browserSync.init('./dist/css/**', {
		proxy: 'localhost:3333'
	});
});

// obs: é possível passar vãrios locais como trigger
// argumento abaixo das pastas dentro de um array
// browserSync.init(['./dist/css/**', './views/*.html'], {

// ----------------------------------------

// watch task - observar as mudcanas dos arquivos

// qualquer mudanca no arquivo, irá ser caputrada pela task 'watch'.
// colocamos o 'compass' e 'browser-sync' em um array, para garantir que 
// ambos sejam executados antes de começar o watch em si.
// podendo ser executadas quantas tarefas você quiser


gulp.task('watch', ['compass', 'browser-sync'], function(){
	gulp.watch('./assets/sass/*.scss', ['sass']);
});