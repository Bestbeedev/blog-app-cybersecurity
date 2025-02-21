
import { useState } from "react";
import { toast } from "sonner";
import { PlusCircle, ImageIcon } from "lucide-react";
import {Produits} from "@/types/customTypes"

export default function UploadProduct() {
  const [product, setProduct] = useState<Produits>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setProduct({ ...product, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.name_product || !product.price || !product.type) {
      toast.error("Tous les champs sont obligatoires !");
      return;
    }

    // Simulation d'envoi des données
    const newProduct = {
      ...product,
      id: crypto.randomUUID(),
      likes: 0,
      _uploadedAt: new Date().toISOString(),
    };

    console.log("Produit ajouté :", newProduct);
    toast.success("Produit ajouté avec succès !");
    setProduct({ type: "", name_product: "", image: "", price: 0, desc: "" });
    setImagePreview(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-neutral-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Ajouter un produit</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name_product"
          placeholder="Nom du produit"
          value={product.name_product}
          onChange={handleChange}
          className="p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="type"
          placeholder="Type du produit"
          value={product.type}
          onChange={handleChange}
          className="p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={product.price}
          onChange={handleChange}
          className="p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="desc"
          placeholder="Description"
          value={product.desc}
          onChange={handleChange}
          rows={3}
          className="p-3 rounded-md bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-neutral-600 rounded-lg p-4 hover:bg-neutral-800 transition">
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded-md" />
          ) : (
            <div className="flex flex-col items-center">
              <ImageIcon size={40} className="text-neutral-400" />
              <span className="mt-2 text-sm">Ajoutez une image</span>
            </div>
          )}
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          <PlusCircle size={18} /> Ajouter le produit
        </button>
      </form>
    </div>
  );
}

