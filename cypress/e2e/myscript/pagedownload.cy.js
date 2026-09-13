import pageDownload from '../../pages/pagedownload';

describe ('File download',() =>{

    const f = new pageDownload();
 
    it('Navigate to the file upload page',() => {
           cy.visit('https://practice-automation.com/file-download/');

        cy.get(f.downloadButton).click();

    })
})