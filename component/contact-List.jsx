import { getContacts } from "@/actions";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@base-ui/react";
const ContactList = async () => {
    const contacts = await getContacts();

    return (
        <div>
            <div>
                <h2>Contact Messages</h2>
                <Badge veriant="secondary " >{contacts.length} Messages</Badge>

            </div>
            {
                contacts.length === 0 ?
                    (
                        <Card>
                            <CardContent>
                                <Mail />
                                <h3>No messagae yet</h3>
                            </CardContent>
                        </Card>
                    ) :
                    (
                        contacts.map((contact) => (
                            <Card key="contact._id">
                                <CardHeader>
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