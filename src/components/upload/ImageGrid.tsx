import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { X } from 'lucide-react';
import { UploadedFile } from './types';

interface ImageGridProps {
  images: UploadedFile[];
  onRemove: (id: string) => void;
}

export function ImageGrid({ images, onRemove }: ImageGridProps) {
  return (
    <Droppable droppableId="images" type="images" direction="horizontal">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {images.map((image, index) => (
            <Draggable key={image.id} draggableId={image.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`group relative aspect-square rounded-lg border bg-white ${
                    snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-500' : ''
                  }`}
                  style={provided.draggableProps.style}
                >
                  <img
                    src={image.preview}
                    alt={image.file.name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                  <button
                    onClick={() => onRemove(image.id)}
                    className="absolute right-2 top-2 rounded-full bg-white p-1 opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}