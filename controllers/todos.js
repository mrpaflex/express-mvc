const TodoModel = require('../models/Todo')
//note models  name must always start with a capital letter

module.exports = {
    getTodosMethod: async (request, response)=>{
        try {
            const datafind = await TodoModel.find()
            const clientStatus = await TodoModel.countDocuments({status: false})
            response.render('todos.ejs', {todos: datafind, left: clientStatus })
        } catch (error) {
            console.log(error)
        }
    },

    createTodoMethod: async (request, response)=> {
        try {
            await TodoModel.create({
                firstName: request.body.firstName,
                email: request.body.email,
                gender: request.body.gender,
                status: false
            })
            console.log(`added to database`)
            response.redirect('/todos')
        } catch (error) {
           console.log(error)
        }
    }
}
