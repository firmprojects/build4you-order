import React, { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { DropZone } from './upload/DropZone';
import { ImageGrid } from './upload/ImageGrid';
import { DocumentList } from './upload/DocumentList';
import { ErrorMessage } from './upload/ErrorMessage';
import type { UploadedFile } from './upload/types';

interface ContentUploadProps {
  onComplete: () => void;
}

export function ContentUpload({ onComplete }: ContentUploadProps) {
  const [images, setImages] = useState<UploadedFile[]>([]);
  const [documents, setDocuments] = useState<UploadedFile[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const id = Math.random().toString(36).substring(7);
      
      if (file.type.startsWith('image/')) {
        if (images.length >= 10) {
          setError('Maximum 10 images allowed');
          return;
        }
        setImages(prev => [...prev, {
          id,
          file,
          preview: URL.createObjectURL(file),
          type: 'image'
        }]);
      } else if (
        file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        if (documents.length >= 5) {
          setError('Maximum 5 documents allowed');
          return;
        }
        setDocuments(prev => [...prev, {
          id,
          file,
          preview: file.name,
          type: 'document'
        }]);
      }
    });
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = result.type === 'images' ? [...images] : [...documents];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    if (result.type === 'images') {
      setImages(items);
    } else {
      setDocuments(items);
    }
  };

  const handleRemoveImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
    setError(null);
  };

  const handleRemoveDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
    setError(null);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    images.forEach(img => formData.append('images', img.file));
    documents.forEach(doc => formData.append('documents', doc.file));
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Upload Your Content</h1>
          <p className="mt-2 text-gray-600">
            Drag and drop your images and documents to customize your website
          </p>
        </div>

        {error && <ErrorMessage message={error} />}

        <DropZone onDrop={handleDrop} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Images ({images.length}/10)
              </h2>
              <ImageGrid images={images} onRemove={handleRemoveImage} />
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Documents ({documents.length}/5)
              </h2>
              <DocumentList documents={documents} onRemove={handleRemoveDocument} />
            </div>
          </div>
        </DragDropContext>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onComplete}
            className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Skip for Now
          </button>
          <button
            onClick={handleSubmit}
            disabled={images.length === 0 && documents.length === 0}
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}