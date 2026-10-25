import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#152238] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FFE3CC]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center bg-white border border-[#E9E7E2] p-8 sm:p-10 rounded-2xl shadow-warm">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FFF4EB] border border-[#FFD6B3] text-[#FF7900] font-mono text-xl font-bold mb-6">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#152238] mb-3">
          Page Not Found
        </h1>
        <p className="text-[#737B87] text-sm sm:text-base mb-8 leading-relaxed">
          The page you are looking for doesn’t exist or has moved. Let’s get you back to the portfolio.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF7900] hover:bg-[#E66D00] text-white font-medium text-sm transition-all duration-200 shadow-orange-button hover:shadow-orange-button-hover"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
