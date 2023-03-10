/*---------------------------------*/
/*         Load Last Table         */
/*---------------------------------*/
let loadLastTable = document.querySelector('.loadLastTable');

loadLastTable.addEventListener('click', function(){

    if(confirm('Você tem certeza que deseja carregar a ultima tabela?')){

        
        let tableData = localStorage.getItem('tableData');
        let reportInfo = localStorage.getItem('reportinfo');

        tableData = JSON.parse(tableData);
        reportInfo = JSON.parse(reportInfo);

        if(!tableData || !reportInfo){
            alert('Não foi possivel carregar a ultima tabela.');
            retun;
        }

        /*Send data to website*/
        document.querySelector('.contractorName').value = reportInfo['contractorName'];
        document.querySelector('.initialDate').value = reportInfo['initialDate'];
        document.querySelector('.finalDate').value = reportInfo['finalDate'];
        document.querySelector('.workersPayment').value = reportInfo['workersPayment'];
        document.querySelector('.kombPayment').value = reportInfo['kombPayment'];


        /*Delete all table data*/
        let table = document.querySelector('table');

        let rows = table.rows;

        while(rows.length > 0) {
        table.deleteRow(0);
        }

        /*Send table data for table*/
        for(let i = 0; i < tableData[0].length; i++){
            let table = document.querySelector('table');

            var novaLinha = document.createElement("tr");
            
            var celulaDay = novaLinha.insertCell(0);
            var celulaWorkers = novaLinha.insertCell(1);
            var celulaPrice = novaLinha.insertCell(2);
            

            celulaDay.setAttribute("contenteditable", true);
            celulaWorkers.setAttribute("contenteditable", true);
            celulaPrice.setAttribute("contenteditable", true);

            celulaDay.innerHTML = tableData[0][i];
            celulaWorkers.innerHTML = tableData[1][i];
            celulaPrice.innerHTML = tableData[2][i];
            table.appendChild(novaLinha);
        }

    }

});