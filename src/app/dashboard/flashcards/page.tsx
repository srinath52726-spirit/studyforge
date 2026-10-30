'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FlashcardsPage() {
  const [topic, setTopic] = useState('');
  const [cards, setCards] = useState<{ front: string; back: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const generateFlashcards = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    setLoading(true);
    
    // Simulate AI Generation for Hackathon Demo
    setTimeout(() => {
      setCards([
        { front: `What is the primary objective of ${topic}?`, back: `To optimize processing efficiency and structure data for rapid access.` },
        { front: `Key complexity metric for ${topic}`, back: `O(N log N) in average scenarios.` },
        { front: `Core component utilized in ${topic}`, back: `Distributed state tracking and active node memory allocation.` }
      ]);
      setLoading(false);
      setCurrentIndex(0);
      setFlipped(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/dashboard" className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-1.5 rounded-lg transition-colors">
          ← Back to Dashboard
        </Link>
        <span className="text-sm font-semibold text-indigo-400">⚡ AI Flashcard Generator</span>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-white mb-2">Instant Active-Recall Decks</h1>
        <p className="text-slate-400 text-sm mb-8">Enter any subject or chapter topic to instantly generate flashcards.</p>

        <form onSubmit={generateFlashcards} className="flex gap-3 mb-10">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Operating Systems Deadlocks..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Deck'}
          </button>
        </form>

        {cards.length > 0 && (
          <div className="flex flex-col items-center">
            <div 
              onClick={() => setFlipped(!flipped)}
              className="w-full max-w-xl h-64 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all shadow-xl shadow-indigo-950/20"
            >
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold mb-4">
                {flipped ? 'Answer (Click to flip back)' : `Question ${currentIndex + 1} of ${cards.length} (Click to reveal)`}
              </span>
              <p className="text-xl font-medium text-white">
                {flipped ? cards[currentIndex].back : cards[currentIndex].front}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => { setFlipped(false); setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1)); }}
                className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm"
              >
                Previous
              </button>
              <button
                onClick={() => { setFlipped(false); setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0)); }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg text-sm font-medium"
              >
                Next Card
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}