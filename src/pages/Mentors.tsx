import { Card } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  department: string;
  assignedTeams: string[];
}

const Mentors = () => {
  const mentors: Mentor[] = [
    { id: 1, name: "Dr. Smith", department: "Computer Science", assignedTeams: ["Team Alpha", "Team Delta"] },
    { id: 2, name: "Prof. Johnson", department: "Engineering", assignedTeams: ["Team Beta"] },
    { id: 3, name: "Dr. Williams", department: "AI & ML", assignedTeams: ["Team Gamma", "Team Epsilon"] },
    { id: 4, name: "Prof. Brown", department: "Cybersecurity", assignedTeams: ["Team Zeta"] },
    { id: 5, name: "Dr. Davis", department: "Data Science", assignedTeams: ["Team Theta"] },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary neon-glow-cyan mb-8">Mentors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <Card
              key={mentor.id}
              className="glass-card glass-hover p-6 animate-slide-up border border-white/20 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-secondary/20 text-secondary neon-border-magenta mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserCircle size={48} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{mentor.department}</p>
                <div className="w-full">
                  <p className="text-xs text-muted-foreground mb-2">Assigned Teams:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.assignedTeams.map((team, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs border border-primary/30">
                        {team}
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

export default Mentors;
