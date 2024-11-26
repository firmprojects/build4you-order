import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { X, FileText } from 'lucide-react';
import { UploadedFile } from './types';

interface DocumentListProps {
  documents: UploadedFile[];
  onRemove: (id: string) => void;
}

export function DocumentList({ documents, onRemove }: DocumentListProps) {
  return (
    <Droppable droppableId="documents" type="documents">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="space-y-2"
        >
          {documents.map((doc, index) => (
            <Draggable key={doc.id} draggableId={doc.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`group flex items-center justify-between rounded-lg border bg-white p-4 ${
                    snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-500' : ''
                  }`}
                  style={provided.draggableProps.style}
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700">{doc.file.name}</span>
                  </div>
                  <button
                    onClick={() => onRemove(doc.id)}
                    className="rounded-full p-1 opacity-0 transition-opacity group-hover:opacity-100"
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