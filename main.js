
//fazer leitura do documento html
$(document).ready(function() {
 //criar um eventeo para o botao do form 
 $('form').on('submit', function(e) {
    //tiro comportamento padrao
    e.preventDefault();
    //crio variavel do nome da nova tarefa que foi adicionado no campo e pego valor com .val()
    const nomeTarefaNova = $('#nome-tarefa').val();
    //crio o novo item da lista e adiciono o que foi escrito no input 
    const listItem = $('<li>').text(nomeTarefaNova);
    // pego id do ul e adiciono o item na lista "listItem"
    $('#lista').append(listItem);
    
   
    $('#lista').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
        $(this).css('background-color', 'white')
        $(this).css('color', 'red')

    });



 })   

})