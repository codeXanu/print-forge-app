import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import type { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoriesName } =  await params
  console.log(`categoryname: ${categoriesName}`)
  const category = getCategoryBySlug(categoriesName)
  const models = await getModels({ category: categoriesName })

  return <ModelsGrid title={category.displayName} models={models} />
}