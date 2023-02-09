export default interface ICallResponse<T> {
    errors:[]
    isSuccess:boolean
    status:number
    successMessage:string
    validationErrors: []
    value:T
    valueType:any
}