const usuarios = [
    {
        id: 1,
        nome: "Cristiano Ronaldo",
        sobrenome: "dos Santos Aveiro",
        idade: 38
    },
    {
        id: 2,
        nome: "Neymar",
        sobrenome: "da Silva Santos",
        idade: 31
    },
    {
        id: 3,
        nome: "Lionel",
        sobrenome: "Andrés Messi Cuccittini",
        idade: 35
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
    if(req.body.nome == null){
        return res.send({messege:"Campo não está preenchido"});
    }
    usuarios.push(usuario);
    res.send(usuarios);
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario
}