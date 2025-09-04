"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronRight, File, Folder, FolderOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFileSystem, type FileEntry } from "@/components/file-system-provider"

interface FileTreeProps {
  className?: string
}

export function FileTree({ className }: FileTreeProps) {
  const { fileTree, selectedFile, setSelectedFile } = useFileSystem()

  return (
    <div className={cn("overflow-auto p-2", className)}>
      {Object.keys(fileTree).length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center text-muted-foreground">
          <p>No files loaded</p>
          <p className="text-sm">Open a folder or drag files here</p>
        </div>
      ) : (
        Object.entries(fileTree).map(([name, item]) => (
          <FileTreeNode
            key={name}
            name={name}
            item={item}
            path={name}
            level={0}
            selectedFile={selectedFile}
            onSelectFile={setSelectedFile}
          />
        ))
      )}
    </div>
  )
}

interface FileTreeNodeProps {
  name: string
  item: FileEntry
  path: string
  level: number
  selectedFile: string | null
  onSelectFile: (path: string | null) => void
}

function FileTreeNode({ name, item, path, level, selectedFile, onSelectFile }: FileTreeNodeProps) {
  const [isOpen, setIsOpen] = useState(level < 1)

  const toggleOpen = () => {
    if (item.type === "directory") {
      setIsOpen(!isOpen)
    }
  }

  const handleFileClick = () => {
    if (item.type === "file") {
      onSelectFile(path)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      if (item.type === "directory") {
        toggleOpen()
      } else {
        handleFileClick()
      }
      e.preventDefault()
    }
  }

  const isSelected = selectedFile === path

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 px-2 rounded-md cursor-pointer hover:bg-accent transition-colors",
          isSelected && "bg-primary text-primary-foreground",
          item.type === "file" ? "text-foreground" : "font-medium text-foreground",
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={item.type === "directory" ? toggleOpen : handleFileClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role={item.type === "directory" ? "treeitem" : "treeitem"}
        aria-expanded={item.type === "directory" ? isOpen : undefined}
        aria-selected={isSelected}
      >
        {item.type === "directory" ? (
          <>
            <span className="mr-1">
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </span>
            {isOpen ? (
              <FolderOpen className="h-4 w-4 text-accent-foreground mr-2" />
            ) : (
              <Folder className="h-4 w-4 text-accent-foreground mr-2" />
            )}
          </>
        ) : (
          <File className="h-4 w-4 text-muted-foreground mr-2" />
        )}
        <span className="truncate">{name}</span>
      </div>

      {item.type === "directory" && isOpen && item.children && (
        <div>
          {Object.entries(item.children).map(([childName, childItem]) => (
            <FileTreeNode
              key={childName}
              name={childName}
              item={childItem}
              path={`${path}/${childName}`}
              level={level + 1}
              selectedFile={selectedFile}
              onSelectFile={onSelectFile}
            />
          ))}
        </div>
      )}
    </div>
  )
}
