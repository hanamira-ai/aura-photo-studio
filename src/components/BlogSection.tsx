import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/studioData';
import { BlogPost } from '../types';
import { ArrowRight, Clock, Calendar, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#FAF7F5] relative border-t border-[#211A24]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#6B4E9E] font-medium block">
              JOURNAL &amp; INSIGHTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#211A24] font-normal tracking-tight">
              Behind The Lens
            </h2>
          </div>
          <p className="text-sm text-[#211A24]/75 max-w-md font-sans">
            Reflections on lighting composition, editorial styling, and preserving raw emotion in fine-art photography.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="bg-white border border-[#211A24]/10 overflow-hidden cursor-pointer group flex flex-col justify-between hover:border-[#6B4E9E] hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Photo */}
                <div className="aspect-[16/10] overflow-hidden bg-[#EFECE8] relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#FAF7F5] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#6B4E9E] font-medium border border-[#211A24]/5">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-[#211A24]/60 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#211A24] font-normal group-hover:text-[#6B4E9E] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#211A24]/75 font-sans leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#211A24] group-hover:text-[#6B4E9E]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-[#211A24]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#FAF7F5] max-w-3xl w-full p-8 sm:p-12 border border-[#211A24]/10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-6 right-6 p-2 text-[#211A24] hover:text-[#6B4E9E] transition-colors"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B4E9E] font-medium block mb-2">
              {activePost.category} — {activePost.date}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#211A24] mb-6 leading-tight">
              {activePost.title}
            </h2>

            <div className="aspect-[16/9] w-full overflow-hidden mb-8 bg-[#EFECE8]">
              <img
                src={activePost.imageUrl}
                alt={activePost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#211A24]/85 font-sans leading-relaxed">
              {activePost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#211A24]/10 flex justify-end">
              <button
                onClick={() => setActivePost(null)}
                className="px-6 py-3 bg-[#211A24] text-white text-xs uppercase tracking-[0.2em]"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
