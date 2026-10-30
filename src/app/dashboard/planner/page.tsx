'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PlannerPage() {
  const [course, setCourse] = useState('');
  const [schedule, setSchedule] = useState<{ day: string; task: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const generatePlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;
    setLoading(true);

    setTimeout(() => {
      setSchedule([
        { day: 'Day 1 - 3', task: `Review core concepts and foundational architecture of ${course}.` },
        { day: 'Day 4 - 6', task: `Solve past semester problem sets and numerical examples.` },
        { day: 'Day 7', task: `Mock test simulation, revision of high-weightage modules, and doubt clearance.` }
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/dashboard" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-1.5 rounded-lg transition-colors">
          ← Back to Dashboard
        </Link>
        <span className="text-sm font-semibold text-indigo-400">📅 Smart Syllabus Planner</span>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-white mb-2">Automated Exam Timetable</h1>
        <p className="text-slate-400 text-sm mb-8">Input your subject name to generate a structured countdown schedule.</p>

        <form onSubmit={generatePlan} className="flex gap-3 mb-10">
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="e.g., Design and Analysis of Algorithms..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap disabled:opacity-50"
          >
            {loading ? 'Building Plan...' : 'Generate Plan'}
          </button>
        </form>

        {schedule.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">Your Customized Exam Schedule</h2>
            {schedule.map((item, index) => (
              <div key={index} className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800 text-indigo-400 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{item.day}</h3>
                    <p className="text-slate-400 text-sm">{item.task}</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50 w-fit">
                  Optimized
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}