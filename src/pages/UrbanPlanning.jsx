import PageHead from '../components/PageHead.jsx';
import Project from '../components/Project.jsx';
import { planning } from '../data/content.js';

export default function UrbanPlanning() {
  return (
    <div style={{ '--accent': 'var(--plan)' }}>
      <PageHead kicker={`${planning.projects.length} projects`} title={planning.title} intro={planning.intro} />
      <div className="wrap">
        {planning.projects.map((p) => <Project key={p.id} p={p} />)}
      </div>
    </div>
  );
}
