import { useState, useEffect, useCallback } from 'react';

export const GalleryModal = ({ isOpen, onClose, images, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Reset current index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsLoading(true);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        setCurrentIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        setCurrentIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
        break;
    }
  }, [isOpen, onClose, images.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle image load
  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
    if (index === currentIndex) {
      setIsLoading(false);
    }
  };

  // Navigate to previous image
  const goToPrevious = () => {
    setIsLoading(true);
    setCurrentIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
  };

  // Navigate to next image
  const goToNext = () => {
    setIsLoading(true);
    setCurrentIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
  };

  // Navigate to specific image
  const goToImage = (index) => {
    setIsLoading(true);
    setCurrentIndex(index);
  };

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // For direct image URLs, return the URL as-is
  const getDirectImageUrl = (imageUrl) => {
    return imageUrl;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full h-full max-w-7xl mx-auto p-4 flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-200"
          aria-label="Close gallery"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <div className="text-center mb-4">
          <h3 className="text-white text-xl font-bold" dir="rtl">{projectTitle}</h3>
          <p className="text-gray-300 text-sm mt-1" dir="rtl">
            {currentIndex + 1} מתוך {images.length}
          </p>
        </div>

        {/* Main image area */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Main image */}
          <img
            src={getDirectImageUrl(images[currentIndex])}
            alt={`${projectTitle} - תמונה ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              loadedImages.has(currentIndex) ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad(currentIndex)}
            onError={(e) => {
              console.error('Failed to load image:', images[currentIndex]);
              // Fallback to original URL
              e.target.src = images[currentIndex];
            }}
          />

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail navigation */}
        {images.length > 1 && (
          <div className="mt-4 pb-4">
            <div className="flex justify-center space-x-2 overflow-x-auto max-w-full">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-blue-500 opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-80'
                  }`}
                >
                  <img
                    src={getDirectImageUrl(image)}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = image;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
