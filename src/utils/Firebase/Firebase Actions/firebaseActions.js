import firebase from '../config';

let database = firebase.database()

export const getAllCollection=(name)=>{
    database.ref(name).get().then((snapshot)=>{
        console.log(snapshot.val())
        return snapshot.val()
        
    } 
    )
}