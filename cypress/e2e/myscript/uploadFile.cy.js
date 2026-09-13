import fileupload from '../../pages/fileUpload';

describe ('File Upload',() =>{

    const f = new fileupload();
 
    it('Navigate to the file upload page',() => {
           cy.visit('https://practice-automation.com/file-upload/');

        cy.get(f.chooseFile).selectFile(f.path+ '2mb.pdf', {force:true} );
        cy.get(f.uploadButton).click();
        cy.get('.wpcf7-not-valid-tip').then(($el) =>
        {
            if($el.is(':visible'))
                {
                    expect($el.text()).to.contain('Uploaded file is too big.');
                    cy.get(f.chooseFile).selectFile(f.path+ 'image0.jpeg', {force:true} );
                      cy.get(f.uploadButton).click();
                }
                else
                {
                    cy.log('File uploaded successfully');
                }
        })


    })
})