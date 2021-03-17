'use strict'

const { test, trait } = use('Test/Suite')('Category')
const Category = use('App/Models/Category')

trait('Test/ApiClient')

test('It should create a category', async ({ client }) => {
  await Category.create({
    name: 'Category 1',
    slug: 'Category-1',
    //status: '1'
  })

  const response = await client
    .get('/category/list')
    .end()

    response.assertStatus(200)
    response.assertJSONSubset([{
      name: 'Category 1',
      slug: 'Category-1',
      //status: '1'
    }])
})
