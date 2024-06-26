import Image from 'next/image'
import Link from 'next/link'
import Channel from '@/site-config'

const DEFAULT_IMAGE = '/assets/logo.png'
const DEFAULT_NAME = 'Optimizely Demo'

export type BrandLogoProps = {
    href?: string | null
    brandName?: string | null
    locale?:string
    className?: string
}

export default function BrandLogo ({ href, brandName, locale, className }:  BrandLogoProps)
{
    const imgHref = href || DEFAULT_IMAGE
    const siteName = brandName || DEFAULT_NAME
    return <div className={ 'brand max-w-xs ' + (className ?? "") }>
        <Link href={ `/${ Channel.localeToSlug(locale ?? '') ?? '' } `} lang={ locale } className='inline-block w-full h-full'>
            <div className='inline-block relative w-full h-full'>
                <Image src={ imgHref } alt={ siteName } fill className='object-contain' priority sizes="20rem" />
            </div>
            <span className='sr-only'>{siteName}</span>
        </Link>
    </div>
}