'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title', 255).notNullable()
      table.string('slug', 255).notNullable()
      table.text('content').notNullable()
      table.integer('user_id', 25).unsigned().references('id').inTable('categories')
      table.boolean('status')
      table.datetime('publish_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
