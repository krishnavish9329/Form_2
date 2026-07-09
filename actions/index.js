"use server";
import dbConnection from "@/lib/db";
import Contact from "@/modal/Contact";
import { revalidatePath } from "next/cache";

export default async function createContact(formData)
{
    try{
        await dbConnection();
        const name = formData.get("name") 
        const email = formData.get("email") 
        const subject = formData.get("subject") 
        const message = formData.get("message") 

        console.log(name, email, subject , message )
        if ( !name || !email || !subject || !message)
        {
            return{
                success:false,
                error:"All fields are required"
            }
        }
        const contact = await Contact.create({
            name:name.trim(),
            email:email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim()
        })

        return {
            success :true,
            message:"Message send Successfully",
            contactId: contact._id.toString() 
        }
    }
    catch(error)
    {
        console.log(error)
        return{
            success:false,
            error:"Something error "
        }

    }
}

export  async function getContacts()
{
    try{
        await dbConnection();
        const contacts = await Contact.find().sort({createdAt:-1}).lean()
        return contacts.map((contact)=>({
            ...contact,
            _id:contact._id.toString(),
            createdAt:contact.createdAt,
            updatedAt:contact.updatedAt
        }))
    }
    catch(error)
    {
        console.log("Error on get contact",error)
        return[]
    }
    
}

export const updateContsct = async (contactId, status)=>{
    try{
        console.log("status",status)
        await dbConnection();
        const contact = await Contact.findByIdAndUpdate(contactId, {status})
        revalidatePath("/contacts ");
        return {
            success:true,
            message:"Contact status updated successfully"
        };
    }
    catch(error)
    {
        console.log("Error on update contact",error)
        return {
            success:false,
            message:"Error updating contact status"
        };
    }
}