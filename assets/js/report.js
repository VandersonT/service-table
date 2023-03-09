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


    /*send today's date for Results*/
    /*
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // adiciona um zero à esquerda do mês se ele tiver apenas um dígito
    const day = currentDate.getDate().toString().padStart(2, "0"); // adiciona um zero à esquerda do dia se ele tiver apenas um dígito

    const dataFormatada = `${day}/${month}/${year}`;
    document.querySelector('.currentDate span').innerHTML = dataFormatada;
    */

    /*send komb's price for Results*/
    let KombPriceFormated = brasilianRealFormat(parseFloat(reportInfo['kombPayment']));
    document.querySelector('.kombPrice span').innerHTML = KombPriceFormated+'/Dia';


    /*send unexpected's value for Results if exists*/
    let unexpectedValue = brasilianRealFormat(reportInfo['unforeseenValue']);
    document.querySelector('.unexpectedValue span').innerHTML = unexpectedValue;
    

/*----------------------------------------*/
/*           Generate Report              */
/*----------------------------------------*/
const imprimir = () => {
    window.print();
}