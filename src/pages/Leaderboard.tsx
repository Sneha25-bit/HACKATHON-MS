import { Trophy, Medal } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  team: string;
  score: number;
}

const Leaderboard = () => {
  const entries: LeaderboardEntry[] = [
    { rank: 1, team: "Team Alpha", score: 95 },
    { rank: 2, team: "Team Gamma", score: 92 },
    { rank: 3, team: "Team Beta", score: 88 },
    { rank: 4, team: "Team Delta", score: 85 },
    { rank: 5, team: "Team Epsilon", score: 82 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="text-yellow-400" size={24} />;
    if (rank === 2) return <Medal className="text-gray-300" size={24} />;
    if (rank === 3) return <Medal className="text-orange-400" size={24} />;
    return null;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "neon-border-cyan border-primary/50";
    if (rank === 2) return "border-white/30";
    if (rank === 3) return "border-orange-400/30";
    return "border-white/20";
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary neon-glow-cyan mb-4">Leaderboard</h1>
          <p className="text-muted-foreground">Top performing teams in the hackathon</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {entries.map((entry, index) => (
            <div
              key={entry.rank}
              className={`glass-card glass-hover p-6 flex items-center justify-between animate-slide-up border ${getRankColor(entry.rank)}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                  {getRankIcon(entry.rank) || (
                    <span className="text-xl font-bold text-foreground">{entry.rank}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{entry.team}</h3>
                  <p className="text-sm text-muted-foreground">Rank #{entry.rank}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary neon-glow-cyan">{entry.score}</div>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
