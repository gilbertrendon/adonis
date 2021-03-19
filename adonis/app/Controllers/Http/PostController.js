'use strict'

//const Post = require('../../Models/Post')

const Post = use('App/Models/Post')

/**@typedef {import('@adonisjs/framework/src/Request'} */
/**@typedef {import('@adonisjs/framework/src/Response'} */


class PostController {
    async index({request, response}){
        const posts= await Post
        .query()
        .with('user')
        .with('categories')
        .fetch()
        return response.json(posts )
    }

    async store ({request, response}){
        try{
            const data = request.only(['title','slug','content','published_at','user_id','status'])
            const postExists = await Post.findBy('slug',data.slug);
            
            if(postExists){ 
                return response 
                    .status(400)
                    .send({message: {e: 'Post already registered!'}})
            }
            const post = await Post.create(data)
            return post

        } catch(e){
            return response
                .status(e.status)
                .send(e)
        }
    }

    async count(){
        const posts = await Post
        .query()
        .where('status',true)
        .count('* as total')

       return posts[0]['total']
    }

}

module.exports = PostController
