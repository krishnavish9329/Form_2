"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState("");
    async function onSubmit(formdata) {
        setIsSubmitted(true)

    }
    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-left">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
                <form id="contact-form" action={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlfor="name">Name</Label>
                            <input id="name" name="name" type="text" required disabled={isSubmitted}  className="border-1 border-gray-400 w-full rounded-sm h-[69%] pl-1 hover:border-gray-600 facus:border-gray-600"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlfor="email">Email</Label>
                            <input id="email" name="email" type="text" required disabled={isSubmitted}  className="border-1 border-gray-400 w-full rounded-sm h-[69%] pl-1 hover:border-gray-600 facus:border-gray-600" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <Label htmlfor="subject">Subject</Label>
                            <input id="subject" name="subject" type="text" required disabled={isSubmitted} className=" h-[69%] w-full border-1 border-gray-400 rounded-sm pl-1 hover:border-gray-600 facus:border-gray-600 "/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlfor="messgae">Messgae</Label>
                            <Textarea id="messgae" name="messgae" type="text" disabled={isSubmitted}  className="min-h-[120px] hover:border-gray-600 facus:border-gray-600" />
                        </div>
                        <Button type="submit" disabled={isSubmitted} className="w-full h-10 ">
                            {isSubmitted ? "Sending..." : "Send Message"}
                        </Button>

                    </div>

                </form>
            </CardContent>
        </Card>
    )
}
export default ContactForm;