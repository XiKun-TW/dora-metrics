import express from 'express';
import open from 'open';
import path from 'path';
import boardExecutor from '../api/boardExecutor';
import pipelineExecutor from '../api/pipelineExecutor';
import sourceControlExecutor from '../api/sourceControlExecutor';

const app = express();
const port = 3001;
const sourcePath = process.env.MODE === 'DEV' ? '/../../build/web' : '/../web';

app.get('/api/supported-pipeline', (req, res) => {
    res.json(Object.keys(pipelineExecutor));
})

app.get('/api/supported-board', (req, res) => {
    res.json(Object.keys(boardExecutor));
})

app.get('/api/supported-source-control', (req, res) => {
    res.json(Object.keys(sourceControlExecutor));
})

app.use('/',express.static(path.join(__dirname, sourcePath)));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

if(process.env.MODE === 'PRODUCTION') {
    open(`http://localhost:${port}`);
}
