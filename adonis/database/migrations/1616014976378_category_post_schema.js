'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryPostSchema extends Schema {
  up () {
    this.create('category_posts', (table) => {
      table.increments()
      table.integer('category_id', 25).unsigned().references('id').inTable('categories')
      table.integer('post_id', 25).unsigned().references('id').inTable('posts')
      table.timestamps()
    })
  }

  down () {
    this.drop('category_posts')
  }
}

module.exports = CategoryPostSchema
