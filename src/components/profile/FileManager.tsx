import React, { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { ImageGrid } from '../upload/ImageGrid';
import { DocumentList } from '../upload/DocumentList';
import { DropZone } from '../upload/DropZone';
import { ErrorMessage } from '../upload/ErrorMessage';
import type { UploadedFile } from '../upload/types';

export function FileManager() {
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

  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-900">File Manager</h2>
        <p className="mt-2 text-sm text-gray-600">
          Manage your uploaded images and documents
        </p>

        {error && <div className="mt-4"><ErrorMessage message={error} /></div>}

        <div className="mt-6">
          <DropZone onDrop={handleDrop} />
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-900">
                Images ({images.length}/10)
              </h3>
              <ImageGrid images={images} onRemove={handleRemoveImage} />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-900">
                Documents ({documents.length}/5)
              </h3>
              <DocumentList documents={documents} onRemove={handleRemoveDocument} />
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}