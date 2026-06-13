export const revalidate = 3
export const dynamic = 'force-dynamic'

// Thin route contract only. The complete visible page is owned by src/editable.
export { default, generateMetadata, generateStaticParams } from '@/editable/pages/ClassifiedDetailPage'
