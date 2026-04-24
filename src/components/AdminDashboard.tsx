import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { LayoutDashboard, Users, Calendar, CheckSquare, Settings, LogOut, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function AdminDashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch from Supabase here
    // const { data } = await supabase.from('tasks').select('*');
    setTasks([
      { id: 1, title: 'Check inventory', status: 'pending', assignee: 'John Doe' },
      { id: 2, title: 'Update homepage promo', status: 'completed', assignee: 'Jane Smith' },
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A0A0A] border-r border-white/5 flex flex-col">
        <div className="h-24 flex items-center px-6 border-b border-white/5">
           <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center p-0.5">
              <img src="https://i.imgur.com/qtIpeq8.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black font-heading uppercase italic tracking-tighter">Admin</span>
              <span className="text-[9px] text-[#FFC107] font-bold tracking-widest uppercase">System</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 flex flex-col gap-2">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem icon={<CheckSquare size={18} />} label="Tasks" />
          <NavItem icon={<Calendar size={18} />} label="Schedule" />
          <NavItem icon={<Users size={18} />} label="Team" />
        </nav>

        <div className="p-6 border-t border-white/5">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <button className="flex items-center gap-3 px-3 py-2 text-white/50 hover:text-red-400 transition-colors w-full uppercase text-xs font-bold tracking-wider mt-2">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-24 border-b border-white/5 px-8 flex items-center justify-between bg-[#050505]/80 backdrop-blur-md">
          <h1 className="text-2xl font-black font-heading uppercase italic tracking-tight">Overview</h1>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#FFC107]" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-sm font-bold">Admin User</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest">Administrator</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard title="Total Tasks" value="24" label="In progress" icon={<CheckSquare size={24} className="text-[#FFC107]" />} />
            <StatCard title="Team Members" value="8" label="Active now" icon={<Users size={24} className="text-[#FFC107]" />} />
            <StatCard title="Upcoming Events" value="3" label="This week" icon={<Calendar size={24} className="text-[#FFC107]" />} />
          </div>

          <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 bg-[#111]">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">Recent Tasks</h2>
            </div>
            <table className="w-full text-left">
              <thead className="bg-[#0A0A0A] border-b border-white/5">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white/40">Task</th>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white/40">Status</th>
                  <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white/40">Assignee</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr key={task.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-sm font-medium">{task.title}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded border ${task.status === 'completed' ? 'text-green-400 border-green-400/20 bg-green-400/10' : 'text-[#FFC107] border-[#FFC107]/20 bg-[#FFC107]/10'}`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/60">{task.assignee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all uppercase text-xs font-bold tracking-wider ${active ? 'bg-[#FFC107] text-black' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
      {icon}
      {label}
    </button>
  );
}

function StatCard({ title, value, label, icon }: { title: string, value: string, label: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/50">{title}</h3>
        <div className="p-2 bg-[#111] rounded-lg border border-white/5">{icon}</div>
      </div>
      <div className="text-3xl font-black font-heading italic mb-1">{value}</div>
      <div className="text-xs text-[#FFC107] font-medium">{label}</div>
    </motion.div>
  );
}
