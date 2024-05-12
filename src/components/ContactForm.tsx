'use client'
import { Input, Textarea } from "@nextui-org/react"
import Container from "./Container"
import SubmitButton from "./SubmitButton"
import { useFormState } from "react-dom"
import { saveEnquiry } from "@/actions/contact_actions"



const ContactForm = () => {
    const [state, action] = useFormState(saveEnquiry, {
        errors: {}
    });
    return (
        <Container classnames="mx-auto w-full h-full">
            <div className="h-full w-full flex-col gap-8 justify-center flex">
                <h2 className="text-2xl md:text-4xl font">Enquiry me about work</h2>
                <form action={action} className="w-full grid md:grid-cols-2 gap-4 max-w-[600px]">
                    <Input
                        label="Name"
                        name="name"
                        labelPlacement="inside"
                        placeholder="Enter your name.."
                        variant="bordered"
                        className="col-span-1"
                        required
                        isInvalid={!!state.errors.name}
                        errorMessage={state.errors.name?.join(', ')}
                    />
                    <Input
                        name="email"
                        label="Email"
                        labelPlacement="inside"
                        placeholder="Enter your email.."
                        variant="bordered"
                        className="col-span-1"
                        required
                        isInvalid={!!state.errors.email}
                        errorMessage={state.errors.email?.join(', ')}
                    />
                    <Textarea
                        name="subject"
                        label="subject"
                        labelPlacement="inside"
                        placeholder="What is about.."
                        variant="bordered"
                        className="md:col-span-2 col-span-1"
                        required
                        isInvalid={!!state.errors.subject}
                        errorMessage={state.errors.subject?.join(', ')}
                    />
                    {state.errors._form && <p className="border border-danger-400 bg-danger-200 text-danger-600 rounded-md py-4 px-8">

                        {state.errors._form}

                    </p>}
                    <SubmitButton />

                </form>
            </div>
        </Container>
    )
}

export default ContactForm