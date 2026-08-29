export const AboutGroupFooterCTA = () => {
  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Build a stronger foundation for global people operations.</h3>
          <p className="text-slate-400 mb-8">
            See how Zoiko HR can centralize workforce information, structure HR processes, improve employee and manager access, and connect your people operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              Book a Demo
            </button>
            <button className="px-8 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
              Request Pricing
            </button>
          </div>
          <div className="mt-6">
            <a href="#" className="text-blue-400 hover:text-blue-300 font-medium text-sm">Take the Product Tour →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
