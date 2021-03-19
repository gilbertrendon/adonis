'use strict'

//const Post = require('../../Models/Post')

const Post = use('App/Models/Post')

/**@typedef {import('@adonisjs/framework/src/Request'} */
/**@typedef {import('@adonisjs/framework/src/Response'} */
//http://localhost:3333/post/List?_start=1&limit=1

class PostController {
    async index({request, response}){
        const {_limit, _start} = request.all()
        const posts= await Post
        .query()
        .with('user')
        .with('categories')
        .paginate(_start, _limit)
        
        return posts.rows
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
