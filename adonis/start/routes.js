'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')

//Route.on('/').render('welcome')
Route.get('/', () => {
    return {hello: 'Hello World!!'}
})

//Test Route with database connection
Route.get('/database', async() => {
    return await Database.table('users').select('*')
})

Route.get('category/list', 'CategoryController.index')

//Post
Route.post('category/create', 'CategoryController.store')
Route.post('create/posts', 'PostController.store')


Route.get('post/List', 'PostController.index')     
Route.get('post/count', 'PostController.count')
