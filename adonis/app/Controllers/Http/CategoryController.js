'use strict'

const Category = use('App/Models/Category')
/** @typedef {import('@adonisjs/framework/src/Request')} */
/** @typedef {import('@adonisjs/framework/src/Response')} */


class CategoryController {
    async index({request, response}){
            return Category.all()
        }
 

    async store ({request, response}){
        try{
            const data = request.only(['name','slug','status'])
            const categoryExists = await Category.findBy('slug',data.slug);
            
            if(categoryExists){
                return response 
                    .status(400)
                    .send({message: {e: 'Category already registered!'}})
            }
            const category = await Category.create(data)
            return category

        } catch(e){
            return response
                .status(e.status)
                .send(e)
        }
    }

}
module.exports = CategoryController
