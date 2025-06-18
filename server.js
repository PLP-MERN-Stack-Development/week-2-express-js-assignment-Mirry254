console.log("Step 1: Requiring express...");
const express = require('express');

console.log("Step 2: Creating app...");
const app = express();

console.log("Step 3: Loading dotenv...");
require('dotenv').config();

console.log("Step 4: Requiring middleware...");
const logger = require('./middleware/logger');

console.log("Step 5: Requiring routes...");
const productRoutes = require('./routes/productRoutes');

console.log("Step 6: Using express.json()...");
app.use(express.json());

console.log("Step 7: Using logger middleware...");
app.use(logger);

console.log("Step 8: Using product routes...");
app.use('/api/products', productRoutes);

console.log("Step 9: Starting server...");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
