'use strict';

$(function() // expression qui fait qu'on attend que tout le DOM soit chargé avant de lancer instructions contenues dedans
{
	// event listener pour click sur élément ayant id searchExe (bouton envoyer)
	$('#searchExe').on('click', onClickSearch);

	// event listener pour click sur li dans élément ayant id searchExe (bouton envoyer) une fois tout le document chargé
	$(document).on('click', '#resultsList li', onClickDescription);

});// fin de l'expression qui fait qu'on attend que tout le DOM soit chargé avant de lancer instructions contenus dedans
