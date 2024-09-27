const express = require('express');
const mongooes = require('mongoose');
const Faculty = require('./Faculty');
const app = express();
const bodyParser = require('body-parser');


mongooes.connect('mongodb+srv://Neel:Neel_1110@cluster0.te9jcwk.mongodb.net/FacultyDB')
.then(
    console.log("connected to atlas")
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',async (req,res)=>{
    const faculties  = await Faculty.find();
    res.send(faculties);
});

app.get('/:id',async (req,res)=>{
    const faculty = await Faculty.findOne({FacultyID:req.params.id});
    res.send(faculty);
});

app.delete('/:id',async (req,res)=>{
    const faculty = await Faculty.deleteOne({FacultyID:req.params.id});
    res.send(faculty);
});

app.post('/',async (req,res)=>{
    
    const faculty = new Faculty({
        FacultyID: req.body.FacultyID,
        FacultyName: req.body.FacultyName,
        FacultyInitial: req.body.FacultyInitial
    });

    await faculty.save();
    res.send(faculty);
});

app.put('/:id',async (req,res)=>{
    const faculty = await Faculty.findOne({FacultyID:req.params.id});

    faculty.FacultyName = req.body.FacultyName;
    faculty.FacultyInitial = req.body.FacultyInitial;

    await faculty.save();
    res.send(faculty);
});


app.listen(8000,()=>{
    console.log("server started on http://localhost:8000/");
});