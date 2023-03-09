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
const imprimir = () => {
    window.print();
}


/*----------------------------------------*/
/*           Generate Report              */
/*----------------------------------------*/