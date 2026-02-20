function downloadpdf(){
    const element=document.querySelector('#pdf-content');
    //console.log("element");

    const otp={
        margin: [ 10, 5, 15, 5], //[arriba, izquierda, abajo, serecha]en nm
        filename: 'Hoja_De_Vida_Cristian_Felipe_Giraldo_Galeano.pdf',
        Image: { type: 'jpeg', quality:1},
        html2canvas:{
            scale: 2,
            useCORS: true,
            scrollY:0
        },
        jsPDF:{
            unit:'mm',
            format:'a4',
            orientation: 'portrait' //orientación vertical
        }

    }
    html2pdf().set(otp).from(element).save();
}