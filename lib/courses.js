import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getSubdirectories } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllCourses(type) {
  const courses = await getSubdirectories(type)
  return courses
}
