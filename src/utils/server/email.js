import { getConfig } from 'utils/config';
import nodemailer from 'nodemailer';

const { emailSender } = getConfig();

export const sendEmail = async ({
  from,
  to,
  subject,
  text,
  html
}) => {
  const transporter = nodemailer.createTransport({
    host: emailSender.host,
    port: 465,
    secure: true,
    auth: {
      user: emailSender.user, // generated ethereal user
      pass: emailSender.password, // generated ethereal password
    },
  });

  return await transporter.sendMail({
    from: emailSender.user,
    replyTo: from,
    to,
    subject,
    text,
    html
  });
};
