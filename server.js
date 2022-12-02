const mongoose = require('mongoose');




const db = 'mongodb+srv://Sh:qwerty123@cluster0.fevemtf.mongodb.net/?retryWrites=true&w=majority'


mongoose
    .connect(db)
    .then((res) => console.log('connect'))
    .catch((err) => console.log('error connecting'));