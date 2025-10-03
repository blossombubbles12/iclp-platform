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
        href: '/resources',
        children: [
            { label: 'Case Studies', href: '/resources/cases' },
            { label: 'Policy Briefs', href: '/resources/policy-briefs' },
            { label: 'Governance Tools', href: '/resources/tools' }
        ]
    },
    { 
        label: 'Events', 
        href: '/events',
        children: [
            { label: 'Conferences', href: '/events/conferences' },
            { label: 'Seminars', href: '/events/seminars' },
            { label: 'Workshops', href: '/events/workshops' }
        ]
    },
    { label: 'Contact', href: '/contact' }
];
