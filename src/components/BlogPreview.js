import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/blog';

const BlogPreview = ({ limit = 3 }) => {
  const { t, isEn } = useLanguage();
  const posts = blogPosts.slice(0, limit);

  return (
    <section className="py-16 blog-surface blog-reading" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
          {t('section.blog')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-emerald-100/60 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-700" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(isEn ? 'en-US' : 'tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>· {post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {isEn ? post.titleEn : post.title}
                </h3>
                <p className="blog-body text-base mb-4 line-clamp-3">
                  {isEn ? post.excerptEn : post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-emerald-600 font-medium text-sm hover:underline"
                >
                  <BookOpen className="w-4 h-4" />
                  {t('cta.readMore')}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
          >
            <Newspaper className="w-4 h-4" />
            {t('section.blog')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
