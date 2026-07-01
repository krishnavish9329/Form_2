"use server";
import dbConnection from "@/lib/db";
import Contact from "@/modal/Contact";

export async function createContact(formData)
{
    try{
        await dbConnection();
        const name = formData.get("name") 
        const email = formData.get("email") 
        const subject = formData.get("subjet") 
        const message = formData.get("message") 

        if ( !name || !email || !subject || !message)
        {
            return{
                success:false,
                error:"All fields are required"
            }
        }
        const contact = await Contact 
    }
    catch(error)
    {

    }
}