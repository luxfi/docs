import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Lux Network
          </h1>
          <p className="text-xl text-fd-muted-foreground">
            Post-quantum secure, multi-consensus blockchain infrastructure
          </p>
        </div>
        
        <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
          Build scalable, secure applications on Lux Network with our comprehensive
          documentation, SDKs, and developer tools.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md bg-fd-primary text-fd-primary-foreground px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-fd-primary/90"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/luxfi"
            className="inline-flex items-center justify-center rounded-md border border-fd-border bg-fd-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            View on GitHub
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="font-semibold mb-2">Learn</h3>
            <p className="text-sm text-fd-muted-foreground">
              Understand Lux Network architecture, consensus, and post-quantum security.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="font-semibold mb-2">Build</h3>
            <p className="text-sm text-fd-muted-foreground">
              Deploy smart contracts and build dApps with our SDKs and tools.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="font-semibold mb-2">Run</h3>
            <p className="text-sm text-fd-muted-foreground">
              Operate validators, run nodes, and participate in the network.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
