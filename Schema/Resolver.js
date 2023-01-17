import { Contacts} from './DBconnection.js'; 
export const resolvers = {
    Query: {
        getAllUsers() {
            return Contacts.find().catch(err=>console.log('err'))
        },
    },
    Mutation: {
        createUser(parent, args) {
            const newContacts = new Contacts({
                id:args._id,
                name: args.name,
                age: args.age,
                married:args.married
            });
            newContacts.id = newContacts._id;

            return new Promise((resolve,reject)=>{
                newContacts.save((err)=>{
                    if (err) reject (err)
                    else resolve(newContacts)
                })
            })
        },
        updateUser(parent,args){
            return new Promise((resolve,reject)=>{
                Contacts.findOneAndUpdate({_id:args.id},args,{new:true},(err,contact)=>{
                    if (err) reject (err)
                    else resolve(contact)
                })
            })
        },
        deleteUser(parent,{id}){
               return new Promise((resolve,object)=>{
                Contacts.remove({_id:id},(err)=>{
                    if(err)reject (err)
                    else resolve('successfully deleted!')
                })
               })
        },
    }
};

export default resolvers;