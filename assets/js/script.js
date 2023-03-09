/*---------------------------*/
/*     Global-Functions    - */
/*---------------------------*/
    function getTableData(){

        let table = document.querySelector('table');
        let prices;
        let days;
        let workers;
        let tableData = [];
        
        /*Get days from table*/
        cells = table.querySelectorAll("td:nth-child(1)");
        days = [];

        cells.forEach(function(cell) {
            days.push(cell.innerText);
        });

        /*Get workers from table*/
        cells = table.querySelectorAll("td:nth-child(2)");
        workers = [];

        cells.forEach(function(cell) {
            workers.push(cell.innerText);
        });

        
        /*Get prices from table*/
        cells = table.querySelectorAll("td:nth-child(3)");
        prices = [];

        cells.forEach(function(cell) {
            prices.push(cell.innerText);
        });

        tableData.push(days, workers, prices);
        
        return tableData;
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


        /*------------------Save-Data-------------------*/

            //Salva os dados dos inputs no localStorage

        /*----------------------------------------------*/
        
        

        /*----------------GET-TABLE-DATA----------------*/
        
            let tableData = getTableData();

            console.log(tableData);

        /*----------------------------------------------*/


    }

})