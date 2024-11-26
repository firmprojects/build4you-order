export interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  type: 'image' | 'document';
}