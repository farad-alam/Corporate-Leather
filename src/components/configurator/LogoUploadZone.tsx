"use client";

import { useState, useRef } from "react";
import { UploadCloud, X, CheckCircle2 } from "lucide-react";
import styles from "./LogoUploadZone.module.css";

type LogoUploadZoneProps = {
  currentFile: File | null;
  onFileSelect: (file: File | null) => void;
};

export default function LogoUploadZone({ currentFile, onFileSelect }: LogoUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    const validTypes = ["image/svg+xml", "image/png", "image/jpeg"];
    if (validTypes.includes(file.type)) {
      onFileSelect(file);
    } else {
      alert("Please upload an SVG, PNG, or JPG file.");
    }
  };

  if (currentFile) {
    return (
      <div className={styles.successState}>
        <div className={styles.fileInfo}>
          <CheckCircle2 className={styles.successIcon} size={24} />
          <div>
            <p className={styles.fileName}>{currentFile.name}</p>
            <p className={styles.fileSize}>{(currentFile.size / 1024).toFixed(1)} KB</p>
          </div>
        </div>
        <button 
          type="button" 
          onClick={() => onFileSelect(null)}
          className={styles.removeBtn}
        >
          <X size={18} />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`${styles.dropZone} ${isDragging ? styles.dragging : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".svg,.png,.jpg,.jpeg"
        onChange={handleChange}
        className={styles.hiddenInput}
      />
      <UploadCloud className={styles.icon} size={40} />
      <p className={styles.title}>Click or drag logo file here</p>
      <p className={styles.subtitle}>SVG or transparent PNG recommended for best results</p>
    </div>
  );
}
