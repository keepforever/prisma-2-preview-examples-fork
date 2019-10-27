import { nexusPrismaPlugin } from 'nexus-prisma'
import { idArg, makeSchema, objectType, stringArg } from 'nexus'
import * as types from './types'

export const schema = makeSchema({
  types,
  plugins: [nexusPrismaPlugin()],
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
