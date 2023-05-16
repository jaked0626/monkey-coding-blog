import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllCourses } from '@/lib/courses'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const courses = await getAllCourses('blog')

  return { props: { courses } }
}

export default function Courses({ courses }) {
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Courses
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {courses.map((courseName) => {
            return (
              <div key={courseName} className="mt-2 mb-2 mr-5">
                <Tag text={courseName} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
