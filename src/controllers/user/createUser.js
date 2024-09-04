import { create, validateUser, validateUserToCreate} from "../../models/userModel.js"

const createUser = async (req, res) => {


    const user = req.body

    const userValidated = validateUserToCreate(user)

    console.log(userValidated)

    if(userValidated?.error){
        return res.status(400).json({
            error: "erro ao criar usuario, verifique os dados",
            fieldErrors: userValidated.error.flatten().fieldErrors
        })
        
        console.log(userValidated.error)
    }

    const result = await create(userValidated.data)

    if (!result)
        return res.status(500).json({
            error: "erro ao criar usuario"
        })


    return res.json({
        success: "Usuário criado com sucesso",
        user: result
    })
}

export default createUser