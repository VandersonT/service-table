/*---------------------------*/
/*     Global-Variables    - */
/*---------------------------*/
let url = "http://127.0.0.1:5500";




/*---------------------------*/
/*     Global-Functions    - */
/*---------------------------*/

    /*--------------GET-TABLE-DATA--------------*/
        /*Get all fields from the table and return the result*/
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
    /*------------------------------------------*/



    /*-----------------BRASILIAN-REAL---------------*/
        /*Convert float to brasilian real R$*/
        function brasilianRealFormat(valor) {
            const opcoes = { style: "currency", currency: "BRL" };
            return valor.toLocaleString("pt-BR", opcoes);
        }
    /*------------------------------------------*/



    /*---------------WHATCH-TABLE---------------*/
        /*Watch all the lines of the table to calculate the price automatically*/
        function setWorkersFieldToWatch(){
            let tableLines = document.querySelectorAll('table tr');
            let workersPayment = document.querySelector('.workersPayment').value;

            for(let i = 1; i < tableLines.length; i++){
                let workersField = tableLines[i].querySelectorAll('td')[1];
                
                workersField.addEventListener('keyup', function(){
                    calculatePrice();
                });
            }
        }
        setWorkersFieldToWatch();
    /*------------------------------------------*/

    

    /*---------------CALCULATE-PRICE------------*/
        function calculatePrice(){
            let workersPayment = document.querySelector('.workersPayment').value;

            if(!workersPayment) workersPayment = 0;

            let tablePrices = document.querySelectorAll('table tr');

            for(let i = 1; i < tablePrices.length; i++){
                let priceField = tablePrices[i].querySelectorAll('td')[2];
                let workersField = tablePrices[i].querySelectorAll('td')[1].innerText;

                priceField.innerHTML = brasilianRealFormat(parseFloat(workersField) * parseFloat(workersPayment));
            }
        };
    /*------------------------------------------*/







/*-------------------------------*/
/*   Unexpected-Events-Toggle    */
/*-------------------------------*/
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


    


/*---------------------------------*/
/*      Add New Row in Table       */
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

    /*orders to watch all the lines of the table to calculate the price automatically*/
    setWorkersFieldToWatch();
})







/*---------------------------------*/
/*        Delete Table Line        */
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

    /*orders to watch all the lines of the table to calculate the price automatically*/
    setWorkersFieldToWatch();
});







/*---------------------------------*/
/*         Generate Table          */
/*---------------------------------*/
let generateButton = document.querySelector('.generateButton');

generateButton.addEventListener('click', () => {

    if(confirm('Você quer gerar o relatório agora?')){

        /*---------------GET-DATA-FOR-REPORT------------*/
            let tableData = getTableData();
            let workersPayment = document.querySelector('.workersPayment').value;
            let kombPayment = document.querySelector('.kombPayment').value;
            let unforeseenValue = document.querySelector('.unforeseen').value;
            let explanationValue = document.querySelector('.explanation').value;
            let contractorName = document.querySelector('.contractorName').value;
            let finalDate = document.querySelector('.finalDate').value;
            let initialDate = document.querySelector('.initialDate').value;

            let reportinfo = {
                workersPayment,
                kombPayment,
                unforeseenValue,
                explanationValue,
                contractorName,
                finalDate,
                initialDate
            }
        /*----------------------------------------------*/
        


        /*------------save-data-and-redirect---------------*/
            localStorage.setItem('tableData', JSON.stringify(tableData));
            localStorage.setItem('reportinfo', JSON.stringify(reportinfo));

            window.location.href = url+"/report.html";
        /*----------------------------------------------*/
        
    }

})