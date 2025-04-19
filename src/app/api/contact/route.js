import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();
    const { from_name, reply_to, title, message } = body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: reply_to,
            to: process.env.EMAIL_USER,
            subject: title || `New message from ${from_name}`,
            Text:`
            Name: ${from_name}
            Email: ${reply_to}
            
            Message:
            ${message}
                `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({
            success: true,
            message: 'Message sent successfully!'
        }), {status:200,});
    } catch (error) {
        console.error('Nodemailer error:', error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to send message.'
        }), {status: 500,});
    }
}