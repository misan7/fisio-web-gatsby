import React from 'react';
import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import './styles.css';

import PrivacyPolicyPreview from './preview-templates/PrivacyPolicyPreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ServicePagePreview from './preview-templates/ServicePagePreview';

// CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('privacy-policy', PrivacyPolicyPreview);
CMS.registerPreviewTemplate('services', ServicePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
