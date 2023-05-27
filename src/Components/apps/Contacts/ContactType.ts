


export interface createUserDataType {
    email: string;
    name: string;
    surname: string;
    mobile: string
}

export interface ContactusersType {
    id: number,
    avatar: string,
    name: string,
    surname: string,
    email: string,
    age: string,
    mobile: string,
} 

interface ContactReducerDataType {
    users: [] | ContactusersType[],
    data: []
}
export interface ContactReducerType {
    ContactReducer: ContactReducerDataType
}

export interface userCallbackUser {id?:number | undefined ,name?:string,surname?:string,age?:string,mobile?:string,avatar?:string}
export interface UserUpdateType{name: string, surname: string, email: string, mobile: string}

