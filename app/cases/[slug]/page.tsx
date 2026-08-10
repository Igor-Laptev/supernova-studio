import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "../../components/cases/CaseStudyView";
import { caseDeliverables, caseStudies, getCase } from "../data";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCase(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — кейс Supernova`,
    description: project.intro,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = getCase(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = caseStudies.findIndex((item) => item.slug === slug);
  const nextProject = caseStudies[(projectIndex + 1) % caseStudies.length];

  return (
    <CaseStudyView
      deliverables={caseDeliverables[slug] ?? []}
      nextProject={nextProject}
      project={project}
    />
  );
}
