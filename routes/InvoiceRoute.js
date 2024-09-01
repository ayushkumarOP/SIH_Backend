const express = require('express');
const router = express.Router();
const Invoice = require('../models/InvoiceModel');

// router.post('/add', async (req, res) => {
//   try {
//     const invoice = new Invoice(req.body);
//     await invoice.save();
//     res.status(201).json(invoice);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
router.post('/add', async (req, res) => {
    try {
      const invoiceData = req.body;
      const totalAmount = invoiceData.items.reduce((acc, item) => acc + (item.amount * item.cost), 0);
  
      const newInvoice = new Invoice({
        ...invoiceData,
        amount: totalAmount, 
      });
  
      await newInvoice.save();
      res.status(201).json(newInvoice);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  
router.get('/all', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;