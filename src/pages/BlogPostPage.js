import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { getBlogPostBySlug } from '../data/blog';
import Breadcrumb from '../components/Breadcrumb';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const { t, isEn } = useLanguage();

  usePageTitle(
    post ? (isEn ? post.titleEn : post.title) : null,
    post ? (isEn ? post.excerptEn : post.excerpt) : null
  );

  if (!post) return <Navigate to="/blog" replace />;

  const content = isEn ? post.contentEn : post.content;
  const paragraphs = content.split('\n\n');

  return (
    <>
      <Breadcrumb
        items={[
          { label: t('nav.blog'), href: '/blog' },
          { label: isEn ? post.titleEn : post.title },
        ]}
      />
      <article className="py-16 blog-surface blog-reading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 bg-white/90 backdrop-blur-sm border border-emerald-100/60 rounded-2xl p-6 sm:p-8 shadow-sm">
            <time className="text-sm text-gray-500" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(isEn ? 'en-US' : 'tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              {' · '}{post.readTime}
            </time>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-3 tracking-tight">
              {isEn ? post.titleEn : post.title}
            </h1>
          </header>
          <div className="blog-body space-y-5 bg-white/90 backdrop-blur-sm border border-emerald-100/60 rounded-2xl p-6 sm:p-8 shadow-sm">
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return <h2 key={i} className="text-xl font-semibold text-emerald-800 mt-8 mb-1">{para.replace(/\*\*/g, '')}</h2>;
              }
              if (para.startsWith('**')) {
                const [heading, ...rest] = para.split('**\n');
                return (
                  <div key={i}>
                    <h2 className="text-xl font-semibold text-emerald-800 mt-8 mb-1">{heading.replace(/\*\*/g, '')}</h2>
                    {rest.length > 0 && <p>{rest.join('')}</p>}
                  </div>
                );
              }
              if (para.startsWith('- ')) {
                const items = para.split('\n').filter((l) => l.startsWith('- '));
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 marker:text-emerald-600">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{para.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
            })}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:underline">
              <Newspaper className="w-4 h-4" />
              {t('section.blog')}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
