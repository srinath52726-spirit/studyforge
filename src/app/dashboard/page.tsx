import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              SF
            </div>
            <span className="text-xl font-bold tracking-tight text-white">StudyForge</span>
          </Link>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            SRMIST Trichy Hub
          </span>
        </div>
        <Link
          href="/"
          className="text-xs text-slate-400 hover:text-white border border-slate-800 px-3 py-1.5 rounded-lg transition-colors"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Student Workspace</h1>
          <p className="text-slate-400 text-sm">
            Select a tool to generate study material or organize your exam prep.
          </p>
        </div>

        {/* Workspace Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Tool 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400 text-xl font-bold mb-4">
                📅
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Syllabus Planner</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Generate a custom day-by-day study timetable based on upcoming semester exams.
              </p>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/20 text-sm">
              Open Planner
            </button>
          </div>

          {/* Tool 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400 text-xl font-bold mb-4">
                ⚡
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Flashcard Generator</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Paste syllabus notes or upload PDFs to auto-generate active recall cards.
              </p>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/20 text-sm">
              Create Cards
            </button>
          </div>

          {/* Tool 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400 text-xl font-bold mb-4">
                📝
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Note Summarizer</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Convert dense chapter slides into rapid revision bullet points and practice questions.
              </p>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/20 text-sm">
              Summarize Notes
            </button>
          </div>
        </div>

        {/* Quick Upload / AI Interaction Box */}
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Prompt & File Upload</h3>
          <p className="text-slate-400 text-sm mb-4">
            Upload your subject syllabus or notes to start generating content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="e.g., Generate study schedule for Data Structures Unit 3..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm whitespace-nowrap">
              Submit to AI
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}