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
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-glow transition-all duration-500">
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
        
        <div className="absolute top-4 left-4">
          <span className="text-xs font-mono text-portfolio-text-dim bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
            {number}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-portfolio-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-portfolio-text-dim text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-portfolio-surface text-portfolio-text-dim rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-portfolio-accent hover:text-portfolio-accent-glow transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              VER PROJETO
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-portfolio-text-dim hover:text-foreground transition-colors"
            >
              <Github className="w-3 h-3" />
              CÓDIGO
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;