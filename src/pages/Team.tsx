import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
    import { Badge } from "@/components/ui/badge";
    import PageHeader from "@/components/PageHeader";

    const mockTeamMembers = [
      { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com", status: "online" },
      { id: 2, name: "Bob Smith", role: "Operator", email: "bob@example.com", status: "offline" },
      { id: 3, name: "Carol Williams", role: "Engineer", email: "carol@example.com", status: "online" },
      { id: 4, name: "David Brown", role: "Operator", email: "david@example.com", status: "online" },
      { id: 5, name: "Eve Davis", role: "Admin", email: "eve@example.com", status: "offline" },
    ];

    const Team = () => {
      return (
        <div>
          <PageHeader title="Team" description="Manage team members and permissions" />

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockTeamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`https://avatar.vercel.sh/${member.email}`} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{member.role}</Badge>
                      <Badge variant={member.status === 'online' ? 'default' : 'secondary'}>
                        {member.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      );
    };

    export default Team;
