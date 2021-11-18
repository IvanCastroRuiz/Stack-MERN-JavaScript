const userCtrl = {}


const User = require('../models/User');


userCtrl.getUsers = async (req, res) => {
    const users = await User.find();  // Metodo que consulta todos los datos que hay en una coleccion
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created')

};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id); // Elimina por ID
    res.json({message: 'User deleted'})
}

module.exports = userCtrl;