import { idArg, makeSchema, objectType, stringArg } from 'nexus'


export const Mutation = objectType({
    name: 'Mutation',
    definition(t) {
      t.crud.createOneUser({ alias: 'signupUser' })
      t.crud.deleteOnePost()
  
      t.field('createDraft', {
        type: 'Post',
        args: {
          title: stringArg({ nullable: false }),
          content: stringArg(),
          authorEmail: stringArg(),
        },
        resolve: (_, { title, content, authorEmail }, ctx) => {
          return ctx.photon.posts.create({
            data: {
              title,
              content,
              published: false,
              author: {
                connect: { email: authorEmail },
              },
            },
          })
        },
      })
  
      t.field('publish', {
        type: 'Post',
        nullable: true,
        args: {
          id: idArg(),
        },
        resolve: (_, { id }, ctx) => {
          return ctx.photon.posts.update({
            where: { id },
            data: { published: true },
          })
        },
      })
    },
  })