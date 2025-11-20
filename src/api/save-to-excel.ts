import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

const EXCEL_FILE_PATH = path.join(process.cwd(), 'public', 'inquiries.xlsx');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { company, name, phone, email, requirement, message } = req.body;

  try {
    let workbook: ExcelJS.Workbook;
    let worksheet: ExcelJS.Worksheet;

    // Check if file exists
    if (fs.existsSync(EXCEL_FILE_PATH)) {
      workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(EXCEL_FILE_PATH);
      worksheet = workbook.worksheets[0];
    } else {
      workbook = new ExcelJS.Workbook();
      worksheet = workbook.addWorksheet('Inquiries');

      // Add header row
      worksheet.columns = [
        { header: 'Date', key: 'date', width: 15 },
        { header: 'Company/Society', key: 'company', width: 20 },
        { header: 'Contact Person', key: 'name', width: 20 },
        { header: 'Phone', key: 'phone', width: 15 },
        { header: 'Email', key: 'email', width: 25 },
        { header: 'Service Required', key: 'requirement', width: 25 },
        { header: 'Message', key: 'message', width: 40 }
      ];

      // Style header row
      worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF000000' } };
    }

    // Add new row
    worksheet.addRow({
      date: new Date().toLocaleDateString(),
      company,
      name,
      phone,
      email,
      requirement,
      message
    });

    // Save file
    await workbook.xlsx.writeFile(EXCEL_FILE_PATH);
    res.status(200).json({ success: true, message: 'Data saved to Excel' });
  } catch (error) {
    console.error('Excel error:', error);
    res.status(500).json({ error: 'Failed to save to Excel' });
  }
}
