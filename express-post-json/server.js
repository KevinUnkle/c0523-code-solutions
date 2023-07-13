import express from 'express';

const app = express();

let nextId = 4;
const grades = {
  1: {
    id: 1,
    name: 'Time Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  3: {
    id: 3,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.status(400).send('Incomplete Request');
    return;
  }
  const id = nextId++;
  newGrade.id = id;
  grades[id] = newGrade;
  res.status(201).json(newGrade);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
