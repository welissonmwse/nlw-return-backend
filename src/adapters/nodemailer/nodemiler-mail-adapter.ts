import { MailAdapter, SendMailData } from "../mail-adapter";

import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "cc7dc23c9b5e38",
    pass: "65737b0d141cbb"
  }
});


export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Welisson Silveira <welissonmwse@gmail.com>',
      subject,
      html: body,
      
    })
  }
}