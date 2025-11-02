import { Users, Award, FileText, Trophy, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    { icon: <Users size={24} />, value: "42", label: "Total Teams", color: "primary" },
    { icon: <Award size={24} />, value: "15", label: "Total Mentors", color: "secondary" },
    { icon: <FileText size={24} />, value: "38", label: "Submissions", color: "primary" },
    { icon: <Trophy size={24} />, value: "95", label: "Top Score", color: "secondary" },
  ];

  const recentActivity = [
    { id: 1, action: "New Team Added", team: "Team Zeta", time: "5 mins ago" },
    { id: 2, action: "Mentor Assigned", team: "Team Theta", time: "15 mins ago" },
    { id: 3, action: "Submission Updated", team: "Team Alpha", time: "30 mins ago" },
    { id: 4, action: "Score Updated", team: "Team Beta", time: "1 hour ago" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary neon-glow-cyan mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Overview of hackathon statistics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`glass-card glass-hover p-6 animate-slide-up border border-white/20`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.color === "primary" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="glass-card p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="text-primary" size={20} />
              <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {recentActivity.map((activity, index) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-glow-pulse"></div>
                  <div className="flex-1">
                    <p className="text-foreground font-medium">{activity.action}</p>
                    <p className="text-sm text-secondary">{activity.team}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Overview */}
          <Card className="glass-card p-6 border border-white/20">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-secondary" size={20} />
              <h2 className="text-xl font-semibold text-foreground">Performance Overview</h2>
            </div>
            <div className="space-y-6">
              {[
                { label: "Submissions Rate", percentage: 90 },
                { label: "Mentor Assignment", percentage: 100 },
                { label: "Team Participation", percentage: 85 },
              ].map((item, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-semibold text-primary">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
