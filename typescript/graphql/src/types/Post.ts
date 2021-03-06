import { objectType } from 'nexus'

export const Post = objectType({
    name: 'Post',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.title()
        t.model.content()
        t.model.published()
        t.model.author()
    },
})