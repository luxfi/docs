import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          Secrets · PKI · HSM · MPC · K8s Operator
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
          Lux KMS
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
          Enterprise key management with HSM integration, secrets automation,
          PKI, and Kubernetes operator.
        </p>
        <div className="rounded-lg border border-fd-border bg-fd-card p-4 mb-8 max-w-md mx-auto font-mono text-sm">
          <span className="text-fd-muted-foreground">$</span>{' '}docker pull ghcr.io/luxfi/kms:latest
        </div>
        <div className="flex gap-4 justify-center mb-16">
          <Link href="/docs" className="rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:bg-fd-primary/90 transition-colors">Get Started</Link>
          <Link href="/docs/api" className="rounded-lg border border-fd-border px-6 py-3 font-medium hover:bg-fd-accent transition-colors">API Reference</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {[
            { name: 'Secrets Management', desc: 'Centralized storage with versioning and rotation' },
            { name: 'External KMS', desc: 'AWS KMS, GCP Cloud KMS, Azure Key Vault' },
            { name: 'HSM Integration', desc: 'Zymbit SCM, AWS CloudHSM, Google Cloud HSM' },
            { name: 'MPC Keys', desc: 'Threshold key shares with envelope encryption' },
            { name: 'PKI / Certificates', desc: 'X.509 certificate authority and lifecycle' },
            { name: 'K8s Operator', desc: 'CRDs for KMSSecret, KMSPushSecret, KMSDynamicSecret' },
          ].map((c) => (
            <div key={c.name} className="rounded-lg border border-fd-border bg-fd-card p-5 hover:border-fd-ring transition-colors">
              <h3 className="font-semibold mb-1">{c.name}</h3>
              <p className="text-sm text-fd-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
