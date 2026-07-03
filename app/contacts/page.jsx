import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactList from "@/component/contact-List";

const ContactsPage = () => {
  return (
    <main className="min-h-screen py-8 px-4">
    <div className=" container mx-auto max-w-4xl">
     <div>
        <Link href="/">
        <Button 
        veriant={"outline"} 
        size="sm"
        className={"mp-4 bg-transparent rounded-sm hover:rounded-lg text-black-500 border-blue-500 hover:bg-black hover:text-white transition-colors duration-300 "}
        >Back to Form</Button>
        </Link>
     </div>
     <ContactList />
    </div>
    </main>
  );
};

export default ContactsPage;
