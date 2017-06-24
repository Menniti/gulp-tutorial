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