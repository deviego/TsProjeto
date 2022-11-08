interface IMailTo{
    name:string,
    email:string

}
interface IMailmessage{
    subject:string,
    body: string,
    attachment?: string[]
}

interface IMessageDTO{
    to:IMailTo,
    message:IMailmessage
}

class EmailServices{
    sendEmail({to, message}: IMessageDTO){
        console.log(`email enviado para ${to.name}: ${message.subject}` )
    }
}

export default EmailServices