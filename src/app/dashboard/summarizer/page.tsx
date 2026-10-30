'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SummarizerPage() {
  const [notes, setNotes] = useState('');
  const [summary, setSummary] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateSummary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notes) return;
    setLoading(true);

    setTimeout(() => {
      setSummary([
        'Core Principle: Focuses on modular design patterns and decoupled component architecture.',
        'Key Takeaway 1: Resource management requires strict handling of asynchronous state flows.',
        'Key Takeaway 2: Performance optimization can be achieved through memoization and lazy loading.',
        'Exam Focus: Expect scenario-based questions regarding failure recovery and data integrity.'
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
        <span className="text-sm font-semibold text-indigo-400">📝 AI Note Summarizer</span>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-white mb-2">Rapid Revision Summaries</h1>
        <p className="text-slate-400 text-sm mb-8">Paste your long lecture notes or chapter text to condense them into high-yield revision bullet points.</p>

        <form onSubmit={generateSummary} className="flex flex-col gap-4 mb-10">
          <textarea
            rows={5}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Paste your long chapter notes or lecture transcript here..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm w-fit disabled:opacity-50"
          >
            {loading ? 'Summarizing Notes...' : 'Generate Bullet Summary'}
          </button>
        </form>

        {summary.length > 0 && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-semibold text-white mb-4">Exam-Focused Revision Notes</h2>
            <ul className="space-y-3">
              {summary.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}