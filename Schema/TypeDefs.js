import {gql} from "apollo-server-express";
const typeDefs = gql`
    type User{
        id:ID
        name:String
        age:Int
        married:Boolean
    }
    input userInput{
        id:ID
        name:String
        age:Int
        married:Boolean
    }
    #QUERIES
    type Query{
        getAllUsers:[User]
    }
    #MUTATIONS
    type Mutation{
        createUser(id:ID,name:String,age:Int,married:Boolean):User!
        updateUser(id:ID,name:String,age:Int,married:Boolean):User!
        deleteUser(id:ID!):String
    }

`;

export default typeDefs;