"use client";
import React, { forwardRef, useEffect, useState } from "react";
import Button from "./Button";
import { cn } from "@/utils/cn";

type Tag = { id: number; name: string; color: string };
type TagSelectProps = {
  value?: Tag[];
  onChange?: (tags: Tag[]) => void;
};

export default function TagSelect({ onChange, value = [] }: TagSelectProps) {
  const tags = [
    { id: 1, name: "Design", color: "#818cf8" },
    { id: 2, name: "Dev", color: "#16a34a" },
    { id: 3, name: "Review", color: "#fbbf24" },
    { id: 4, name: "Bug", color: "#dc2626" },
  ];

  const handleToggleTag = (tag: Tag) => {
    const isSelected = value?.some((t) => t?.id === tag?.id);
    const updated = isSelected
      ? value?.filter((t) => t.id !== tag?.id)
      : [...value, tag];
    onChange && onChange(updated);
  };

  return (
    <div>
      <label className="text-xs font-semibold text-text-muted">TAGS</label>
      <div className="flex items-center gap-2 mt-1 flex-wrap">
        {tags.map((tag) => {
          const isSelected = value?.find((t) => t?.id === tag.id);

          return (
            <Button
              key={`tag-${tag?.id}`}
              style={{
                backgroundColor: `${tag.color}20`,
                borderColor: isSelected ? tag.color : "transparent",
                color: tag.color,
              }}
              onClick={() => handleToggleTag(tag)}
              className={cn(
                "text-xs font-semibold px-3 py-1 rounded-full border transition-all",
                isSelected ? "opacity-100 scale-105" : "opacity-60",
              )}
              name={tag?.name}
            />
          );
        })}
      </div>
    </div>
  );
}
