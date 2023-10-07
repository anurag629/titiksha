import React from 'react';

interface YoutubeEmbeddingProps {
    videoId: string;
}

const YoutubeEmbedding: React.FC<YoutubeEmbeddingProps> = ({ videoId }) => {
    return (
        <div className="aspect-w-16 aspect-h-9 ">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'
            ></iframe>
        </div>
    );
};

export default YoutubeEmbedding;
