import Link from "next/link";
import type { CaseStudy, Deliverable } from "../../cases/data";
import { Logo } from "../ui/Logo";

type CaseStudyViewProps = {
  project: CaseStudy;
  nextProject: CaseStudy;
  deliverables: Deliverable[];
};

export function CaseStudyView({
  project,
  nextProject,
  deliverables,
}: CaseStudyViewProps) {
  return (
    <main className={`casePage ${project.tone}`}>
      <CaseHeader />
      <CaseHero project={project} />
      <CaseStory project={project} />
      <CaseScope works={project.works} />
      <CaseDeliverables
        deliverables={deliverables}
        projectTitle={project.title}
      />
      <CaseVisual project={project} />
      <CaseResults results={project.results} />
      <NextCase project={nextProject} />
    </main>
  );
}

function CaseHeader() {
  return (
    <header className="caseHeader shell">
      <Logo />
      <Link href="/#projects">← Все проекты</Link>
      <Link href="/#contact">Обсудить проект ↗</Link>
    </header>
  );
}

function CaseHero({ project }: { project: CaseStudy }) {
  return (
    <>
      <section className="caseHero shell">
        <div className="caseMeta">
          <span>
            {project.number} / {project.year}
          </span>
          <span>{project.category}</span>
        </div>
        <h1>{project.title}</h1>
        <p>{project.headline}</p>
        <div className="caseOrb" aria-hidden="true">
          <i />
          <b>{project.number}</b>
        </div>
      </section>
      <section className="caseIntro shell">
        <p className="caseKicker">О проекте</p>
        <h2>{project.intro}</h2>
      </section>
    </>
  );
}

function CaseStory({ project }: { project: CaseStudy }) {
  return (
    <section className="caseStory shell">
      <article>
        <span>01 / Задача</span>
        <p>{project.challenge}</p>
      </article>
      <article>
        <span>02 / Решение</span>
        <p>{project.solution}</p>
      </article>
    </section>
  );
}

function CaseScope({ works }: { works: string[] }) {
  return (
    <section className="caseScope shell">
      <div>
        <p className="caseKicker">Что сделали</p>
        <h2>
          Полный цикл
          <br />
          <em>запуска бренда</em>
        </h2>
      </div>
      <ol>
        {works.map((work, index) => (
          <li key={work}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {work}
          </li>
        ))}
      </ol>
    </section>
  );
}

function CaseDeliverables({
  deliverables,
  projectTitle,
}: {
  deliverables: Deliverable[];
  projectTitle: string;
}) {
  return (
    <section className="deliverables shell">
      <div className="deliverablesHead">
        <p className="caseKicker">Материалы проекта</p>
        <h2>
          Показываем,
          <br />
          <em>что внутри</em>
        </h2>
        <p>
          Каждый пункт раскрыт как самостоятельный результат работы команды.
        </p>
      </div>
      {deliverables.map((deliverable, index) => (
        <article className="deliverable" key={deliverable.title}>
          <div className="deliverableCopy">
            <span>
              {String(index + 1).padStart(2, "0")} / {deliverable.tag}
            </span>
            <h3>{deliverable.title}</h3>
            <p>{deliverable.summary}</p>
            <ul>
              {deliverable.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`deliverableMock mock${index % 3}`}>
            <small>{deliverable.tag}</small>
            <strong>{deliverable.sample}</strong>
            <i>Supernova® / {projectTitle}</i>
          </div>
        </article>
      ))}
    </section>
  );
}

function CaseVisual({ project }: { project: CaseStudy }) {
  return (
    <section className="caseVisual shell">
      <div className="visualPlanet">
        <i />
        <span>Supernova / case {project.number}</span>
      </div>
      <blockquote>«{project.quote}»</blockquote>
    </section>
  );
}

function CaseResults({ results }: { results: CaseStudy["results"] }) {
  return (
    <section className="caseResults shell">
      <p className="caseKicker">Результат</p>
      <div>
        {results.map((result) => (
          <article key={result.value}>
            <strong>{result.value}</strong>
            <span>{result.label}</span>
          </article>
        ))}
      </div>
      <small>
        * Показатели и материалы приведены для демонстрации структуры
        презентационного кейса.
      </small>
    </section>
  );
}

function NextCase({ project }: { project: CaseStudy }) {
  return (
    <Link className="nextCase" href={`/cases/${project.slug}`}>
      <span>Следующий проект</span>
      <strong>{project.title}</strong>
      <b aria-hidden="true">↗</b>
    </Link>
  );
}
