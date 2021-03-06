import path from 'path';
import { mergeResolvers, mergeTypeDefs, loadFilesSync } from 'graphql-tools';

export const types: any = loadFilesSync(path.join(__dirname, '/**/*.gql'));
export const resolvePath : any = loadFilesSync(path.join(__dirname,
                                                         '/**/Resolver.ts/'));

export const typeDefs: any = mergeTypeDefs(types);
export const resolvers: any = mergeResolvers(resolvePath);
