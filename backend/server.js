import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todos.js';

const app = express();

//use middleware
app.use(express.json());
app.use(cors());

//any request by /todos will be handled by todoRoutes
app.use('/todos', todoRoutes);

//Declare port and start server
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});