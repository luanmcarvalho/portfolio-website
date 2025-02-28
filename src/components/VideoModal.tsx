"use client";

import ReactPlayer from 'react-player/lazy';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] video-modal">
      <div className="relative w-full max-w-6xl mx-auto px-4 modal-content">
        <button
          className="absolute -top-12 right-4 text-white text-4xl focus:outline-none hover:text-gray-300 transition-colors"
          onClick={onClose}
          aria-label="Close video"
        >
          &times;
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            config={{
              vimeo: {
                playerOptions: {
                  responsive: true,
                  autoplay: true,
                  byline: false,
                  portrait: false,
                  title: false
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}