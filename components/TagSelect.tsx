import React, { useState } from "react";

export function TagSelect() {
  const tags = [
    { id: 1, name: "Design", color: "#818cf8" },
    { id: 2, name: "Dev", color: "#16a34a" },
    { id: 3, name: "Review", color: "#fbbf24" },
    { id: 4, name: "Bug", color: "#dc2626" },
  ];
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleTagClick = (id: number) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(id)) {
        return prevSelectedTags.filter((tagId) => tagId !== id);
      }
      return [...prevSelectedTags, id];
    });
  };

  return (
    <div>
      <label className="text-xs font-semibold text-text-muted">TAGS</label>
      <div className="flex items-center gap-2 mt-1 flex-wrap">
        {tags.map((tag) => (
          <span
            onClick={() => handleTagClick(tag.id)}
            key={tag.id}
            style={{
              color: tag.color,
              backgroundColor: `${tag.color}20`,
              opacity: selectedTags.includes(tag.id) ? 1 : 0.5,
              border: selectedTags.includes(tag.id)
                ? `1px solid ${tag.color}`
                : "1px solid transparent",
            }}
            className="text-xs font-semibold px-3 py-1 rounded-full cursor-pointer "
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
