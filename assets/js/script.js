/*---------------------------*/
/*     Global-Functions    - */
/*---------------------------*/
    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }




/*---------------------------------*/
/*   Get-Input-Values-If-Saved     */
/*---------------------------------*/
let workersPayment = 0;
let kombPayment = 0;
let unforeseenValue = 0;
let explanationValue = '';




/*---------------------------*/
/*    Unexpected-Events      */
/*---------------------------*/
let checkbox = document.querySelector('.someUnexpectedEvents');
let sectionHidden = document.querySelector('.hiddenSection');
let showSection = false;

checkbox.addEventListener('click', function(){
    showSection = !showSection;
    if(showSection)
        sectionHidden.style.display = 'flex';
    else
        sectionHidden.style.display = 'none';
});




/*---------------------------*/
/*     Get-Input-Values      */
/*---------------------------*/

    /*Get-Workers-Payment-Value*/
    let workersPayment_input = document.querySelector('.workersPayment');

    workersPayment_input.addEventListener('input', () => {
        workersPayment = workersPayment_input.value;
    });

    /*Get-Komb-Payment-Value*/
    let kombPayment_input = document.querySelector('.kombPayment');

    kombPayment_input.addEventListener('input', () => {
        kombPayment = kombPayment_input.value;
    });

    /*Get-unforeseen-Value*/
    let unforeseen_input = document.querySelector('.unforeseen');

    unforeseen_input.addEventListener('input', () => {
        unforeseenValue = unforeseen_input.value;
    });

    /*Get-explanation-of-unexpected-value*/
    let explanation_input = document.querySelector('.explanation');

    explanation_input.addEventListener('input', () => {
        explanationValue = explanation_input.value;
    });




/*---------------------------------*/
/*        Add Row in Table         */
/*---------------------------------*/
let newLineButton = document.querySelector('.newLineButton');

newLineButton.addEventListener('click', () => {
    let table = document.querySelector('table');

    var novaLinha = document.createElement("tr");
    
    var celulaDay = novaLinha.insertCell(0);
    var celulaWorkers = novaLinha.insertCell(1);
    var celulaPrice = novaLinha.insertCell(2);
    

    celulaDay.setAttribute("contenteditable", true);
    celulaWorkers.setAttribute("contenteditable", true);
    celulaPrice.setAttribute("contenteditable", true);

    celulaDay.innerHTML = "dd/mm";
    celulaWorkers.innerHTML = "0";
    celulaPrice.innerHTML = "R$0,00";
    table.appendChild(novaLinha);
})




/*---------------------------------*/
/*           Delete Line           */
/*---------------------------------*/
let deleteLineButton = document.querySelector('.deleteLineButton');
deleteLineButton.addEventListener('click', () => {
    
    let line = prompt('Qual linha você quer deletar?');
    
    if(line){
        let table = document.querySelector('table');

        if(line > table.rows.length || line < 0){
            alert('Número de linha invalido');
            return;
        }

        table.deleteRow(line);
    }
    
});




/*---------------------------------*/
/*         Generate Table          */
/*---------------------------------*/
let generateButton = document.querySelector('.generateButton');

generateButton.addEventListener('click', () => {

    if(confirm('Você quer gerar o relatório agora?')){

        /*Salva os dados dos inputs no localStorage*/
        
        /*Pega os valores da tabela e salva no localstorage e manda pra outra página*/

        console.log('gerando...');
    }

})