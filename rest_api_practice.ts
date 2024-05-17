/* Prompt: Design a RESTful API for a simple note-taking application. 
The API should support the following operations:

Create a note
Read a note
Update a note
Delete a note

const express = require('express');
const app = express();

app.use(express.json());

let notesArr: string[] = [];

app.post(('/notes/create'), (req, res) => {
    try {   
        notesArr.push(req.val);
        res.send(400, "Success!");
    }
    catch {
        res.send(404);
    }
});


app.get(('/notes/read'), (req, res) => {
    try {   
        console.log(notesArr[req.idx]);
        res.send(400, "Success!");
    }
    catch {
        res.send(404);
    }
});


app.put(('/notes/update'), (req, res) => {
    try {   
        notesArr[req.idx] = req.val;
        res.send(400, "Success!");
    }
    catch {
        res.send(404);
    }
});


app.delete(('/notes/delete'), (req, res) => {
    try {   
        delete notesArr[req.idx];
        res.send(400, "Success!");
    }
    catch {
        res.send(404);
    }
});

const PORT: Number = 3000;
app.listen(PORT, () => {
    console.log("server now running on port ", PORT);
});

*/

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

let notesArr: string[] = [];

// Create a note
app.post('/notes/create', (req, res) => {
    try {
        notesArr.push(req.body.val);
        res.status(201).send("Success!");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

// Read a note
app.get('/notes/read', (req, res) => {
    try {
        const idx = parseInt(req.query.idx as string);
        if (isNaN(idx) || idx < 0 || idx >= notesArr.length) {
            return res.status(404).send("Note not found");
        }
        res.status(200).send(notesArr[idx]);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

// Update a note
app.put('/notes/update', (req, res) => {
    try {
        const idx = parseInt(req.body.idx);
        if (isNaN(idx) || idx < 0 || idx >= notesArr.length) {
            return res.status(404).send("Note not found");
        }
        notesArr[idx] = req.body.val;
        res.status(200).send("Success!");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

// Delete a note
app.delete('/notes/delete', (req, res) => {
    try {
        const idx = parseInt(req.body.idx);
        if (isNaN(idx) || idx < 0 || idx >= notesArr.length) {
            return res.status(404).send("Note not found");
        }
        notesArr.splice(idx, 1);
        res.status(200).send("Success!");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

