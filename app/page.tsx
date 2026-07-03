import Image from "next/image";

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="underline decoration-line hover:decoration-current transition-colors"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <header className="flex items-center gap-4">
        <Image
          src="/images/avatar.png"
          alt="Ahmed Ben Khalifa"
          width={56}
          height={56}
          priority
          className="rounded-full"
        />
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Ahmed Ben Khalifa
          </h1>
          <p className="text-muted">Full-stack software engineer</p>
        </div>
      </header>

      <section className="mt-10 space-y-4 leading-relaxed">
        <p>
          For the last four years I&apos;ve been building{" "}
          <A href="https://www.speakduo.com">SpeakDuo</A>, a language-learning
          platform with 40,000+ registered learners. I work across the whole
          product: the React/TypeScript web app, the Python API, the React
          Native mobile app, and the Kubernetes cluster it all runs on.
        </p>
        <p>
          I like owning things end to end, from the first commit to the
          incident response.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">Work</h2>
        <p className="mt-4 leading-relaxed">
          At SpeakDuo, since 2022, a few things I&apos;ve built:
        </p>
        <ul className="mt-4 space-y-3 leading-relaxed list-disc pl-5 marker:text-muted">
          <li>
            A real-time video classroom on LiveKit (WebRTC). It has hosted
            6,500+ live group classes.
          </li>
          <li>
            Two AI assessment products: a voice interview agent and a speech
            pipeline that has graded 300,000+ recordings, about 45,000 hours of
            learner speech, against CEFR levels.
          </li>
          <li>
            A pipeline rescue I&apos;m proud of: median feedback time went from
            16 minutes to about 1 minute, and nine out of ten recordings now
            finish in under 2 minutes.
          </li>
          <li>
            The UNSW and UCL university products, a student app and a faculty
            admin app from one monorepo, as the sole developer.
          </li>
          <li>
            The iOS and Android app, where I&apos;m the sole engineer. It&apos;s
            on the{" "}
            <A href="https://apps.apple.com/app/id6738668409">App Store</A>{" "}
            and{" "}
            <A href="https://play.google.com/store/apps/details?id=com.speakduo.app">
              Play Store
            </A>
            .
          </li>
        </ul>
        <p className="mt-6 leading-relaxed">
          Before that I was a full-stack developer at Digital2Value, where I
          built an interactive consultation tool: a mind map that walks
          companies through management consultations, with AI-generated
          questions and real-time autosave.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">Elsewhere</h2>
        <ul className="mt-4 space-y-2 leading-relaxed">
          <li>
            <A href="https://github.com/Ahmedbenkhalifa">GitHub</A>
          </li>
          <li>
            <A href="https://linkedin.com/in/ben-khalifa-ahmed">LinkedIn</A>
          </li>
          <li>
            <A href="mailto:ahmedbenkhalifa1997@gmail.com">Email</A>
          </li>
          <li>
            <A href="/resume.pdf">Resume (PDF)</A>
          </li>
        </ul>
      </section>
    </main>
  );
}
