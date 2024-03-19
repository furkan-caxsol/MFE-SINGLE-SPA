import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DynamicBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const DynamicBreadcrumbs: React.FC<DynamicBreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === items.length - 1 ? (
            <Typography color="text.primary">{item.label}</Typography>
          ) : (
            <Link underline="hover" color="inherit" href={item.href}>
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </Breadcrumbs>
  );
}

export default DynamicBreadcrumbs;
