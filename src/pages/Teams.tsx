import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Users, Plus, X } from "lucide-react";

interface Team {
  id: number;
  name: string;
  project: string;
  mentor: string;
  members: string[];
}

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, name: "Team Alpha", project: "AI Medical Diagnosis", mentor: "Dr. Smith", members: ["Alice", "Bob", "Charlie"] },
    { id: 2, name: "Team Beta", project: "Blockchain Voting", mentor: "Prof. Johnson", members: ["David", "Eve", "Frank"] },
    { id: 3, name: "Team Gamma", project: "IoT Smart Home", mentor: "Dr. Williams", members: ["Grace", "Henry", "Ivy"] },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: "", project: "", members: "" });

  const handleAddTeam = () => {
    if (newTeam.name && newTeam.project) {
      const team: Team = {
        id: teams.length + 1,
        name: newTeam.name,
        project: newTeam.project,
        mentor: "Auto-assigned",
        members: newTeam.members.split(",").map(m => m.trim()).filter(m => m),
      };
      setTeams([...teams, team]);
      setNewTeam({ name: "", project: "", members: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary neon-glow-cyan">Teams</h1>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan"
          >
            {showForm ? <X className="mr-2" size={18} /> : <Plus className="mr-2" size={18} />}
            {showForm ? "Cancel" : "Add Team"}
          </Button>
        </div>

        {showForm && (
          <div className="glass-card p-6 mb-8 animate-slide-up">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Add New Team</h2>
            <div className="space-y-4">
              <Input
                placeholder="Team Name"
                value={newTeam.name}
                onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                className="bg-background/50 border-white/20"
              />
              <Input
                placeholder="Project Title"
                value={newTeam.project}
                onChange={(e) => setNewTeam({ ...newTeam, project: e.target.value })}
                className="bg-background/50 border-white/20"
              />
              <Input
                placeholder="Members (comma-separated)"
                value={newTeam.members}
                onChange={(e) => setNewTeam({ ...newTeam, members: e.target.value })}
                className="bg-background/50 border-white/20"
              />
              <Button onClick={handleAddTeam} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 neon-border-magenta">
                Submit
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <Card
              key={team.id}
              className="glass-card glass-hover p-6 animate-slide-up border border-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{team.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Project:</span>
                  <p className="text-foreground font-medium">{team.project}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Mentor:</span>
                  <p className="text-secondary">{team.mentor}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Members:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {team.members.map((member, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-full bg-white/10 text-xs">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
