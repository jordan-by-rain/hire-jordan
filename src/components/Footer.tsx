export default function Footer() {
  const linkClasses =
    "text-sm text-muted hover:text-violet-400 transition-colors duration-200 cursor-pointer underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded";

  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto py-12 px-6">
        {/* Row 1: Three groups */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Left */}
          <p className="text-sm text-muted">Built with RevenueCat Web SDK</p>

          {/* Center */}
          <nav className="flex flex-wrap items-center gap-4">
            <a
              href="https://rainautomation.com/blog/jordan-revenuecat-agentic-ai-advocate-application"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              Application Letter
            </a>
            <span className="text-muted select-none">|</span>
            <a
              href="https://gist.github.com/jordan-by-rain/7fe6819e62c4075526eed0033f8655fb"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              GitHub Gist
            </a>
            <span className="text-muted select-none">|</span>
            <a
              href="https://github.com/jordan-by-rain"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              GitHub
            </a>
          </nav>

          {/* Right */}
          <p className="text-sm text-muted">Powered by Claude</p>
        </div>

        {/* Row 2: Copyright */}
        <p className="text-xs text-muted mt-8 text-center">
          Built by{" "}
          <a
            href="https://rainautomation.com"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            Rain Automation
          </a>
        </p>
      </div>
    </footer>
  );
}
