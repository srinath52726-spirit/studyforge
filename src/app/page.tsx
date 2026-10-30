import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            SF
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            StudyForge
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link
            href="/dashboard"
            className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg transition-all shadow-md shadow-indigo-600/20"
          >
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          Designed for SRMIST Trichy Students
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-3xl leading-tight">
          Master Your Courses with <span className="text-indigo-400">AI-Powered</span> Precision
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          StudyForge organizes your syllabus, generates instant flashcards, and builds custom study plans tailored specifically to your SRMIST curriculum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30 text-center"
          >
            Get Started Free
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold px-8 py-3.5 rounded-xl border border-slate-800 transition-all text-center"
          >
            Explore Features
          </a>
        </div>

        {/* Feature Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left w-full">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400 font-bold mb-4">
              📅
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Syllabus Planner</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Upload your course material and get an automated day-by-day study timetable optimized for exams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400 font-bold mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Flashcards</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instantly extract key concepts from lecture PDFs into active-recall flashcard decks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400 font-bold mb-4">
              📝
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Exam Prep Summaries</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Turn long notes into concise revision guides and practice quizzes customized to unit targets.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} StudyForge. Built for SRMIST Trichy Hackathon.
      </footer>
    </div>
  );
}