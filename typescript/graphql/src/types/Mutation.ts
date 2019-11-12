import { idArg, makeSchema, objectType, stringArg, mutationType } from 'nexus'

// Only user id = ck2w9r0qs000054e2d9nump15 (11/12/2019)

/*
  Alternatively, you could have used objecttype, like so: 

export const Mutation = objectType({
  name: 'Mutation', 
  ...
})
*/
export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' })

    t.crud.createOneDeck({ alias: 'myCreateOneDeckAlias' })

    // t.field('createDraft', {
    //   type: 'Post',
    //   args: {
    //     title: stringArg({ nullable: false }),
    //     content: stringArg(),
    //     authorEmail: stringArg(),
    //   },
    //   resolve: (_, { title, content, authorEmail }, ctx) => {
    //     return ctx.photon.posts.create({
    //       data: {
    //         title,
    //         content,
    //         published: false,
    //         author: {
    //           connect: { email: authorEmail },
    //         },
    //       },
    //     })
    //   },
    // })

    // t.field('publish', {
    //   type: 'Post',
    //   nullable: true,
    //   args: {
    //     id: idArg(),
    //   },
    //   resolve: (_, { id }, ctx) => {
    //     return ctx.photon.posts.update({
    //       where: { id },
    //       data: { published: true },
    //     })
    //   },
    // })
  },
})