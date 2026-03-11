import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/TemplatesPage.css";

// React Icons
import {
  FaDownload,
  FaEye,
  FaFileAlt,
  FaUniversity,
  FaGraduationCap,
  FaHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

export default function TemplatesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const templates = [
    {
      category: "MOA on Conference Co-Hosting",
      previewPath:
        "/assets/mou-moa/pdfs/moa-confe-coho.pdf",
      downloadPath:
        "/assets/mou-moa/confer/confer.docx",
      icon: FaUniversity,
      type: "moa",
      description:
        "Agreement template for co-hosting academic conferences and events",
    },
    {
      category: "MOA on Cultural Exchange",
      previewPath:
        "/assets/mou-moa/pdfs/moa-cul-ex.pdf",
      downloadPath:
        "/assets/mou-moa/cultu-exc/cultu-exc.docx",
      icon: FaGlobeAmericas,
      type: "moa",
      description: "Template for cultural exchange programs and partnerships",
    },
    {
      category: "MOA on Faculty Exchange",
      previewPath:
        "/assets/mou-moa/pdfs/moa-fac-ex.pdf",
      downloadPath:
        "/assets/mou-moa/facul-exc/facul-exc.docx",
      icon: HiAcademicCap,
      type: "moa",
      description: "Faculty exchange program agreement template",
    },
    {
      category: "MOA on International Competition",
      previewPath:
        "/assets/mou-moa/pdfs/moa-cohosting.pdf",
      downloadPath:
        "/assets/mou-moa/intl-compe/moa-competition.docx",
      icon: FaGraduationCap,
      type: "moa",
      description: "Agreement for hosting international student competitions",
    },
    {
      category: "MOA on Research",
      previewPath:
        "/assets/mou-moa/pdfs/moa-research.pdf",
      downloadPath:
        "/assets/mou-moa/research/research.docx",
      icon: FaFileAlt,
      type: "moa",
      description: "Research collaboration and partnership agreement",
    },
    {
      category: "MOA on Student Exchange",
      previewPath:
        "/assets/mou-moa/pdfs/moa-studex.pdf",
      downloadPath:
        "/assets/mou-moa/stud-exch/stud-exch.docx",
      icon: FaGraduationCap,
      type: "moa",
      description: "Student exchange program agreement template",
    },
    {
      category: "MOA on Student Internship",
      previewPath:
        "/assets/mou-moa/pdfs/moa-studentinter.pdf",
      downloadPath:
        "/assets/mou-moa/stud-intern/stud-intern.docx",
      icon: FaHandshake,
      type: "moa",
      description: "Internship program partnership agreement",
    },
    {
      category: "MOU Template 2025",
      previewPath:
        "/assets/mou-moa/pdfs/moutemplate.pdf",
      downloadPath:
        "/assets/mou-moa/mou2025/mou2025.docx",
      icon: FaUniversity,
      type: "mou",
      description: "Comprehensive Memorandum of Understanding template",
    },
  ];

  const categories = [
    { id: "all", name: "All Templates", count: templates.length },
    {
      id: "mou",
      name: "MOU Templates",
      count: templates.filter((t) => t.type === "mou").length,
    },
    {
      id: "moa",
      name: "MOA Templates",
      count: templates.filter((t) => t.type === "moa").length,
    },
  ];

  const filteredTemplates = templates.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || t.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="templates-page-main">
        {/* Hero Section */}
        <div className="templates-hero-section">
          <div className="templates-hero-content">
            <h1 className="templates-main-title">Memorandum Templates</h1>

            {/* Info Cards in Hero */}
            <div className="templates-info-section">
              <div className="templates-info-card">
                <HiAcademicCap className="templates-info-icon" />
                <h4>University Approved</h4>
                <p>All templates are reviewed and approved</p>
              </div>
              <div className="templates-info-card">
                <FaFileAlt className="templates-info-icon" />
                <h4>Easy to Customize</h4>
                <p>
                  Download editable DOCX files tailored to your specific needs
                </p>
              </div>
              <div className="templates-info-card">
                <FaHandshake className="templates-info-icon" />
                <h4>Partnership Ready</h4>
                <p>
                  Professional templates designed for successful collaborations
                </p>
              </div>
            </div>
          </div>
          <div className="templates-hero-accent"></div>
        </div>

        {/* Search and Filter Section */}
        <div className="templates-search-section">
          <div className="templates-search-container">
            <div className="templates-search-bar">
              <FiSearch className="templates-search-icon" />
              <input
                type="text"
                placeholder="Search templates by name or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="templates-search-input"
              />
            </div>
          </div>

          <div className="templates-category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`templates-category-filter ${
                  selectedCategory === cat.id ? "templates-filter-active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="templates-filter-name">{cat.name}</span>
                <span className="templates-filter-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="templates-grid-container">
          {filteredTemplates.length > 0 ? (
            <div className="templates-cards-grid">
              {filteredTemplates.map((template, index) => {
                const IconComponent = template.icon;
                return (
                  <div key={index} className="template-item-card">
                    <div
                      className={`template-type-badge badge-${template.type}`}
                    >
                      {template.type.toUpperCase()}
                    </div>
                    <div className="template-card-header">
                      <div className="template-icon-container">
                        <IconComponent className="template-card-icon" />
                      </div>
                      <h3 className="template-card-title">
                        {template.category}
                      </h3>
                      <p className="template-card-description">
                        {template.description}
                      </p>
                    </div>
                    <div className="template-card-actions">
                      {/* <a
                        href={template.previewPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="templates-btn templates-preview-btn"
                      >
                        <FaEye className="templates-btn-icon" />
                        Preview PDF
                      </a> */}
                      <a
                        href={template.downloadPath}
                        download
                        className="templates-btn templates-download-btn"
                      >
                        <FaDownload className="templates-btn-icon" />
                        Download DOCX
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="templates-no-results">
              <FaFileAlt className="templates-no-results-icon" />
              <h3>No templates found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}