module.exports = {
    new: (req, res) => {

        res.send('this is our comment/new using get request')
    },
    show: (req, res) => {

        res.send('this is our comment/show using get request')
    },
    create: (req, res) => {

        res.send('this is our comment using post request')
    },
    edit: (req, res) => {

        res.send('this is our comment using get request')
        
    },
    update: (req, res) => {

        res.send('this is our comment using put request')
    },
    destroy: (req, res) => {

        res.send('this is our comment using delete request')
    },
}