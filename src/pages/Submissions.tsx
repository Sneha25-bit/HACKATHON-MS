import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, Upload } from "lucide-react";

interface Submission {
  id: number;
  teamName: string;
  projectLink: string;
  submissionDate: string;
  score: number;
}

const Submissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    { id: 1, teamName: "Team Alpha", projectLink: "https://github.com/alpha", submissionDate: "2025-01-15", score: 95 },
    { id: 2, teamName: "Team Beta", projectLink: "https://github.com/beta", submissionDate: "2025-01-16", score: 88 },
    { id: 3, teamName: "Team Gamma", projectLink: "https://github.com/gamma", submissionDate: "2025-01-17", score: 92 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newSubmission, setNewSubmission] = useState({ teamName: "", projectLink: "", score: "" });

  const handleUpload = () => {
    if (newSubmission.teamName && newSubmission.projectLink && newSubmission.score) {
      const submission: Submission = {
        id: submissions.length + 1,
        teamName: newSubmission.teamName,
        projectLink: newSubmission.projectLink,
        submissionDate: new Date().toISOString().split('T')[0],
        score: parseInt(newSubmission.score),
      };
      setSubmissions([...submissions, submission]);
      setNewSubmission({ teamName: "", projectLink: "", score: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary neon-glow-cyan">Submissions</h1>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 neon-border-magenta"
          >
            <Upload className="mr-2" size={18} />
            Upload Submission
          </Button>
        </div>

        {showForm && (
          <div className="glass-card p-6 mb-8 animate-slide-up">
            <h2 className="text-xl font-semibold mb-4 text-foreground">New Submission</h2>
            <div className="space-y-4">
              <Input
                placeholder="Team Name"
                value={newSubmission.teamName}
                onChange={(e) => setNewSubmission({ ...newSubmission, teamName: e.target.value })}
                className="bg-background/50 border-white/20"
              />
              <Input
                placeholder="Project Link (GitHub/URL)"
                value={newSubmission.projectLink}
                onChange={(e) => setNewSubmission({ ...newSubmission, projectLink: e.target.value })}
                className="bg-background/50 border-white/20"
              />
              <Input
                placeholder="Score (0-100)"
                type="number"
                value={newSubmission.score}
                onChange={(e) => setNewSubmission({ ...newSubmission, score: e.target.value })}
                className="bg-background/50 border-white/20"
              />
              <Button onClick={handleUpload} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-border-cyan">
                Submit
              </Button>
            </div>
          </div>
        )}

        <div className="glass-card p-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-primary">Team Name</TableHead>
                <TableHead className="text-primary">Project Link</TableHead>
                <TableHead className="text-primary">Submission Date</TableHead>
                <TableHead className="text-primary">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission, index) => (
                <TableRow
                  key={submission.id}
                  className="border-white/10 hover:bg-white/5 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="font-medium text-foreground">{submission.teamName}</TableCell>
                  <TableCell>
                    <a
                      href={submission.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 flex items-center gap-2"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{submission.submissionDate}</TableCell>
                  <TableCell>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold border border-primary/30">
                      {submission.score}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
