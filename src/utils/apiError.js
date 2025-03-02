class Apierror extends Error {
    constructor( 
        statusCode,
        message="Something went is wron",
        errors=[],
        stack=" "
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.sucesss=false;
        this.error=errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
    }
    export {Apierror}
