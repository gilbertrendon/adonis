'use strict'

//const Post = require('../../Models/Post')

const Post = use('App/Models/Post')

/**@typedef {import('@adonisjs/framework/src/Request'} */
/**@typedef {import('@adonisjs/framework/src/Response'} */


class PostController {
    async index({request, response}){
        return Post.all()
    }
}

module.exports = PostController
