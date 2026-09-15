const XLSX = require('xlsx');
const path = require('path');

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
