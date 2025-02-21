import { useState } from "react";
import { toast } from "sonner";
import { PlusCircle, ImageIcon } from "lucide-react";
import {Formations} from "@/types/customTypes"
export default function UploadFormations() {
  const [formation, setFormation] = useState<Formations>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormation({ ...formation, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    setFormation({ ...formation, status, price: status === "payant" ? formation.price : 0 });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormation({ ...formation, price: Number(e.target.value) });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormation({ ...formation, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formation.title || !formation.domain) {
      toast.error("Tous les champs sont obligatoires !");
      return;
    }

    if (formation.status === "payant" && formation.price <= 0) {
      toast.error("Le prix doit être supérieur à 0 pour une formation payante !");
      return;
    }

    const newFormation = {
      ...formation,
      id: crypto.randomUUID(),
      likes: 0,
      _uploadedAt: new Date().toISOString(),
    };

    console.log("Formation ajoutée :", newFormation);
    toast.success("Formation ajoutée avec succès !");
    setFormation({ title: "", domain: "", status: "free", type: "video", price: 0, image: "" });
    setImagePreview(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-neutral-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Ajouter une Formation</h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Titre de la formation"
          value={formation.title}
          onChange={handleChange}
          className="p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="domain"
          placeholder="Domaine (Ex: Développement Web, Design...)"
          value={formation.domain}
          onChange={handleChange}
          className="p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex space-x-4">
          <select
            name="status"
            value={formation.status}
            onChange={handleStatusChange}
            className="w-1/2 p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="free">Gratuite</option>
            <option value="payant">Payante</option>
          </select>

          {formation.status === "payant" && (
            <input
              type="number"
              name="price"
              placeholder="Prix (€)"
              value={formation.price}
              onChange={handlePriceChange}
              className="w-1/2 p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        <select
          name="type"
          value={formation.type}
          onChange={handleChange}
          className="p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="video">Vidéo</option>
          <option value="pdf">PDF</option>
        </select>

        <label className="flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-neutral-600 rounded-lg p-4 hover:bg-neutral-800 transition">
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded-md" />
          ) : (
            <div className="flex flex-col items-center">
              <ImageIcon size={40} className="text-neutral-400" />
              <span className="mt-2 text-sm">Ajouter une image</span>
            </div>
          )}
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          <PlusCircle size={18} /> Ajouter la formation
        </button>
      </form>
    </div>
  );
}
