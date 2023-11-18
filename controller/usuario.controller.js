const usuarios = [
    {
        id: 0001,
        nome: "Cristiano Ronaldo",
        sobrenome: "dos Santos Aveiro",
        idade: 38,
        email: "cr7@gmail.com",
        senha: 072877
    },
    {
        id: 0002,
        nome: "Neymar",
        sobrenome: "da Silva Santos",
        idade: 31,
        email: "meninoney@outlook.com",
        senha: 520169
    },
    {
        id: 0003,
        nome: "Lionel",
        sobrenome: "Andrés Messi Cuccittini",
        idade: 35,
        email: "messi10@gmail.com",
        senha: 103054

    }
]

const find = (req,res) => {
    const id = req.params.id;
    res.send(usuarios[id]);
}

const findAllUsuarios = (req,res) => {
    res.send(usuarios);
}

const createUsuario = (req,res) => {
    const usuario = req.body;
    if(req.body.id == null){
        return res.send({messege:"Id não está preenchido"});
    }
    usuarios.push(usuario);
    res.send(usuarios);
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario
}