import { idArg, makeSchema, objectType, stringArg } from 'nexus'


export const Query = objectType({
    name: 'Query',
    definition(t) {
        t.crud.post({
            alias: 'post',
        })

        t.crud.user({
            alias: 'feedSingleUser'
        })

        t.list.field('feed', {
            type: 'Post',
            resolve: (_parent, _args, ctx) => {
                return ctx.photon.posts.findMany({
                    where: { published: true },
                })
            },
        })

        t.list.field('filterPosts', {
            type: 'Post',
            args: {
                searchString: stringArg({ nullable: true }),
            },
            resolve: (_, { searchString }, ctx) => {
                return ctx.photon.posts.findMany({
                    where: {
                        OR: [
                            { title: { contains: searchString } },
                            { content: { contains: searchString } },
                        ],
                    },
                })
            },
        })
    },
})