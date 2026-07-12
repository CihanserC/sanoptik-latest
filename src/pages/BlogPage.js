import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { blogPosts } from '../data/blog';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';

const BlogPage = () => {
  const { t, isEn } = useLanguage();
  usePageTitle(
    isEn ? 'Blog' : 'Blog',
    isEn ? 'Eye health tips and eyewear guides from SAN Optik.' : 'SAN Optik\'ten göz sağlığı ipuçları ve gözlük rehberleri.'
  );

  return (
    <>
      <Breadcrumb items={[{ label: t('nav.blog') }]} />
      <PageHero title={t('section.blog')} />
      <section className="py-16 blog-surface blog-reading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white/90 backdrop-blur-sm border border-emerald-100/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(isEn ? 'en-US' : 'tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span>· {post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-emerald-600 transition-colors">
                  {isEn ? post.titleEn : post.title}
                </Link>
              </h2>
              <p className="blog-body mb-4">{isEn ? post.excerptEn : post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-emerald-600 font-medium text-sm hover:underline">
                <BookOpen className="w-4 h-4" />
                {t('cta.readMore')}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
