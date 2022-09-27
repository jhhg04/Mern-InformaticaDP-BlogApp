import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './database/db.js';
import blogRoutes from './routes/routes.js';

const app = express();

dotenv.config({ path: './.env' });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

try {
  await db.authenticate();
  console.log('Conexion Exitosa a la DB');
} catch (error) {
  console.error(`Error de conxion ${error}`);
}

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
