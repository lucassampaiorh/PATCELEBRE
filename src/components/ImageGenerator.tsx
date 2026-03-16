import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Image as ImageIcon, Download, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ImageSize = "1K" | "2K" | "4K";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>("1K");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: size
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }
      
      if (!foundImage) {
        setError("Não foi possível gerar a imagem. Tente outro prompt.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Erro ao conectar com a IA. Verifique sua chave API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
          <Wand2 size={20} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800">Gerador de Visuais IA</h3>
          <p className="text-xs text-slate-500">Crie imagens para sua apresentação</p>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Escritório moderno com tecnologia futurista, tons de azul e roxo..."
            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm resize-none h-24"
          />
        </div>

        <div className="flex gap-2">
          {(["1K", "2K", "4K"] as ImageSize[]).map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                size === s 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={generateImage}
          disabled={loading || !prompt}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-100"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <ImageIcon size={18} />}
          {loading ? 'Gerando...' : 'Gerar Imagem'}
        </button>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100"
            >
              {error}
            </motion.div>
          )}

          {generatedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group mt-4 rounded-xl overflow-hidden border border-slate-200"
            >
              <img src={generatedImage} alt="Generated" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={generatedImage} 
                  download="ai-visual.png"
                  className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"
                >
                  <Download size={20} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
