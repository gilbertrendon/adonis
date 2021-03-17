'use strict'

const { test, trait } = use('Test/Suite')('Post')
const Post = use('App/Models/Post')

trait('Test/ApiClient')

test('It should create a post', async ({ client }) => {
  await Post.create({
    title: 'Post 1',
    slug: 'Post-1',
    content: 'content',
    status: 1
  })

  const response = await client
    .get('/post/list')
    .end()

    response.assertStatus(200)
    response.assertJSONSubset([{
      title: 'Post 1',
      slug: 'Post-1',
     
    }])
})
