const documents = [
   
 { name: "NODES N BUDS FSSAI LICENSE", url: "pdfs/NODES N BUDS FSSAI LICENSE.pdf" },
     { name: "Tea Board Licence", url: "pdfs/Tea Board Licence.pdf" },
     { name: "Udyam Certificate NODES N BUDS", url: "pdfs/Udyam Certificate NODES N BUDS.pdf" },
     { name: "Import-export", url: "pdfs/Import-export.pdf" }
 
];

const documentTable = document.getElementById('documentTable').getElementsByTagName('tbody')[0];

documents.forEach(doc => {
    const row = documentTable.insertRow();
    const nameCell = row.insertCell(0);
    const documentCell = row.insertCell(1);

    nameCell.textContent = doc.name;
    documentCell.innerHTML = `<a href="${doc.url}" target="_blank">View Document</a>`;
});
