const techten = require('express');
const axios = require('axios');

const app = techten();
const port = 4000;

app.get('/', (req,res) => {
    res.send('Welcome to Ghana International School')
})

app.get('/sendStudentData', async(req, res) => {
    try{
        const response = await axios.post('http://192.168.43.121:3000/storeStudentData', {
            fullName: 'Ezra Asiedu',
            password: 'test@1234',
            indexNo: 'ABC123G42024X'
        },);
        res.status(200).json(response.data);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Error fetching student data'});
    } 
})
 
app.listen(port, () => {
    console.log(`Client server running on port ${port}`);
});   