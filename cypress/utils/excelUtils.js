const XLSX = require('xlsx');
const path = require('path');


function saveGetResponseToExcel({responseData, url})
{
  const filePath =
        path.join(__dirname, '../fixtures/operations.xlsx');

    const workbook =
        XLSX.readFile(filePath);

    const worksheet =
        workbook.Sheets['Sheet1'];

    worksheet['D2'] = {
        t: 's',
        v: JSON.stringify(responseData, null, 2)
    };

     worksheet['B2'] = {
      t :'s',
        v: url
    };

    XLSX.writeFile(workbook, filePath);

    return null;
}

function postResponseToExcel({responseData, requestBody, url})
{
  const filePath = path.join(__dirname, '../fixtures/operations.xlsx');
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets['Sheet1'];
  worksheet['B3'] = { 
    t: 's',
    v: url
  }
   worksheet['C3'] = { 
    t: 's',
    v: JSON.stringify(requestBody,null,2)
  }
   worksheet['D3'] = { 
    t: 's',
    v: JSON.stringify(responseData, null, 2)
  };

  XLSX.writeFile(workbook, filePath);

    return null;

}

function putResponseToExcel({responseData, requestBody, url})
{
  const filePath = path.join(__dirname, '../fixtures/operations.xlsx');
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets['Sheet1'];
  worksheet['B4'] = { 
    t: 's',
    v: url
  }
   worksheet['C4'] = { 
    t: 's',
    v: JSON.stringify(requestBody,null,2)
  }
   worksheet['D4'] = { 
    t: 's',
    v: JSON.stringify(responseData, null, 2)
  };

  XLSX.writeFile(workbook, filePath);

    return null;

}

function deleteResponseToExcel({responseData, url})
{
  const filePath = path.join(__dirname, '../fixtures/operations.xlsx');
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets['Sheet1'];
  worksheet['B5'] = { 
    t: 's',
    v: url
  }

   worksheet['D5'] = { 
    t: 's',
    v: JSON.stringify(responseData, null, 2)
  };

  XLSX.writeFile(workbook, filePath);

    return null;

}
const filePath = path.join(__dirname, 'operations.xlsx');

const rows = [
  ['Operation', 'URL', 'REQUEST', 'RESPONSE'],
  ['GET', '', '', ''],
  ['POST', '', '', ''],
  ['PUT', '', '', ''],
  ['DELETE', '', '', '']
];

const worksheet = XLSX.utils.aoa_to_sheet(rows);

worksheet['!cols'] = [
  { wch: 16 },
  { wch: 24 },
  { wch: 24 },
  { wch: 24 }
];

const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
XLSX.writeFile(workbook, filePath);

console.log(`Created Excel file: ${filePath}`);

module.exports = {
    saveGetResponseToExcel,
    postResponseToExcel,
    putResponseToExcel,
    deleteResponseToExcel
};