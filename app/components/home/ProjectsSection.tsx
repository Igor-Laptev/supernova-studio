import Link from "next/link";
import { caseStudies } from "../../cases/data";
import { ArrowIcon } from "../ui/ArrowIcon";
import { SectionLabel } from "../ui/SectionLabel";

export function ProjectsSection() {
  return (
    <section className="projects section" id="projects">
      <div className="shell sectionHead">
        <SectionLabel number="02">Проекты</SectionLabel>
        <h2>Наши проекты</h2>
        <p>
          Бренды и digital-продукты, которые стали заметными в своей категории.
        </p>
      </div>
      <div className="caseGrid shell">
        {caseStudies.map((project) => (
          <Link
            className="case"
            href={`/cases/${project.slug}`}
            key={project.slug}
          >
            <div className={`art ${project.tone}`}>
              <i />
              <b>S{project.number}</b>
              <span className="viewCase">Смотреть кейс ↗</span>
            </div>
            <div className="caseInfo">
              <span>{project.number}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
              <ArrowIcon />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
