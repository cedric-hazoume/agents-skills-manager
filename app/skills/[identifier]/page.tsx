import { notFound } from 'next/navigation';
import { getSkills, Skill } from '../SKILLS';


export default async function SkillPage({ params }: {
  params: Promise<{ identifier: string }>
}) {
  const skills = await getSkills();
  const { identifier } = await params;
  console.log({ identifier, skills });

  const skill: Skill | undefined = skills.find((skill: Skill) => skill.id === identifier);

  if (!skill) {
    return notFound();
  }

  return (
    <article className='max-w-md mx-auto p-4 flex flex-col gap-4'>
      <h1>Name: {skill?.name}</h1>
      <p>Description: {skill?.description}</p>
      <p>Category: {skill?.category}</p>
      <p>Created At: {skill?.createdAt}</p>
      <p>Updated At: {skill?.updatedAt}</p>
    </article>
  )
}
