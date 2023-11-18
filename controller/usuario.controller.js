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

// find
const find = (req,res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map( function(valor){
        if(valor.id == id){
            found = true;
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({messege:"Não foi encontrado!"});
    }

}


// findAll
const findAllUsuarios = (req,res) => {
    res.send(usuarios);
}


// create
const createUsuario = (req,res) => {
    const usuario = req.body;
    
    if(Object.keys(usuario).length === 0){
        return res.status(400).send({messege:"O corpo da mensagem está vazio!"});
    }

// Validação de atributos
    if(!usuario.id){
        return res.status(400).send({messege:"O campo 'id' não foi encontrado!"});
    }

    if(!usuario.nome){
        return res.status(400).send({messege:"O campo 'nome' não foi encontrado!"});
    }

    if(!usuario.sobrenome){
        return res.status(400).send({messege:"O campo 'sobrenome' não foi encontrado!"});
    }

    if(!usuario.idade){
        return res.status(400).send({messege:"O campo 'idade' não foi encontrado!"});
    }

    if(!usuario.email){
        return res.status(400).send({messege:"O campo 'email' não foi encontrado!"});
    }

    if(!usuario.senha){
        return res.status(400).send({messege:"O campo 'senha' não foi encontrado!"});
    }


    usuarios.push(usuario);
    res.status(201).send(usuarios);
}

// update
const updateUsuario = (req,res) => {
    const id = req.params.id;
    const usuario = req.body;
    let found = false;

    if(Object.keys(usuario).length === 0){
        return res.status(400).send({messege:"O corpo da mensagem está vazio!"});
    }

// Validação de atributos
    if(!usuario.id){
        return res.status(400).send({messege:"O campo 'id' não foi encontrado!"});
    }

    if(!usuario.nome){
        return res.status(400).send({messege:"O campo 'nome' não foi encontrado!"});
    }

    if(!usuario.sobrenome){
        return res.status(400).send({messege:"O campo 'sobrenome' não foi encontrado!"});
    }

    if(!usuario.idade){
        return res.status(400).send({messege:"O campo 'idade' não foi encontrado!"});
    }

    if(!usuario.email){
        return res.status(400).send({messege:"O campo 'email' não foi encontrado!"});
    }

    if(!usuario.senha){
        return res.status(400).send({messege:"O campo 'senha' não foi encontrado!"});
    }

    usuarios.map( function(valor, index){
        if(valor.id == id){
            found = true;
            usuarios[index] = usuario;
            return res.send(usuarios[index]);
        }
    });

    if(!found){
        res.status(404).send({messege:"Não foi encontrado!"});
    }
}

// delete
const deleteUsuario = (req,res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map( function(valor, index){
        if(valor.id == id){
            found = true;
            usuarios.splice(index,1);
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({messege:"Não foi encontrado!"});
    }
}


module.exports = {
    find,
    findAllUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}