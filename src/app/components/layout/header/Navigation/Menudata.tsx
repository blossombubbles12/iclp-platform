import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
    { 
        label: 'About', 
        href: '/about',
        children: [
            { label: 'Our Institute', href: '/about' },
            { label: 'Faculty & Research', href: '/faculty' },
            { label: 'Governance Board', href: '/governance-board' }
        ]
    },
    {
        label: 'Courses',
        href: '/courses',
        children: [
            { label: 'All Courses', href: '/courses' },
            { label: 'Governance', href: '/courses#governance' },
            { label: 'Compliance', href: '/courses#compliance' }
        ]
    },
    { 
        label: 'Resources', 
        href: '/case-studies',
        children: [
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'Documentation', href: '/documentation' },
            { label: 'FAQ', href: '/faq' }
        ]
    },
    { 
        label: 'Support', 
        href: '/help-center',
        children: [
            { label: 'Help Center', href: '/help-center' },
            { label: 'Accessibility', href: '/accessibility' },
            { label: 'Partnerships', href: '/partnerships' }
        ]
    },
    { label: 'Contact', href: '/contact' }
];
