
import Project from '../components/Project';
import { portfolioProjects } from '../../data/projects/portfolioProjects';
import { SectionHeader } from '../components/SectionHeader';

const ProjectsSection = () => (
  <section
    id="projects"
    className="pb-16 lg:py-24"
    style={{
      minHeight: `calc(100vh * ${portfolioProjects.length})`, // Ensure the section is tall enough for all projects
      paddingBottom: 'calc(110vh / 2)',
    }}
  >
    <div className="container">
      <SectionHeader
        eyebrow="Real-world Results"
        title="Featured Projects"
        description="See How I transformed concepts into engaging digital experiences."
      />
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, index) => (
          <Project key={index} {...project} projectIndex={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
