import Link from 'next/link';
import { projectCategories } from '@/lib/layout.shared';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col px-4 py-16">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Lux Network
          </h1>
          <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
            Post-quantum secure, multi-consensus blockchain infrastructure
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
              className="inline-flex items-center justify-center rounded-md border border-fd-border bg-fd-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-fd-accent"
            >
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-fd-border bg-fd-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="size-6 text-fd-primary" />
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <p className="text-sm text-fd-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.projects.map((project) => (
                  <Link
                    key={project.name}
                    href={project.href}
                    className="block p-3 rounded-lg hover:bg-fd-accent transition-colors"
                  >
                    <div className="font-medium">{project.name}</div>
                    <div className="text-sm text-fd-muted-foreground">
                      {project.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="https://lux.network"
            className="p-6 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent transition-colors"
          >
            <h3 className="font-semibold mb-2">Lux Network</h3>
            <p className="text-sm text-fd-muted-foreground">
              Main website and network information
            </p>
          </Link>
          <Link
            href="https://explore.lux.network"
            className="p-6 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent transition-colors"
          >
            <h3 className="font-semibold mb-2">Explorer</h3>
            <p className="text-sm text-fd-muted-foreground">
              Blockchain explorer and analytics
            </p>
          </Link>
          <Link
            href="https://wallet.lux.network"
            className="p-6 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent transition-colors"
          >
            <h3 className="font-semibold mb-2">Wallet</h3>
            <p className="text-sm text-fd-muted-foreground">
              Manage your LUX tokens and assets
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
