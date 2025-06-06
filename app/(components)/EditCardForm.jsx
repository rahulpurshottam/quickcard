"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditCardForm = ({ card }) => {
  const router = useRouter();
  const EDITMODE = card._id !== "new";

  const [formData, setFormData] = useState({
    title: card.title || "",
    description: card.description || "",
    priority: card.priority || 1,
    progress: card.progress || 0,
    status: card.status || "not started",
    category: card.category || "Hardware Problem",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "range" || type === "radio" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        EDITMODE ? `/api/Cards/${card._id}` : "/api/Cards",
        {
          method: EDITMODE ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error(await res.text());

      router.refresh();
      router.push("/");
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Failed to save card. Please try again.");
    }
  };

  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Deveopment",
    "Project",
  ];

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/2">
        <h3 className="text-xl font-bold mb-2">
          {EDITMODE ? "Update Your Card" : "Create New Card"}
        </h3>
        <label>Title</label>
        <input
          name="title"
          type="text"
          required
          value={formData.title}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <label>Description</label>
        <textarea
          name="description"
          required
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <label>Priority</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((val) => (
            <label key={val} className="flex items-center gap-1">
              <input
                type="radio"
                name="priority"
                value={val}
                checked={formData.priority === val}
                onChange={handleChange}
              />
              {val}
            </label>
          ))}
        </div>
        <label>Progress: {formData.progress}%</label>
        <input
          type="range"
          name="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          value={EDITMODE ? "Update Card" : "Create Card"}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default EditCardForm;