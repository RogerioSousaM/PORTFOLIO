import { useState } from "react";
import { Play, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  videoId?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const ProjectCard = ({ 
  number, 
  title, 
  description, 
  image, 
  videoId, 
  liveUrl, 
  githubUrl, 
  tags 
}: ProjectCardProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoId) {
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="group relative bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
      <div className="relative aspect-video overflow-hidden">
        {isVideoPlaying && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {videoId && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePlayVideo}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors"
                >
                  <Play className="w-8 h-8 text-white fill-white" />
                </button>
              </div>
            )}
          </>
        )}
        
        {/* Project number badge */}
        <div className="absolute top-6 left-6">
          <span className="text-xs font-mono text-portfolio-text-dim bg-background/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-border/50">
            {number}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        {/* Project title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-portfolio-accent transition-colors tracking-tight">
          {title}
        </h3>
        
        {/* Project description */}
        <p className="text-portfolio-text-dim text-base leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Project tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-2 bg-portfolio-surface/50 text-portfolio-text-dim rounded-xl border border-border/30 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Project links */}
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-portfolio-accent hover:text-portfolio-accent-glow transition-colors font-medium group/link"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              VER PROJETO
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-portfolio-text-dim hover:text-foreground transition-colors font-medium group/link"
            >
              <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              CÓDIGO
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;