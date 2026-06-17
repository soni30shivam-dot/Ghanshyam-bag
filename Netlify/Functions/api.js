import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'ghanshyam_super_secret_key_2025';

// Mock DB 
let users = [];
const initAdmin = async () => {
  const hashedPassword = await bcrypt.hash('Ghanshyam@2025', 10);
  users.push({ id: 1, username: 'admin', password: hashedPassword });
};
initAdmin();

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get('/products', (req, res) => {
  res.json({ success: true, data: [] });
});

export const handler = serverless(app);
