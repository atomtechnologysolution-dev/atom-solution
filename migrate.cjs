const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'components', 'sections');

// Helper to replace text in files
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Lucide with Phosphor Icons generically
  content = content.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]lucide-react['"]/g, "import { $1 } from '@phosphor-icons/react'");
  // Basic icon name fixes
  content = content.replace(/ChevronRight/g, 'CaretRight');
  content = content.replace(/Check/g, 'CheckCircle');
  
  // Replace PrimaryButton / SecondaryButton with Button
  content = content.replace(/PrimaryButton/g, 'Button');
  content = content.replace(/SecondaryButton/g, 'Button');
  content = content.replace(/import Button from '\.\.\/ui\/Button'/g, "import Button from '../ui/Button'"); // prevent duplicates if it was PrimaryButton
  content = content.replace(/import Button from '\.\.\/ui\/Button'/g, ""); // we will just insert it at the top
  content = content.replace(/import Button from '\.\.\/ui\/Button'/g, ""); // clean up
  
  // Actually, handle the Button imports correctly
  content = content.replace(/import\s+Button\s+from\s+['"]\.\.\/ui\/PrimaryButton['"]/g, "");
  content = content.replace(/import\s+Button\s+from\s+['"]\.\.\/ui\/SecondaryButton['"]/g, "");
  
  if (content.includes('<Button')) {
    content = `import Button from '../ui/Button'\n` + content;
  }
  
  // Replace variants
  content = content.replace(/variant="light"/g, 'variant="secondary"');
  
  // Replace colors
  content = content.replace(/bg-ink/g, 'bg-brand-dark');
  content = content.replace(/bg-primary-dark/g, 'bg-brand-dark');
  content = content.replace(/bg-primary-soft/g, 'bg-brand-orange/10');
  content = content.replace(/bg-primary/g, 'bg-brand-orange');
  content = content.replace(/bg-blush/g, 'bg-brand-light');
  content = content.replace(/bg-cream/g, 'bg-brand-light');
  content = content.replace(/bg-white/g, 'bg-white'); // keep
  
  content = content.replace(/text-primary/g, 'text-brand-orange');
  content = content.replace(/text-ink/g, 'text-brand-dark');
  content = content.replace(/text-body/g, 'text-gray-600');
  content = content.replace(/text-line/g, 'text-brand-text');
  
  content = content.replace(/border-line/g, 'border-brand-gray');
  content = content.replace(/border-primary/g, 'border-brand-orange');

  fs.writeFileSync(filePath, content, 'utf8');
}

const files = fs.readdirSync(sectionsDir);
files.forEach(file => {
  if (file.startsWith('Service')) {
    processFile(path.join(sectionsDir, file));
  }
});

console.log("Migration script complete");
