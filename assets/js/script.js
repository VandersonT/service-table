/*---------------------------*/
/*     Global-Variables    - */
/*---------------------------*/
let url = "http://127.0.0.1:5500";




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

    /*Get pre saved data*/
    let reportInfo = localStorage.getItem('reportinfo');
    reportInfo = JSON.parse(reportInfo);

    /*Get-Workers-Payment-Value*/
    let workersPayment_input = document.querySelector('.workersPayment');

    if(reportInfo['workersPayment'])
        workersPayment_input.value = reportInfo['workersPayment'];

    workersPayment_input.addEventListener('input', () => {
        let workersPayment = workersPayment_input.value;
    });


    /*Get-Contractor-Name*/
    let contractorName_input = document.querySelector('.contractorName');

    contractorName_input.addEventListener('input', () => {
        let contractorName = contractorName_input.value;
    });

    /*Get-Final-Date*/
    let getFinalDate_input = document.querySelector('.finalDate');

    getFinalDate_input.addEventListener('input', () => {
        let getFinalDate = getFinalDate_input.value;
    });

    /*Get-Initial-Date*/
    let getInitialDate_input = document.querySelector('.initialDate');

    getInitialDate_input.addEventListener('input', () => {
        let getinitialDate = getInitialDate_input.value;
    });
    
    /*Get-Komb-Payment-Value*/
    let kombPayment_input = document.querySelector('.kombPayment');

    if(reportInfo['kombPayment'])
        kombPayment_input.value = reportInfo['kombPayment'];

    kombPayment_input.addEventListener('input', () => {
        let kombPayment = kombPayment_input.value;
    });

    /*Get-unforeseen-Value*/
    let unforeseen_input = document.querySelector('.unforeseen');

    unforeseen_input.addEventListener('input', () => {
        let unforeseenValue = unforeseen_input.value;
    });

    /*Get-explanation-of-unexpected-value*/
    let explanation_input = document.querySelector('.explanation');

    explanation_input.addEventListener('input', () => {
        let explanationValue = explanation_input.value;
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
        
        

        /*---------------GET-DATA-FOR-REPORT------------*/
            let tableData = getTableData();

            let reportinfo = {
                workersPayment,
                kombPayment,
                unforeseenValue,
                explanationValue,
                contractorName,
                getFinalDate
            }
        /*----------------------------------------------*/
        


        /*------------save-data-and-redirect---------------*/
        localStorage.setItem('tableData', JSON.stringify(tableData));
        localStorage.setItem('reportinfo', JSON.stringify(reportinfo));

        window.location.href = url+"/report.html";
        /*----------------------------------------------*/
        
    }

})