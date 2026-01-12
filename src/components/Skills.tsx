import { 
  FileText, 
  Palette, 
  Code, 
  Terminal,
  GitBranch,
  Layout
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    icon: FileText,
    name: 'Microsoft Office',
    description: 'Word, Excel, PowerPoint - Proficient in creating professional documents and presentations',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Palette,
    name: 'Canva',
    description: 'Creating visually appealing graphics, social media content, and presentations',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    name: 'Web Development',
    description: 'HTML, CSS, JavaScript - Building responsive and modern web applications',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Terminal,
    name: 'VS Code',
    description: 'Primary code editor with extensive experience in extensions and customization',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: GitBranch,
    name: 'Git & GitHub',
    description: 'Version control, collaboration, and project management using Git workflows',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Layout,
    name: 'UI/UX Design',
    description: 'Creating user-centered designs with focus on accessibility and usability',
    color: 'from-teal-500 to-cyan-500',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Keterampilan Saya
          </span>
          <h2 className="section-title">Alat & Teknologi</h2>
          <p className="section-subtitle mx-auto">
            Berikut adalah alat dan teknologi yang saya gunakan untuk mewujudkan ide-ide.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="group bg-card border-border/50 hover:border-primary/30 card-hover cursor-default animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
