/*----------------------------------------*/
/*            Global Functions            */
/*----------------------------------------*/
function brasilianRealFormat(valor) {
    const opcoes = { style: "currency", currency: "BRL" };
    return valor.toLocaleString("pt-BR", opcoes);
}

function removeRealFormat(price){
    return parseFloat(price.replace('R$', '').replace('.', '').replace(',', '.'));
}




/*----------------------------------------*/
/*            Get Report Info             */
/*----------------------------------------*/
    let tableData = localStorage.getItem('tableData');
    let reportInfo = localStorage.getItem('reportinfo');

    tableData = JSON.parse(tableData);
    reportInfo = JSON.parse(reportInfo);

    if(!tableData || !reportInfo)
        alert('Desculpe, mas ocorreu um erro ao pegar os dados do relatório');
    



/*----------------------------------------*/
/*          Send Data To Report           */
/*----------------------------------------*/


    /*Send header info*/
    document.querySelector('.contractorBox span').innerHTML = reportInfo['contractorName'];

    let initialDate = new Date(`${reportInfo['initialDate']}T00:00:00-03:00`);
    document.querySelector('.initialDate span').innerHTML = initialDate.toLocaleDateString('pt-BR',{timeZone: 'America/Sao_Paulo'});
    
    let finalDate = new Date(`${reportInfo['finalDate']}T00:00:00-03:00`);
    document.querySelector('.finalDate span').innerHTML = finalDate.toLocaleDateString('pt-BR',{timeZone: 'America/Sao_Paulo'});

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

    /*Send Total Salary of Workers for table*/
    let totalSalaryOfWorkers = 0;

    for(let i = 0; i < tableData[0].length; i++)
        totalSalaryOfWorkers += removeRealFormat(tableData[2][i]);
    
    document.querySelector('.total span').innerHTML = totalSalaryOfWorkers.toFixed(2);

    /*send Days Worked for Results*/
    let daysWorked = tableData[0].length;
    document.querySelector('.daysWorked span').innerHTML = daysWorked+' Dias';


    /*send komb's price for Results*/
    let KombPrice = parseFloat(reportInfo['kombPayment'] * daysWorked);
    document.querySelector('.kombPrice span').innerHTML = brasilianRealFormat(KombPrice)+'/Dia';


    /*send unexpected's value for Results if exists*/
    let unexpectedValue = reportInfo['unforeseenValue'];
    document.querySelector('.unexpectedValue span').innerHTML = brasilianRealFormat(unexpectedValue);

    /*Set total of column 1*/
    let total = KombPrice + unexpectedValue;
    document.querySelector('.totalColumn1 span').innerHTML = brasilianRealFormat(total);

    /*defines pay per day of workers*/
    let workersPayment = parseFloat(reportInfo['workersPayment']);
    document.querySelector('.workersPayment span').innerHTML = brasilianRealFormat(workersPayment);

    /*Set total of column 2*/
    let total2 = workersPayment*daysWorked;
    document.querySelector('.total2 span').innerHTML = brasilianRealFormat(total2);

    /*Final Price*/
    document.querySelector('.realTotal span').innerHTML = brasilianRealFormat(total+total2);

/*----------------------------------------*/
/*           Generate Report              */
/*----------------------------------------*/
const imprimir = () => {
    document.querySelector('.buttonBox').style.display = 'none';
    window.print();
    document.querySelector('.buttonBox').style.display = 'flex';
}