import { getContacts } from "@/actions";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@base-ui/react";
const ContactList = async () => {
    const contacts = await getContacts();

    return (
        <div className="space-y-6  mt-3">
            <div className=" flex item-center justify-between  ">
                <h2 className=" text-2xl font-bold">Contact Messages</h2>
                <Badge veriant="secondary"  className="bg-white border-black text-black h-7 rounded-2">{contacts.length} Messages</Badge>
            </div>
            {
                contacts.length === 0 ?
                    (
                        <Card >
                            <CardContent className="flex flex-col item-center justify-center py-12">
                                <Mail className="h-12 w-12 text-muted-foreground mb-4"/>
                                <h3 className="text-lg font-semibold mb-2">No messagae yet</h3>
                            </CardContent>
                        </Card>
                    ) :
                    (
                        contacts.map((contact) => (
                            <Card key="contact._id" className="rounded-sm border-1" >
                                <CardHeader className=" flex flex-col justify-between ">
                                    <div>
                                        <div>
                                            <CardTitle>
                                                {contact.subject}
                                            </CardTitle>
                                            <p>
                                                From: {contact.name} ({contact.mail})
                                            </p>
                                        </div>
                                        <Badge veriant={contact.status === 'new' ? 'default' : 'secondary'}>
                                            {contact.status}
                                        </Badge>

                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        {contact.message}
                                    </p>
                                    <div>
                                        <p>
                                            {new Date(contact.createdAt).toLocaleString()}
                                        </p>
                                        <div>
                                            {
                                                contact.status === 'new' && (
                                                    <from >
                                                        <Button veriant="outline" size='sm' type="submit" >
                                                            Mark as read
                                                        </Button>
                                                    </from>
                                                )
                                            }
                                            {
                                                contact.status === 'read' && (
                                                    <from >
                                                        <Button veriant="outline" size='sm' type="submit" >
                                                            Mark as Replied
                                                        </Button>
                                                    </from>
                                                )
                                            }

                                        </div>

                                    </div>
                                </CardContent>
                            </Card>
                        ))

                    )
            }

        </div>
    );
};

export default ContactList;