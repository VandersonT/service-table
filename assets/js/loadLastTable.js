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

        if(reportInfo['unforeseenValue'])
            document.querySelector('.unforeseen').value = reportInfo['unforeseenValue'];

        if(reportInfo['explanationValue'])
            document.querySelector('.explanation').value = reportInfo['explanationValue'];
        
        


        /*Delete all table data*/
        let table = document.querySelector('table');

        // Obtém todas as linhas da tabela, exceto a primeira
        var rows = table.getElementsByTagName("tr");
        for (var i = rows.length - 1; i > 0; i--) {
            // Remove cada linha
            table.deleteRow(i);
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