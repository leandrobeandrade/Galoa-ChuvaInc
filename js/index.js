$(function() {

	  /* =================== */
	 /* TROCA DIA DA SEMANA */
   	/* =================== */

   	let datas = $('#dias');

   	let data = new Date(); 
   	let diaM = data.getDate();				// dia do mes
   	let diaS = []; 						// dia da semana
	diaS[0] = 'DOMINGO';
	diaS[1] = 'SEGUNDA';
	diaS[2] = 'TERÇA';
	diaS[3] = 'QUARTA';
	diaS[4] = 'QUINTA';
	diaS[5] = 'SEXTA';
	diaS[6] = 'SÁBADO';

	let dia = diaS[data.getDay()];
	let contUm = 0;
	let contDois = 0;

	datas.text(dia +' '+ diaM);

	$('#dif').on('click', () => {
		contUm++;
		contDois++;
		let diaS_MaisUm = diaS[data.getDay() + contUm];
		let diaM_MaisUm = diaM + contDois;

		if(diaS_MaisUm == undefined) diaS_MaisUm = 'DOMINGO ';
		if(diaS_MaisUm == 'DOMINGO ') contUm = -4;

		if(diaM_MaisUm > 30) {
			diaM_MaisUm = '1'; 
			contDois = -7;
		}

		datas.text(diaS_MaisUm +' '+ diaM_MaisUm);
	})

	  /* ======================= */
	 /* SETA DIA ATUAL NA GRADE */
    	/* ======================= */

  	let horas = data.getHours();
  	let texto = $('.grade:contains('+horas+')');
  	let cor = texto.css('background-color');
  	let aga1 = texto.text().substr(0,2);
  	let hora = aga1.replace('h','');
  
  	if(1) {

  		texto.addClass('escolhido');

  		$('.detalhes').css('background-color',cor);
  		$('.detalhes h1').text(aga1+'h');
  		$('.vertical1').text(hora);
  	}
    
      	  /* ======================== */
	 /* TROCA COR E DIA DETALHES */
        /* ======================== */

   	let txtVert = $('.vertical1');
   	let h1 = $('.detalhes h1');
   	let fundoDetalhes = $('.detalhes');  

	$('.grade').not('#branco').on('click', function() {
		let cor = $(this).css('background-color');
		let texto = $(this).text();
		let horas = texto.replace('h','');

    	$('.grade').removeClass('escolhido');
    	$(this).addClass('escolhido');

    	txtVert.text(horas);
    	h1.text(texto);
    	fundoDetalhes.css('background-color', cor);
  	})

	  /* ====== */
	 /* MODAIS */
        /* ====== */

	let modalDetalhe = $('#modal-detalhe');
	let modalDesenho = $('#modal-desenho');
	
	modalDetalhe.hide();
	modalDesenho.hide();

	$('.detalhe').on('click', function() {
		modalDetalhe.show();
		$('.nav,header,.conteudo,.desenhos,.rodape').addClass('fundo-opaco');

		if($(this).prop('class').includes('show')) {
			$('#img-detalhe').prop('src','imgs/show.png');
			$('.personagem-texto-detalhe h1').text('APENAS UM SHOW');
			$('.personagem-texto-detalhe h3').text('REGULAR SHOW');
		} else {
			$('#img-detalhe').prop('src','imgs/clarencio.png');
			$('.personagem-texto-detalhe h1').text('CLARÊNCIO O OTIMISTA');
			$('.personagem-texto-detalhe h3').text('CLARENCE');
		}
	});

	$('.desenho img').on('click', function() {
		let desenho = $(this).prop('src');

		modalDesenho.show();
		$('.nav,header,.conteudo,.desenhos,.rodape').addClass('fundo-opaco');

		if(desenho.includes('imgs/img-1.png')) {
			$('#img-desenho').prop('src','imgs/img-1.png');
			$('.personagem-texto-desenho h1').text('IRMÃO DO JOREL');
			$('.personagem-texto-desenho h3').text('JOREL\'S BROTHER');
		} else if(desenho.includes('imgs/img-2.png')) {
			$('#img-desenho').prop('src','imgs/img-2.png');
			$('.personagem-texto-desenho h1').text('DARWIN');
			$('.personagem-texto-desenho h3').text('DARWIN');
		} else if(desenho.includes('imgs/img-3.png')) {
			$('#img-desenho').prop('src','imgs/img-3.png');
			$('.personagem-texto-desenho h1').text('JAKE');
			$('.personagem-texto-desenho h3').text('JAKE');
		} else if(desenho.includes('imgs/img-4.png')) {
			$('#img-desenho').prop('src','imgs/img-4.png');
			$('.personagem-texto-desenho h1').text('STEVEN QUARTZ');
			$('.personagem-texto-desenho h3').text('STEVEN QUARTZ');
		} else {
			$('#img-desenho').prop('src','imgs/img-5.png');
			$('.personagem-texto-desenho h1').text('RIGBY');
			$('.personagem-texto-desenho h3').text('RIGBY');
		}
	});

	$('.fechar').on('click', function() {
		modalDetalhe.hide();
		modalDesenho.hide();
		$('.nav,header,.conteudo,.desenhos,.rodape').removeClass('fundo-opaco');
	}) 

    	$(document).on('mouseup', function(e) {

	    if (!modalDetalhe.is(e.target) && modalDetalhe.has(e.target).length === 0 || 
	    	!modalDesenho.is(e.target) && modalDesenho.has(e.target).length === 0) {
	        	modalDetalhe.hide();
	        	modalDesenho.hide();
	        	$('.nav,header,.conteudo,.desenhos,.rodape').removeClass('fundo-opaco');
	    }
	});

})
