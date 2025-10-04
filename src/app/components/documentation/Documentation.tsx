import { DocNavigation } from './DocNavigation'
import { Overview } from './Overview'
import { CoursesGuide } from './CoursesGuide'
import { EnrollmentGuide } from './EnrollmentGuide'
import { BrandingGuide } from './BrandingGuide'
import { NavigationGuide } from './NavigationGuide'
import { APIReference } from './APIReference'
import { DataModel } from './DataModel'

export const Documentation = () => {
  return (
    <div className='dark:bg-darkmode pt-2'>
      <div className='container p-6 lg:mt-16 mt-16 pt-10!'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='lg:col-span-3 col-span-12 lg:block hidden'>
            <DocNavigation />
          </div>
          <div className='lg:col-span-9 col-span-12'>
            <Overview />
            <CoursesGuide />
            <EnrollmentGuide />
            <BrandingGuide />
            <NavigationGuide />
            <APIReference />
            <DataModel />
          </div>
        </div>
      </div>
    </div>
  )
}
