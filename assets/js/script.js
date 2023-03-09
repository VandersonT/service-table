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




