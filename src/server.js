require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('../src/config/db');

// Routes
const authRoutes = require('../src/routes/authRoutes');
const patientRoutes = require('../src/routes/patientRoutes');
const doctorRoutes = require('../src/routes/doctorRoutes');
const appointmentRoutes = require('../src/routes/appointmentRoutes');
const prescriptionRoutes = require('../src/routes/prescriptionRoutes');

// Middleware
const errorMiddleware = require('../src/middlewares/errorMiddleware');

const app = express();

// 🔗 Connect to MongoDB
connectDB();

// 🌐 Global Middlewares
app.use(cors());
app.use(express.json());

// 🧪 Health Check Route (Good Practice)
app.get('/', (req, res) => {
    res.send('Hospital Management API is running...');
});

// 📌 API Routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/prescriptions', prescriptionRoutes);

// ❌ 404 Handler (Optional but Recommended)
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// ⚠️ Global Error Handler (Must be last)
app.use(errorMiddleware);

// 🚀 Start Server
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
// bf17c9f5c2b8abe764c70108dcb99349e2269477fd7c31cc274f4d1cc8595e72

