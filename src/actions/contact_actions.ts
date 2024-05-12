"use server";
import { z } from 'zod';
import { db } from '../../prisma/db';


const ContactFormSchema = z.object({
    name: z.string(),
    email: z.string().email({ message: "Email must be valid" }),
    subject: z.string()
})

type ContactFormState = {
    errors: {
        name?: string[],
        email?: string[],
        subject?: string[],
        _form?: string[]
    }
}

export const saveEnquiry = async (formState: ContactFormState, formData: FormData): Promise<ContactFormState> => {
    const result = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    try {

        await db.contact.create({
            data: {
                name: result.data.name,
                email: result.data.email,
                subject: result.data.subject,
            }
        })

    } catch (error) {
        console.log(error);
        return {
            errors: {
                _form: ["Failed to send the message."]
            }
        }
    }

    console.log(result.data)

    return { errors: {} }
}