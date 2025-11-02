import { Users, Trophy, FileText, Award } from "lucide-react";
import { useEffect, useState } from "react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
}

const StatCard = ({ icon, value, label, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= value) {
            clearInterval(interval);
            return value;
          }
          return prev + Math.ceil(value / 50);
        });
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="glass-card glass-hover p-6 rounded-xl animate-slide-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-primary/20 text-primary neon-border-cyan">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-foreground">{count}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
};

const StatsOverview = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<Users size={24} />} value={42} label="Total Teams" delay={0} />
        <StatCard icon={<Award size={24} />} value={15} label="Total Mentors" delay={100} />
        <StatCard icon={<FileText size={24} />} value={38} label="Submissions" delay={200} />
        <StatCard icon={<Trophy size={24} />} value={95} label="Top Score" delay={300} />
      </div>
    </section>
  );
};

export default StatsOverview;
