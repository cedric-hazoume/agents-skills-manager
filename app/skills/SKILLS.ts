export type Skill = {
  id: string;
  name: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export let SKILLS: Skill[] = [
  {
    id: '1',
    name: 'Skill 1',
    description: 'Description for Skill 1',
    category: 'Category A',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Skill 2',
    description: 'Description for Skill 2',
    category: 'Category B',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    name: 'Skill 3',
    description: 'Description for Skill 3',
    category: 'Category A',
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
  },
  {
    id: '4',
    name: 'Skill 4',
    description: 'Description for Skill 4',
    category: 'Category B',
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-04T00:00:00Z',
  },
  {
    id: '5',
    name: 'Skill 5',
    description: 'Description for Skill 5',
    category: 'Category A',
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
  {
    id: '6',
    name: 'Skill 6',
    description: 'Description for Skill 6',
    category: 'Category B',
    createdAt: '2024-01-06T00:00:00Z',
    updatedAt: '2024-01-06T00:00:00Z',
  },
]


//get skills
export async function getSkills() {
  await new Promise((resolve) => setTimeout(() => {
    resolve(null)
  }, 3000));
  return [...SKILLS];
}

export async function addSkill(skill: Skill) {
  await new Promise((resolve) => setTimeout(() => { }, 3000));
  SKILLS = [...SKILLS, skill];
  console.log("skill updated", SKILLS);
  return getSkills();
}




//get skill by id
export function getSkillById(id: string) {
  return SKILLS.find((skill) => skill.id === id);
}

//update skill
export function updateSkill(id: string, skill: Skill) {
  const skillIndex = SKILLS.findIndex((skill) => skill.id === id);
  if (skillIndex !== -1) {
    SKILLS[skillIndex] = skill;
  }
}

//delete skill
export function deleteSkill(id: string) {
  const skillIndex = SKILLS.findIndex((skill) => skill.id === id);
  if (skillIndex !== -1) {
    SKILLS.splice(skillIndex, 1);
  }
}

